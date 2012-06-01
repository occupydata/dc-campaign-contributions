var m, ea;

// Event aggregator for cross-view communication
var dispatch = _.extend({}, Backbone.Events);

$(window).load(function() {
  var url = 'http://api.tiles.mapbox.com/v3/mapbox.mapbox-light.jsonp';

  // Init Backbone collection
  var corporations = new CorporationCollection();

  // Init select arrays
  var years = [];
  var wards = [];
  var campaigns = [];
  
  // Define GeoJSON data layer
  var geojsonlayer = mmg().factory(function(x) {
    var contribution = new Contribution(x);

    var year = contribution.get('properties').year;
    if(_.indexOf(years, year) < 0 && year != undefined)
      years.push(year);

    var ward = contribution.get('properties').ward;
    if(_.indexOf(wards, ward) < 0 && ward != undefined)
      wards.push(ward);

    var campaign = contribution.get('properties').campaign;
    if(_.indexOf(campaigns, campaign) < 0 && campaign != undefined)
      campaigns.push(campaign);

    var address = contribution.get('properties').address;
    var index = _.indexOf(corporations.pluck('address'), address);

    var corporation, collection;

    if(index < 0) {
      try {
        corporation = new Corporation({
          address: address,
          coordinates: contribution.get('geometry').coordinates
        });

        corporation.set('marker', new CorporationMarker({ model: corporation, dispatch: dispatch }));
        corporation.set('table', new CorporationTable({ model: corporation, dispatch: dispatch }));

        corporations.add(corporation);

        return corporation.get('marker').render().el; 
      } catch(err) {}
    } else {
      corporation = corporations.at(index);

      collection = corporation.get('contributions');
      collection.add(contribution);
    }
  }).features(contrib.features);

  // Determine maximum campaign contributions per corporation
  var max = 0;

  corporations.each(function(corporation, index) {
    var corporationMax = 0;

    _.each(corporation.get('contributions').groupBy(function(contribution, index) {
      return contribution.get('properties').campaign;
    }), function(campaignContributions) {
      var length = campaignContributions.length;

      if(length > corporationMax) { corporationMax = length };
      if(length > max) { max = length };
    });

    corporation.set('max', corporationMax);
    corporation.set('table', corporation.get('table').render().el);
  });

  // Set corporation quantiles
  corporations.each(function(corporation, index) {
    var quantile = Math.ceil((corporation.get('max') / max) * 5);

    switch(quantile) {
      case 1:
        corporation.set('quantile', 'one');
        corporation.get('marker').$el.addClass('one');
        break;
      case 2:
        corporation.set('quantile', 'two');
        corporation.get('marker').$el.addClass('two');
        break;
      case 3:
        corporation.set('quantile', 'three');
        corporation.get('marker').$el.addClass('three');
        break;
      case 4:
        corporation.set('quantile', 'four');
        corporation.get('marker').$el.addClass('four');
        break;
      case 5:
        corporation.set('quantile', 'five');
        corporation.get('marker').$el.addClass('five');
        break;
      default:
        break;
    }
  });

  wax.tilejson(url, function(tilejson) {
    // Init map using modestmaps
    m = new MM.Map('map', new wax.mm.connector(tilejson), null, [
      new easey.DragHandler(),
      new easey.TouchHandler(),
      new easey.DoubleClickHandler()
    ]);

    // Set zoom to street level, centered on Washington, DC
    m.setCenterZoom({ lat: 38.8903694152832, lon: -77.0319595336914 }, 13);

    // Set min/max zoom levels
    m.setZoomRange(4, 17);

    // Add bandwidth detection
    var bw = wax.mm.bwdetect(m);

    // Add tooltip support
    var interactivity = wax.mm.interaction()
      .map(m)
      .tilejson(tilejson)
      .on(wax.tooltip().parent(m.parent).events());

    // Add easey integration
    ea = easey().map(m);

    // Add GeoJSON layer to map
    m.addLayer(geojsonlayer);

    // Add zoom controls to top left corner
    wax.mm.zoomer(m).appendTo(m.parent);
  });

  $(document).ready(function() {
    $('#year, #ward, #campaign').change(function() {
      var year = $('#year').find('option:selected').attr('value');
      var ward = $('#ward').find('option:selected').attr('value');
      var campaign = $('#campaign').find('option:selected').attr('value');

      corporations.each(function(corporation, index) {
        var cid = corporation.cid;
        dispatch.trigger(cid + ':marker:hide');

        corporation.get('contributions').each(function(contribution, index) {
          if(contribution.get('properties').year == year || year == 'all')
            if(contribution.get('properties').ward == ward || ward == 'all')
              if(contribution.get('properties').campaign == campaign || campaign == 'all')
                dispatch.trigger(cid + ':marker:show');
        });
      });
    });

    // Populate select dropdowns
    var year = document.getElementById('year');
    for(index in years.sort(function(a,b){return b-a})) {
      var value = years[index];
      year.options[year.options.length] = new Option(value, value);
    }

    var ward = document.getElementById('ward');
    for(index in wards.sort()) {
      var value = wards[index];
      ward.options[ward.options.length] = new Option(value, value);
    }

    var campaign = document.getElementById('campaign');
    for(index in campaigns.sort()) {
      var value = campaigns[index];
      campaign.options[campaign.options.length] = new Option(value, value);
    }
  });
});
