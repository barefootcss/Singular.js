/* ==========================================================================
   #COMPONENT
   ========================================================================== */

/**
 * The component module contains methods to create and render components.
 */


singular.component = (function () {

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
	if (singular.isObject(component) && singular.isDefined(el)) {
		initProp(component, el);
		drawProp(component, el);
	}	
};

/* 
   #renderAll
   ========================================================================== */

/**
 * The `renderAll` function calls render() for each match on a selector.
 */

var renderAll = function(component, selector) {
	if (singular.isObject(component) && singular.isString(selector)) {
		var els = document.querySelectorAll(selector);
		Array.prototype.forEach.call(els, function(el, index) {
			render(component, el);
		});
	}	
};

/* 
   #initProp
   ========================================================================== */

/**
 * The `init` property calls a function when the component is created.
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
 * The `draw` property calls a function when the component is created and changed.
 */

var drawProp = function(component, el) {
	function html() { return singular.template(component.draw(el), component); }

	if(singular.isFunction(component.draw)) {
		watch(component, function() {
			el.innerHTML = html();
		});
		el.innerHTML = html();
	}
};

/* 
   @return
   ========================================================================== */

return {
	create: create, 
	render: render,
	renderAll: renderAll
};

})();


