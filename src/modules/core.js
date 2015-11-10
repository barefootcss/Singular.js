/* ==========================================================================
   #CORE
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
 * The isBoolean function returns true is the value is a number.
 */

singular.isBoolean = function(value) { return typeof value === 'boolean'; };

/* 
   #isFunction
   ========================================================================== */

/**
 * The isArray function returns true is the value is an array.
 */

singular.isArray = function(value) { return value.constructor === Array; };

/* 
   #isFunction
   ========================================================================== */

/**
 * The isFunction function returns true is the value is a function.
 */

singular.isFunction = function(value) { return typeof value === 'function'; };

/* 
   #isObject
   ========================================================================== */

/**
 * The isObject function returns true is the value is a string.
 */

singular.isObject = function(value) { return typeof value === 'object'; };

/* 
   #isDefined
   ========================================================================== */

/**
 * The isDefined function returns true is the value is defined.
 */

singular.isDefined = function(value) { return typeof value !== 'undefined'; };

/* 
   #isUndefined
   ========================================================================== */

/**
 * The isUndefined function returns true is the value is undefined.
 */

singular.isUndefined = function(value) { return typeof value === 'undefined'; };

/* 
   #concat
   ========================================================================== */

/**
 * The concat function returns a concatenated string from multiple arguments.
 */

singular.concat = function() { return Array.prototype.slice.call(arguments).join(""); };

/* 
   #each
   ========================================================================== */

/**
 * The each function iterates through an object's properties.
 */

singular.each = function(obj, cb) {
    if(singular.isArray(obj)) {
        obj.forEach(function(value) {
            cb(value);
        });
        return;
    }    
    if(singular.isObject(obj)) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                cb(obj, obj[prop]);
            }
        }
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