var m, ea;

// Event aggregator for cross-view communication
var dispatch = _.extend({}, Backbone.Events);

$(window).load(function() {
  var url = 'http://api.tiles.mapbox.com/v3/mapbox.mapbox-light.jsonp';

  // Init Backbone collection
  var collection = new FeatureCollection();
  
  // Define a GeoJSON data layer, bind onclick to setLocation()
  mmg().factory(function(x) {
    var feature = new Feature(x);
    feature.set('marker', new FeatureMarker({ model: feature, dispatch: dispatch }));

    var details;
    feature.set('details', new FeatureDetails({ model: feature, dispatch: dispatch }));
    details = feature.get('details').render();
    details.$el.appendTo('#sidebar').css('right', -details.$el.width());

    collection.push(feature);
  }).features(contrib.features);

  wax.tilejson(url, function(tilejson) {
    // Init map using modestmaps
    m = new MM.Map('map', new wax.mm.connector(tilejson), null, [
      new easey.DragHandler(),
      new easey.TouchHandler(),
      new easey.DoubleClickHandler()
      //new easey.MouseWheelHandler()
    ]);

    // Set zoom to street level, centered on Washington, DC
    m.setCenterZoom({ lat: 38.8903694152832, lon: -77.0319595336914 }, 13);

    // Set min/max zoom levels
    //m.setZoomRange(9, 16);

    // Add bandwidth detection
    var bw = wax.mm.bwdetect(m);

    // Add tooltip support
    var interactivity = wax.mm.interaction()
      .map(m)
      .tilejson(tilejson)
      .on(wax.tooltip().parent(m.parent).events());

    // Add easey integration
    ea = easey().map(m);

    // Add zoomed event listener, hide GeoJSON layer further out than zoom level 13
    /*
    m.addCallback('zoomed', function(m) {
      if(m.getZoom() >= 13) {
        dispatch.trigger('marker:show');
      } else {
        dispatch.trigger('marker:hide');
      }
    });    
    */

    // Add zoom controls to top left corner
    wax.mm.zoomer(m).appendTo(m.parent);

    // Add select event binding and change after map init
    var select = document.getElementById('year');

    var years = _.uniq(
      _.reject(collection.map(function(feature) {
          return feature.get('properties').date.getUTCFullYear();
        }), function(year) {
          return _.isNaN(year);
        })
      ).sort(function(a,b) {
        return b-a;
      });

    for(index in years) {
      select.options[select.options.length] = new Option(years[index], years[index]);
    }

    $(select).change(function() {
      var year = parseInt($(select).find('option:selected').attr('value'));

      var geojsonlayer = mmg().factory(function(feature) {
        if(feature.get('properties').date.getUTCFullYear() === year) {
          return feature.get('marker').render().el;
        }
      }).features(_.toArray(collection));

      if(m.getLayerAt(1))
        m.setLayerAt(1, geojsonlayer);
      else
        m.addLayer(geojsonlayer).draw();
    }).attr('value', 2011).change();
  });

  $(document).ready(function() {
    // color code points by quantile, amount at same address
    // tooltip to show all contributions from same address in filter set
    
    // Split collection into air/land/sea categories
    var categories = collection.groupBy(function(feature) {
      return feature.get('properties').category;
    });

    // Append each category collection view to the interface
    _.each(categories, function(category, name) { 
      var ul = new FeatureList({collection: new FeatureCollection(category)});

      var li = $(document.createElement('li'))
        .append($(document.createElement('h3')).html(name))
        .append(ul.render().el)
        .appendTo('.schedule .wrapper ul.museums');
    });

    // Filter schedule by date
    /*
    collection.filter(function(feature) {
      var dates = _.toArray(_.map(_.pluck(feature.get('properties').date, 'start'), function(date) {
        return new Date(Date.parse(date));
      }));
      
      return _.filter(dates, function(date) {
        return _.isDate(date);
      });
    });

    for(var i = _.min(schedule); i < _.max(schedule); i + 86400000) {
      _.each(schedule, function(date) {
        console.log(date.getTime());

        if(date.getTime() === i) {
          console.log(date);
        }
      });
    }
    */

    $('a.footer').click(function(e) {
      e.preventDefault();
      $('.schedule').show().animate({'left': 0});
    });

    $('.schedule .back a, .day .back a').live('click', function(e) {
      e.preventDefault();
      var panel = $(this).parent().parent();
      panel.animate({'left': -panel.width()});
    });

    $('.schedule ul.days li a').click(function(e) {
      e.preventDefault();
      var html = ich.day(schedule);
      html.appendTo('#sidebar').css('left', -html.width()).show().animate({'left': 0});
    });
  });
});
