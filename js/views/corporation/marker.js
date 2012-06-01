var CorporationMarker = Backbone.View.extend({
  initialize: function (args) {
    dispatch.on(this.model.cid + ':listitem:click', this.click, this);
    dispatch.on(this.model.cid + ':marker:toggle', this.toggle, this);
    dispatch.on(this.model.cid + ':marker:show', this.show, this);
    dispatch.on(this.model.cid + ':marker:hide', this.hide, this);
  },

  events: {
    'click': 'click'
  },

  render: function() {
    this.setElement(Handlebars.templates.marker(this.model.toJSON()));
    return this;
  },

  // Go to GeoJSON point and expand label
  click: function(e) {
    if(e) { e.preventDefault() };

    // Hide (fullscreen) schedule on setLocation for small screens
    // TODO: Slide offscreen instead of hide(), move this someplace else?
    if (!matchMedia('(min-width: 992px)').matches) {
      $('.schedule').hide();
    }

    var center = m.locationCoordinate({ lat: m.getCenter().lat, lon: m.getCenter().lon});
    var point = m.locationCoordinate({ lat: this.model.get('coordinates')[1], lon: this.model.get('coordinates')[0]});

    var marker = this;

    if(!_.isEqual(center, point)) {
      this.ease(this, center, point, 500, function() {
        dispatch.trigger(marker.model.cid + ':table:html');
      });
    } else {
      dispatch.trigger(this.model.cid + ':table:html');
    }
  },

  ease: function(marker, center, point, time, callback) {
    ea.from(center.zoomTo(m.getZoom()))
      .to(point.zoomTo(this.getZoom()))
      .run(time, callback);
  },

  getDate: function() {
    console.log("Start: " + (new Date(_.min(_.map(_.pluck(this.model.get('properties').date, 'start'), function(date) {return Date.parse(date);})))).toString());
    console.log("End: " + (new Date(_.max(_.map(_.pluck(this.model.get('properties').date, 'end'), function(date) {return Date.parse(date);})))).toString());
  },

  // Return defined zoom level for point, or current zoom level if undefined
  getZoom: function() {
    return this.model.get('z') || m.getZoom();
  },

  toggle: function() {
    if (!this.$el.hasClass('expand')) {
      this.expand();
    } else {
      this.collapse();
    }
  },

  expand: function() {
    this.$el.addClass('expand').css({'z-index': 9999, 'max-height': 28 + this.$el.find('p').innerHeight()})
      .animate({'max-width': '328px'});
    dispatch.trigger(this.model.cid + ':marker:expand');
  },

  collapse: function() {
    this.$el.animate({'max-width': '28px', 'z-index': 0}, function() {
      $(this).removeClass('expand');
    });
    dispatch.trigger(this.model.cid + 'marker:collapse');
  },

  show: function() {
    this.$el.removeClass('hidden');
  },

  hide: function() {
    this.$el.addClass('hidden');
  }
});
