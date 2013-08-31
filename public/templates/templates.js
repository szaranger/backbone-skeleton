(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['compare'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<option>"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>";
  return buffer;
  }

  buffer += "<!--<select id=\"item1\">\n	";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</select>\n<select id=\"item2\" class=\"pull-left\">\n	";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</select>-->\n<div>\n	<input id=\"cameraItemsLeft\" class=\"compare-item\" placeholder=\"Camera 1\"></input>\n	<span>&</span>\n	<input id=\"cameraItemsRight\" class=\"compare-item\" placeholder=\"Camera 2\"></input>\n</div>\n<div>\n	<h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n	<p><span class=\"label\">";
  if (stack1 = helpers.category) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.category; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></p>\n	<p><span class=\"label\">";
  if (stack1 = helpers.megapixels) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.megapixels; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></p>\n	<!--img src=\"photos/";
  if (stack1 = helpers.imagepath) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.imagepath; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-polaroid\" /-->\n</div>\n<p></p>\n<button type=\"button\" class=\"btn\" id=\"compare\">Compare</button>\n\n";
  return buffer;
  });
templates['compareresult'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div>\n		<h1>"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n		<p><span class=\"label\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.category)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></p>\n		<p><span class=\"label\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.megapixels)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></p>\n		<img src=\"photos/"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.imagepath)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"img-polaroid\" />\n	</div>\n	";
  return buffer;
  }

  buffer += "<div id=\"compare-result\">\n\n	";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	<button type=\"button\" class=\"btn\" id=\"compare-another\">Back</button>\n</div>\n\n";
  return buffer;
  });
templates['details'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div>\n	<h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n	<p><span class=\"label\">";
  if (stack1 = helpers.category) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.category; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></p>\n	<p><span class=\"label\">";
  if (stack1 = helpers.megapixels) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.megapixels; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></p>\n	<img src=\"photos/";
  if (stack1 = helpers.imagepath) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.imagepath; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-polaroid\" />\n</div>\n<p></p>\n<button type=\"button\" class=\"btn btn-danger confirm-delete\">Delete</button>";
  return buffer;
  });
templates['form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form class=\"form-horizontal\">\n	<fieldset>\n		<legend>New Menu Item</legend>\n		<div class=\"control-group\">\n			<input type=\"text\" name=\"name\" placeholder=\"Name\" />\n		</div>\n		<div class=\"control-group\">\n			<input type=\"text\" name=\"category\" placeholder=\"Category\" />\n		</div>\n		<div class=\"control-group\">\n			<input type=\"text\" name=\"url\" placeholder=\"URL\" />\n		</div>\n		<div class=\"control-group\">\n			<input type=\"text\" name=\"imagepath\" placeholder=\"Path to image\" />\n		</div>\n		<button type=\"button\" class=\"btn btn-danger\">Cancel</button>\n		<button type=\"button\" class=\"btn btn-primary\">Save</button>\n	</fieldset>\n</form>";
  });
templates['menu'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<li>"
    + escapeExpression(((stack1 = ((stack1 = depth0.attributes),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>";
  return buffer;
  }

  buffer += "<ul>\n	";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });
})();