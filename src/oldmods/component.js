/* ==========================================================================
   #COMPONENT
   ========================================================================== */

/**
 * The component module contains methods to create and render components.
 */


singular.component = (function () {

/* 
   #render
   ========================================================================== */

/**
 * The render function is used to render a value in a single container.
 */

var render = function(value, el) {

	function html() { return singular.template(value.draw(el), value); }

	/**
	 * Element: Undefined
	 *
	 * If the element is undefined, break from the function.  
	 */

	if (singular.isUndefined(el)) {

	 	return;

	}

	/**
	 * Element: String
	 *
	 * If the element is a string, user querySelector
	 */

	if (singular.isString(el)) {

	 	el = document.querySelector(el);

	}

	/**
	 * Value: String
	 *
	 * If the value is a string, render the string's value.  
	 */

	if (singular.isString(value)) {

	 	el.innerHTML = value;

	}

	/**
	 * Value: Function
	 *
	 * If the value is a function, render the return value.  
	 */

	if (singular.isFunction(value)) {

	 	el.innerHTML = value();

	}

	/**
	 * Value: Init Function
	 *
	 * If the value is an object with an init function, call it.
	 */

	if (singular.isObject(value) && singular.isFunction(value.init)) {

	 	value.init(el);

	}

	/**
	 * Value: Draw Function
	 *
	 * If the value is an object with a draw function, call it.
	 */

	if (singular.isObject(value) && singular.isFunction(value.draw)) {
		
		/**
		 * Observe the object for changes and redraw it.
		 */

		watch(value, function() {

			el.innerHTML = html();

		});

		el.innerHTML = html();

	}

};

/* 
   #renderAll
   ========================================================================== */

/**
 * The renderAll function is used to render a value in multiple containers.
 */

var renderAll = function(value, selector) {

	/**
	 * String
	 *
	 * If the selector is a string, use querySelectorAll.  
	 */

	if (singular.isString(value)) {

	 	var els = document.querySelectorAll(selector);

		Array.prototype.forEach.call(els, function(el, index) {

			render(value, el);

		});

	}

};

/* 
   @return
   ========================================================================== */

return {
	render: render,
	renderAll: renderAll
};

})();

