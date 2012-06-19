CorporationTable = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this, 'renderItem');
    dispatch.on(this.model.cid + ':table:html', this.html, this);
  },
  
  renderItem: function(model) {
    var year = $('#year').find('option:selected').attr('value');
    var ward = $('#ward').find('option:selected').attr('value');
    var candidate = $('#candidate').find('option:selected').attr('value');

    if(model.get('properties').year == year || year == 'all') {
      if(model.get('properties').ward == ward || ward == 'all') {
        if(model.get('properties').candidate == candidate || candidate == 'all') {
          var contributionTableRow = new ContributionTableRow({model: model, dispatch: dispatch});
          $(this.el).append(contributionTableRow.render().el);
        }
      }
    }
  },
  
  render: function() {
    this.el = $(document.createElement('table'));

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
    $('#contributions').html(this.render().el);
  }
});
