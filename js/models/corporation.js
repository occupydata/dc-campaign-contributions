var Corporation = Backbone.Model.extend({
  initialize: function(args) {
    if(!args || !args.address || !args.coordinates) {
      throw 'InvalidConstructArgs';
    }

    this.set('contributions', new ContributionCollection());
  }    
});
