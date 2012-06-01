ContributionList = Backbone.View.extend({
  tagName: 'ul',
  
  initialize: function() {
    _.bindAll(this, 'renderItem');
  },
  
  renderItem: function(model) {
    var featureListItem = new ContributionListItem({model: model, dispatch: dispatch});
    $(this.el).append(featureListItem.render().el);
  },
  
  render: function() {
    this.collection.each(this.renderItem);
    return this;
  }
});
