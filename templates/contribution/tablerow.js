(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tablerow'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <td>";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n  <td>";
  foundHelper = helpers.address;
  stack1 = foundHelper || depth0.address;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "address", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n  <td>";
  foundHelper = helpers.agent;
  stack1 = foundHelper || depth0.agent;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "agent", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n  <td>";
  foundHelper = helpers.amount;
  stack1 = foundHelper || depth0.amount;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "amount", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n  <td>";
  foundHelper = helpers.dateString;
  stack1 = foundHelper || depth0.dateString;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "dateString", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n  <td>";
  foundHelper = helpers.campaign;
  stack1 = foundHelper || depth0.campaign;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "campaign", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n  <td>";
  foundHelper = helpers.ward;
  stack1 = foundHelper || depth0.ward;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "ward", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n  <td>";
  foundHelper = helpers.year;
  stack1 = foundHelper || depth0.year;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "year", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</td>\n";
  return buffer;}

  buffer += "<tr>\n";
  foundHelper = helpers.properties;
  stack1 = foundHelper || depth0.properties;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</tr>\n";
  return buffer;});
})();