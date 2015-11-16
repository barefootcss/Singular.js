/* ==========================================================================
   #ROUTE
   ========================================================================== */

/**
 * The route module contains members to create and manage routes.
 */

singular.route = (function () {

/* 
   #routes
   ========================================================================== */

/**
 * The routes object contains all the route definitions.
 */

var routes = {};

/* 
   #map
   ========================================================================== */

/**
 * The map function creates a route definition.
 */

var map = function(route, cb) { 
	if(singular.isString(route) && singular.isFunction(cb)) {
		routes[route] = cb;
	}
};

/* 
   #unmap
   ========================================================================== */

/**
 * The unmap function removes a route definition.
 */

var unmap = function(route) {
   if(singular.isDefined(routes[route])) {
	  delete routes[route];
   }
};

/* 
   #clear
   ========================================================================== */

/**
 * The clear function removes all route definitions.
 */

var clear = function() {
	routes = {};
};

/* 
   #call
   ========================================================================== */

/**
 * The call function executes the callback of a route definition.
 */

var call = function(route) {
   if(singular.isDefined(routes[route])) {
	  routes[route]();
   }
};

/* 
   #listen
   ========================================================================== */

/**
 * The listen function listens to the URL fragment for changes.
 */

var listen = function() {
	window.addEventListener('load', dispatch);
	window.addEventListener('hashchange', dispatch);
};

/* 
   #ignore
   ========================================================================== */

/**
 * The ignore function stops listening to the URL fragment for changes.
 */

var ignore = function() {
	window.removeEventListener('load', dispatch);
	window.removeEventListener('hashchange', dispatch);
};

/* 
   #dispatch
   ========================================================================== */

/**
 * The dispatch function calls the route without query parameters.
 */

var dispatch = function() {
	call(location.hash.split("?")[0]);
};

/* 
   @return
   ========================================================================== */

return {
	map: map,
	unmap: unmap,
	clear: clear,
	call: call,
	listen: listen,
	ignore: ignore
};

})();


