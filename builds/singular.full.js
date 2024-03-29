/**
 * DEVELOPED BY
 * GIL LOPES BUENO
 * gilbueno.mail@gmail.com
 *
 * WORKS WITH:
 * IE8*, IE 9+, FF 4+, SF 5+, WebKit, CH 7+, OP 12+, BESEN, Rhino 1.7+
 * For IE8 (and other legacy browsers) WatchJS will use dirty checking  
 *
 * FORK:
 * https://github.com/melanke/Watch.JS
 */

 /* jshint ignore:start */

"use strict";(function(t){"object"===typeof exports?module.exports=t():"function"===typeof define&&define.amd?define(t):(window.WatchJS=t(),window.watch=window.WatchJS.watch,window.unwatch=window.WatchJS.unwatch,window.callWatchers=window.WatchJS.callWatchers)})(function(){function t(){u=null;for(var a=0;a<v.length;a++)v[a]();v.length=0}var k={noMore:!1,useDirtyCheck:!1},p=[],l=[],w=[],C=!1;try{C=Object.defineProperty&&Object.defineProperty({},"x",{})}catch(Y){}var x=function(a){var b={};return a&&"[object Function]"==b.toString.call(a)},g=function(a){return"[object Array]"===Object.prototype.toString.call(a)},y=function(a){return"[object Object]"==={}.toString.apply(a)},H=function(a,b){var c=[],d=[];if("string"!=typeof a&&"string"!=typeof b){if(g(a))for(var e=0;e<a.length;e++)void 0===b[e]&&c.push(e);else for(e in a)a.hasOwnProperty(e)&&void 0===b[e]&&c.push(e);if(g(b))for(var f=0;f<b.length;f++)void 0===a[f]&&d.push(f);else for(f in b)b.hasOwnProperty(f)&&void 0===a[f]&&d.push(f)}return{added:c,removed:d}},q=function(a){if(null==a||"object"!=typeof a)return a;var b=a.constructor(),c;for(c in a)b[c]=a[c];return b},R=function(a,b,c,d){try{Object.observe(a,function(a){a.forEach(function(a){a.name===b&&d(a.object[a.name])})})}catch(e){try{Object.defineProperty(a,b,{get:c,set:function(a){d.call(this,a,!0)},enumerable:!0,configurable:!0})}catch(f){try{Object.prototype.__defineGetter__.call(a,b,c),Object.prototype.__defineSetter__.call(a,b,function(a){d.call(this,a,!0)})}catch(h){I(a,b,d)}}}},J=function(a,b,c){try{Object.defineProperty(a,b,{enumerable:!1,configurable:!0,writable:!1,value:c})}catch(d){a[b]=c}},I=function(a,b,c){l[l.length]={prop:b,object:a,orig:q(a[b]),callback:c}},n=function(a,b,c,d){if("string"!=typeof a&&(a instanceof Object||g(a))){if(g(a)){if(K(a,"__watchall__",b,c),void 0===c||0<c)for(var e=0;e<a.length;e++)n(a[e],b,c,d)}else{var f=[];for(e in a)"$val"==e||!C&&"watchers"===e||Object.prototype.hasOwnProperty.call(a,e)&&f.push(e);B(a,f,b,c,d)}d&&L(a,"$$watchlengthsubjectroot",b,c)}},B=function(a,b,c,d,e){if("string"!=typeof a&&(a instanceof Object||g(a)))for(var f=0;f<b.length;f++)D(a,b[f],c,d,e)},D=function(a,b,c,d,e){"string"!=typeof a&&(a instanceof Object||g(a))&&!x(a[b])&&(null!=a[b]&&(void 0===d||0<d)&&n(a[b],c,void 0!==d?d-1:d),K(a,b,c,d),e&&(void 0===d||0<d)&&L(a,b,c,d))},S=function(a,b){if(!(a instanceof String)&&(a instanceof Object||g(a)))if(g(a)){for(var c=["__watchall__"],d=0;d<a.length;d++)c.push(d);E(a,c,b)}else{var e=function(a){var c=[],d;for(d in a)a.hasOwnProperty(d)&&(a[d]instanceof Object?e(a[d]):c.push(d));E(a,c,b)};e(a)}},E=function(a,b,c){for(var d in b)b.hasOwnProperty(d)&&M(a,b[d],c)},v=[],u=null,N=function(){u||(u=setTimeout(t));return u},O=function(a){null==u&&N();v[v.length]=a},F=function(a,b,c,d){var e=null,f=-1,h=g(a);n(a,function(d,c,r,m){var g=N();f!==g&&(f=g,e={type:"update"},e.value=a,e.splices=null,O(function(){b.call(this,e);e=null}));if(h&&a===this&&null!==e){if("pop"===c||"shift"===c)r=[],m=[m];else if("push"===c||"unshift"===c)r=[r],m=[];else if("splice"!==c)return;e.splices||(e.splices=[]);e.splices[e.splices.length]={index:d,deleteCount:m?m.length:0,addedCount:r?r.length:0,added:r,deleted:m}}},1==c?void 0:0,d)},T=function(a,b,c,d,e){a&&b&&(D(a,b,function(a,b,A,k){a={type:"update"};a.value=A;a.oldvalue=k;(d&&y(A)||g(A))&&F(A,c,d,e);c.call(this,a)},0),(d&&y(a[b])||g(a[b]))&&F(a[b],c,d,e))},K=function(a,b,c,d){var e=!1,f=g(a);a.watchers||(J(a,"watchers",{}),f&&U(a,function(c,e,f,h){P(a,c,e,f,h);if(0!==d&&f&&(y(f)||g(f))){var k,l;c=a.watchers[b];if(h=a.watchers.__watchall__)c=c?c.concat(h):h;l=c?c.length:0;for(h=0;h<l;h++)if("splice"!==e)n(f,c[h],void 0===d?d:d-1);else for(k=0;k<f.length;k++)n(f[k],c[h],void 0===d?d:d-1)}}));a.watchers[b]||(a.watchers[b]=[],f||(e=!0));for(f=0;f<a.watchers[b].length;f++)if(a.watchers[b][f]===c)return;a.watchers[b].push(c);if(e){var h=a[b];c=function(){return h};e=function(c,e){var f=h;h=c;if(0!==d&&a[b]&&(y(a[b])||g(a[b]))&&!a[b].watchers){var m,l=a.watchers[b].length;for(m=0;m<l;m++)n(a[b],a.watchers[b][m],void 0===d?d:d-1)}a.watchers&&(a.watchers.__wjs_suspend__||a.watchers["__wjs_suspend__"+b])?V(a,b):k.noMore||f===c||(e?P(a,b,"set",c,f):z(a,b,"set",c,f),k.noMore=!1)};k.useDirtyCheck?I(a,b,e):R(a,b,c,e)}},z=function(a,b,c,d,e){if(void 0!==b){var f,h=a.watchers[b];if(f=a.watchers.__watchall__)h=h?h.concat(f):f;f=h?h.length:0;for(var g=0;g<f;g++)h[g].call(a,b,c,d,e)}else for(b in a)a.hasOwnProperty(b)&&z(a,b,c,d,e)},Q="pop push reverse shift sort slice unshift splice".split(" "),W=function(a,b,c,d){J(a,c,function(){var e=0,f,h,g;if("splice"===c){g=arguments[0];h=a.slice(g,g+arguments[1]);f=[];for(e=2;e<arguments.length;e++)f[e-2]=arguments[e];e=g}else f=0<arguments.length?arguments[0]:void 0;g=b.apply(a,arguments);"slice"!==c&&("pop"===c?(h=g,e=a.length):"push"===c?e=a.length-1:"shift"===c?h=g:"unshift"!==c&&void 0===f&&(f=g),d.call(a,e,c,f,h));return g})},U=function(a,b){if(x(b)&&a&&!(a instanceof String)&&g(a))for(var c=Q.length,d;c--;)d=Q[c],W(a,a[d],d,b)},M=function(a,b,c){if(void 0===c&&a.watchers[b])delete a.watchers[b];else for(var d=0;d<a.watchers[b].length;d++)a.watchers[b][d]==c&&a.watchers[b].splice(d,1);for(d=0;d<p.length;d++){var e=p[d];e.obj==a&&e.prop==b&&e.watcher==c&&p.splice(d,1)}for(c=0;c<l.length;c++)d=l[c],e=d.object.watchers,(d=d.object==a&&d.prop==b&&e&&(!e[b]||0==e[b].length))&&l.splice(c,1)},V=function(a,b){O(function(){delete a.watchers.__wjs_suspend__;delete a.watchers["__wjs_suspend__"+b]})},G=null,P=function(a,b,c,d,e){w[w.length]={obj:a,prop:b,mode:c,newval:d,oldval:e};null===G&&(G=setTimeout(X))},X=function(){var a=null;G=null;for(var b=0;b<w.length;b++)a=w[b],z(a.obj,a.prop,a.mode,a.newval,a.oldval);a&&(w=[])},L=function(a,b,c,d){var e;e="$$watchlengthsubjectroot"===b?q(a):q(a[b]);p.push({obj:a,prop:b,actual:e,watcher:c,level:d})};setInterval(function(){for(var a=0;a<p.length;a++){var b=p[a];if("$$watchlengthsubjectroot"===b.prop){var c=H(b.obj,b.actual);if(c.added.length||c.removed.length)c.added.length&&B(b.obj,c.added,b.watcher,b.level-1,!0),b.watcher.call(b.obj,"root","differentattr",c,b.actual);b.actual=q(b.obj)}else{c=H(b.obj[b.prop],b.actual);if(c.added.length||c.removed.length){if(c.added.length)for(var d=0;d<b.obj.watchers[b.prop].length;d++)B(b.obj[b.prop],c.added,b.obj.watchers[b.prop][d],b.level-1,!0);z(b.obj,b.prop,"differentattr",c,b.actual)}b.actual=q(b.obj[b.prop])}}for(a in l){var b=l[a],c=b.object[b.prop],d=b.orig,e=c,f=void 0,g=!0;if(d!==e)if(y(d))for(f in d){if((C||"watchers"!==f)&&d[f]!==e[f]){g=!1;break}}else g=!1;g||(b.orig=q(c),b.callback(c))}},50);k.watch=function(){x(arguments[1])?n.apply(this,arguments):g(arguments[1])?B.apply(this,arguments):D.apply(this,arguments)};k.unwatch=function(){x(arguments[1])?S.apply(this,arguments):g(arguments[1])?E.apply(this,arguments):M.apply(this,arguments)};k.callWatchers=z;k.suspend=function(a,b){a.watchers&&(a.watchers["__wjs_suspend__"+(void 0!==b?b:"")]=!0)};k.onChange=function(){(x(arguments[2])?T:F).apply(this,arguments)};return k});

/* jshint ignore:end */
/* ==========================================================================
   #GLOBALS
   ========================================================================== */

/**
 * Global declarations.
 */

 var singular;

/* ==========================================================================
   #INTRO
   ========================================================================== */

/**
 * Begin the module enclosure. 
 */

(function (singular) {
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



/* ==========================================================================
   #HTTP
   ========================================================================== */

/**
 * The http module contains members for making http requests.
 */

//
// Coming Soon
//

singular.http = (function () {

/* 
   #request
   ========================================================================== */

/**
 * The request function executes a http request.
 */

var request = function(options) {
	var xhr = new window.XMLHttpRequest();

	xhr.open(
		options.method,
		options.url,
		true,
		options.username,
		options.password
	);

	return {
		then: function(success, failure) {
			xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                    	if(singular.isFunction(success)) {
                       		success(xhr.responseText);
                    	}
                    }
                    else {
                    	if(singular.isFunction(failure)) {
                       		failure(xhr.statusText);
                      	}
                    }
                }
            };
			xhr.send(options.data);
		}
	};
};

/* 
   #get
   ========================================================================== */

/**
 * The get shorthand function executes a http get request.
 */

var get = function(url, options) {
   	options = options || {};	
	options.method = "GET";	
	options.url = url;

	return {
		then: function(success, failure) {
			singular.http.request(options).then(success, failure);
		}
	};
};

/* 
   #post
   ========================================================================== */

/**
 * The get shorthand function executes a http post request.
 */

var post = function(url, data, options) {
   	options = options || {};	
	options.method = "POST";	
	options.url = url;
	options.data = data;

	return {
		then: function(success, failure) {
			singular.http.request(options).then(success, failure);
		}
	};
};

/* 
   @return
   ========================================================================== */

return {
	request: request,
	get: get,
	post: post
};

})();




/* ==========================================================================
   #VIEW
   ========================================================================== */

/**
 * The view component is used for displaying content based on a route.
 */

singular.view = {
    html: '',
    goto: function (url, cb) {
        singular.http.get(url).then(function (data) {
            singular.viewer.html = data;
            if (singular.isFunction(cb)) {
                cb();
            }
        });
    },
    draw: function (el) {
        return "{{html}}";
    }
};

/* ==========================================================================
   #LISTEN
   ========================================================================== */
/**
 * Listen to hash changes.
 */

singular.route.listen();

/* ==========================================================================
   #OUTRO
   ========================================================================== */

/**
 * End the module enclosure. 
 */

})(singular || (singular = {}));
