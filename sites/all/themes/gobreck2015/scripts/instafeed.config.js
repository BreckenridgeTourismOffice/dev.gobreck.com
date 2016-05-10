var currentHeight = 0;
jQuery(window).load(function() {
    //get the natural page height -set it in variable above.

currentHeight = jQuery('#instafeed').outerHeight();
utilityHeight = (currentHeight-10);
jQuery('#utility-bar').css('height',utilityHeight);

});


(function(jQuery, sr) {
	// debouncing function from John Hann
	// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	var debounce = function(func, threshold, execAsap) {
			var timeout;
			return function debounced() {
				var obj = this,
					args = arguments;

				function delayed() {
					if (!execAsap) func.apply(obj, args);
					timeout = null;
				};
				if (timeout) clearTimeout(timeout);
				else if (execAsap) func.apply(obj, args);
				timeout = setTimeout(delayed, threshold || 100);
			};
		}
		// smartresize
		jQuery.fn[sr] = function(fn) {
			return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
		};
})(jQuery, 'smartresize');
// usage:
jQuery(window).smartresize(function() {

currentHeight = jQuery('#instafeed').outerHeight();
utilityHeight = (currentHeight-10);
jQuery('#utility-bar').css('height',utilityHeight);
});