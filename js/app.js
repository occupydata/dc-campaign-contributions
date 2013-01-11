var m, ea;

// Event aggregator for cross-view communication
var dispatch = _.extend({}, Backbone.Events);

$(window).load(function() {
  var url = 'http://a.tiles.mapbox.com/v3/occupy.map-nwufiify.jsonp';

  // Init Backbone collection
  var corporations = new CorporationCollection();

  // Init select arrays
  var years = [];
  var wards = [];
  var candidates = [];
  
  // Define GeoJSON data layer
  var geojsonlayer = mmg().factory(function(x) {
    var contribution = new Contribution(x);

    var year = contribution.get('properties').year;
    if(_.indexOf(years, year) < 0 && year != undefined)
      years.push(year);

    var ward = contribution.get('properties').ward;
    if(_.indexOf(wards, ward) < 0 && ward != undefined)
      wards.push(ward);

    var candidate = contribution.get('properties').candidate;
    if(_.indexOf(candidates, candidate) < 0 && candidate != undefined)
      candidates.push(candidate);

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

        collection = corporation.get('contributions');
        collection.add(contribution);

        return corporation.get('marker').render().el; 
      } catch(err) {}
    } else {
      corporation = corporations.at(index);

      collection = corporation.get('contributions');
      collection.add(contribution);
    }
  }).features(contrib.features);

  // Determine maximum committee contributions per corporation
  var max = 0;

  corporations.each(function(corporation, index) {
    var corporationMax = 0;
    var committeeMax;

    _.each(corporation.get('contributions').groupBy(function(contribution, index) {
      return contribution.get('properties').committee;
    }), function(committeeContributions, committee) {
      var length = committeeContributions.length;

      if(length > corporationMax) { corporationMax = length; };
      if(length > max) { max = length; };
    });

    corporation.set({
      'max': corporationMax
    });
  });

  // Init legend
  var i = 0;
  $('#legend').find('.quantile').each(function() {
    var quantileMin = (i == 0 ? 2 : Math.ceil((max / 5) * i));
    var quantileMax = Math.floor((max / 5) * (i + 1));

    $(this).find('p').html(quantileMin + ' - ' + quantileMax);
    i++;
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
    $('#year, #ward, #candidate').change(function() {
      $('.mmg-expand.expand').removeClass('expand');
      $('#contributions').html('');

      var year = $('#year').find('option:selected').attr('value');
      var ward = $('#ward').find('option:selected').attr('value');
      var candidate = $('#candidate').find('option:selected').attr('value');

      corporations.each(function(corporation, index) {
        var cid = corporation.cid;
        dispatch.trigger(cid + ':marker:hide');

        corporation.get('contributions').each(function(contribution, index) {
          if(contribution.get('properties').year == year || year == 'all')
            if(contribution.get('properties').ward == ward || ward == 'all')
              if(contribution.get('properties').candidate == candidate || candidate == 'all')
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

    var candidate = document.getElementById('candidate');
    for(index in candidates.sort()) {
      var value = candidates[index];
      candidate.options[candidate.options.length] = new Option(value, value);
    }
  });
});
