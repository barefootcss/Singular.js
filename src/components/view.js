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
