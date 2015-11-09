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
 * The concat function a concatenated string from multiple arguments.
 */

singular.concat = function() { return Array.prototype.slice.call(arguments).join(""); };
