var ContributionTableRow = Backbone.View.extend({
  render: function() {
    this.setElement(Handlebars.templates.tablerow(this.model.toJSON()));
    return this;
  }
});
