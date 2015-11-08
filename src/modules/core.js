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
   #isFunction
   ========================================================================== */

/**
 * The isFunction function returns true is the value is a function.
 */

singular.isFunction = function(value) { return typeof value === 'function'; };

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
a
singular.isUndefined = function(value) { return typeof value === 'undefined'; };


