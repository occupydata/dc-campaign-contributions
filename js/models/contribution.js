var Contribution = Backbone.Model.extend({
  initialize: function(args) {
    if(!args || !args.type || !args.geometry.type || !args.geometry.coordinates) {
      throw 'InvalidConstructArgs';
    }

    args.properties.date = new Date(Date.parse(args.properties.date));

    args.properties.dateMonth = args.properties.date.getUTCMonth() + 1;
    args.properties.dateDay = args.properties.date.getUTCDate();
    args.properties.dateYear = args.properties.date.getUTCFullYear();
    args.properties.dateString =  args.properties.dateMonth + '/'
      + args.properties.dateDay + '/'
      + args.properties.dateYear.toString().substring(2,4);
  }    
});
