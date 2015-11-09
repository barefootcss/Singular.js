/* ==========================================================================
   #COM
   ========================================================================== */

/**
 * The com module contains methods to create and render components.
 */


singular.com = (function () {

/* 
   #create
   ========================================================================== */

/**
 * The create function is used to create an observable component.
 */

 var create = function(props) { return singular.isObject(props) ? props : {}; };

/* 
   #render
   ========================================================================== */

/**
 * The render function is used to render a component on the page.
 */

 var render = function(component, el) {
	initProp(component, el);
	drawProp(component, el);
 };

/* 
   #initProp
   ========================================================================== */

/**
 * A component's init function is called when the component is created.
 */

var initProp = function(component, el) {
	if(singular.isFunction(component.init)) {
		component.init(el);
	}
};

/* 
   #drawProp
   ========================================================================== */

/**
 * TA component's draw function is called when the component needs to render.
 */

var drawProp = function(component, el) {
	function html() { return singular.com.template(component.draw(el), component); }

	if(singular.isFunction(component.draw)) {
		watch(component, function() {
			el.innerHTML = html();
		});
		el.innerHTML = html();
	}
};

/* 
   #template
   ========================================================================== */

/**
 * The template function returns a string from a handlebar string.
 */

var template = function(content, values) {
    return content.replace(/{{(.+?)}}/g, function(match, prop) {
        return prop.split('.').reduce(function(obj, key) { 
            return obj[key];
        }, values);
    });  
};

/* 
   @return
   ========================================================================== */

return {
	create: create, 
	render: render,
	template: template
};

})();


