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
	if (singular.isObject(component) && singular.isDefined(el)) {
		initProp(component, el);
		drawProp(component, el);
	}	
};

/* 
   #initProp
   ========================================================================== */

/**
 * A component's init function is called its created.
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
 * TA component's draw function is called it needs to render.
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
	render: render
};

})();


