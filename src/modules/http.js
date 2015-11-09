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
 * The get function executes a get http request.
 */

var get = function(url, options) {
   	options = options || {};	
	options.type = "GET";	
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
 * The get function executes a get http request.
 */

var post = function(url, data, options) {
   	options = options || {};	
	options.type = "POST";	
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



