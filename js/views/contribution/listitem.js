var ContributionListItem = Backbone.View.extend({
  events: {
    'click a': function() {
      dispatch.trigger(this.model.cid + ':listitem:click');
    }
  },

  render: function() {
    this.setElement(Handlebars.templates.listitem(this.model.toJSON()));
    return this;
  }
});
