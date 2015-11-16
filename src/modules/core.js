/* ==========================================================================
   #COM
   ========================================================================== */

/**
 * The core module contains top-level functions essential to the framework.
 */

/* 
   #isString
   ========================================================================== */

/**
 * The isString function returns true is the value is a string.
 */

singular.isString = function(value) { return typeof value === 'string'; };

/* 
   #isNumber
   ========================================================================== */

/**
 * The isNumber function returns true is the value is a number.
 */

singular.isNumber = function(value) { return typeof value === 'number'; };

/* 
   #isBoolean
   ========================================================================== */

/**
 * The isBoolean function returns true if the argument is a Boolean.
 */

singular.isBoolean = function(value) { return typeof value === 'boolean'; };

/* 
   #isArray
   ========================================================================== */

/**
 * The isArray function returns true if the argument is an Array.
 */

singular.isArray = function(value) { return value.constructor === Array; };

/* 
   #isFunction
   ========================================================================== */

/**
 * The isFunction function returns true if the argument is a Function.
 */

singular.isFunction = function(value) { return typeof value === 'function'; };

/* 
   #isObject
   ========================================================================== */

/**
 * The isObject function returns true if the argument is an Object.
 */

singular.isObject = function(value) { return typeof value === 'object'; };

/* 
   #isNodeList
   ========================================================================== */

/**
 * The isNodeList function returns true if the argument is a NodeList.
 */

singular.isNodeList = function(value) { return value == '[object NodeList]'; };

/* 
   #isDefined
   ========================================================================== */

/**
 * The isDefined function returns true if the argument is defined.
 */

singular.isDefined = function(value) { return typeof value !== 'undefined'; };

/* 
   #isUndefined
   ========================================================================== */

/**
 * The isUndefined function returns true if the argument is undefined.
 */

singular.isUndefined = function(value) { return typeof value === 'undefined'; };

/* 
   #concat
   ========================================================================== */

/**
 * The concat function concatenates multiple arguments and returns a String.
 */

singular.concat = function() { return Array.prototype.slice.call(arguments).join(""); };

/* 
   #each
   ========================================================================== */

/**
 * The each function iterates through an object's properties.
 */

singular.each = function(value, cb) {

    /**
     * Value: Array
     *
     * If vallue is an array, iterate through the array values.
     */

    if(singular.isArray(value)) {
        value.forEach(function(key) {
            cb(key);
        });
        return;
    }    

    /**
     * Value: Object
     *
     * If value is an object, iterate through the object properties.
     */
    
    if(singular.isObject(value)) {
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                cb(value, value[key]);
            }
        }
    }
};

/* 
   #renderOne
   ========================================================================== */

/**
 * The render function renders a value in a single container.
 */

singular.renderOne = function(value, el) {

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

		/**
		 * Do an initial draw.
		 */

		el.innerHTML = html();
	}

};

/* 
   #renderAll
   ========================================================================== */

/**
 * The render function renders a value in multiple containers.
 */

singular.renderAll = function(value, el) {

	var els;

	/**
	 * Element: String
	 *
	 * If the element is a string, use querySelectorAll.  
	 */

	if (singular.isString(el)) {

	 	els = document.querySelectorAll(el);

		Array.prototype.forEach.call(els, function(el, index) {
			singular.renderOne(value, el);
		});

	}

	/**
	 * Element: NodeList
	 *
	 * If the element is an array, just pass it.  
	 */

	if (singular.isNodeList(el)) {

	 	els = el;

		Array.prototype.forEach.call(els, function(el, index) {
			singular.renderOne(value, el);
		});

	}

};

/* 
   #template
   ========================================================================== */

/**
 * The template function replaces double-brackets in a string with values.
 */

singular.template = function(content, values) {
    return content.replace(/{{(.+?)}}/g, function(match, prop) {
        return prop.split('.').reduce(function(obj, key) { 
            return obj[key];
        }, values);
    });  
};
