CorporationTable = Backbone.View.extend({
  tagName: 'table',
  
  initialize: function() {
    _.bindAll(this, 'renderItem');
    dispatch.on(this.model.cid + ':table:html', this.html, this);
  },
  
  renderItem: function(model) {
    var contributionTableRow = new ContributionTableRow({model: model, dispatch: dispatch});
    $(this.el).append(contributionTableRow.render().el);
  },
  
  render: function() {
    $(document.createElement('tr'))
      .append($(document.createElement('th')).html('Contributor'))
      .append($(document.createElement('th')).html('Address'))
      .append($(document.createElement('th')).html('Registered Agent'))
      .append($(document.createElement('th')).html('Amount'))
      .append($(document.createElement('th')).html('Date'))
      .append($(document.createElement('th')).html('Candidate'))
      .append($(document.createElement('th')).html('Committee'))
      .append($(document.createElement('th')).html('Ward'))
      .append($(document.createElement('th')).html('Year'))
      .appendTo(this.el);

    this.model.get('contributions').each(this.renderItem);
    return this;
  },

  html: function() {
    $('#contributions').html(this.model.get('table'));
  }
});
