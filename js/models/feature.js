var Feature = Backbone.Model.extend({
  initialize: function(args) {
    if(!args || !args.type || !args.geometry.type || !args.geometry.coordinates) {
      throw 'InvalidConstructArgs';
    }

    args.properties.date = new Date(Date.parse(args.properties.date));
  }    
});
