(function($) {
	$(window).load(function() {
		//$( "h2" ).wrapInner( "<span class='inner-h'></span>");
		var adjust_size = function() {
				//**********RESIZE FUNCTIONS*****//
				$('.view-display-id-block_2 .views-row,.view-display-id-block_1 .views-row,.view-display-id-block_3 .views-row').each(function() {
					var currentImg = $(this).find("img");
					var imageH = $(currentImg).outerHeight();
					var imageW = $(currentImg).outerWidth();
					var titleMargin = 0 - ((imageH / 2) + 30);
					//var titleMargin1 = 0 - ((imageH / 2) - 50);
					$(this).find("div.overlay-text").css('margin-top', titleMargin);
					//$(this).find("div.overlay-text.corey").css('margin-top', titleMargin1);
					$(this).find("div.overlay-text").css('display', 'block');
					$(this).find("div.overlay-text").css('width', imageW);
					$(currentImg).css('background-size', imageW);
				});

				$('.view-display-id-block_1 .views-row').each(function() {
					var currentImg = $(this).find("img");
					var imageH = $(currentImg).outerHeight();
					var imageW = $(currentImg).outerWidth();
					//var titleMargin = 0 - ((imageH / 2) + 30);
					var titleMargin1 = 0 - ((imageH / 2) - 25);
					//$(this).find("div.overlay-text").css('margin-top', titleMargin);
					$(this).find("div.overlay-text").css('margin-top', titleMargin1);
					$(this).find("div.overlay-text").css('display', 'block');
					$(this).find("div.overlay-text").css('width', imageW);
					$(currentImg).css('background-size', imageW);
				});

				$('.view-display-id-block_2 .views-row').each(function() {
					var currentImg = $(this).find("img");
					var imageH = $(currentImg).outerHeight();
					var imageW = $(currentImg).outerWidth();
					//var titleMargin = 0 - ((imageH / 2) + 30);
					var titleMargin2 = 0 - ((imageH / 2) - 50);
					//$(this).find("div.overlay-text").css('margin-top', titleMargin);
					$(this).find("div.overlay-text").css('margin-top', titleMargin2);
					$(this).find("div.overlay-text").css('display', 'block');
					$(this).find("div.overlay-text").css('width', imageW);
					$(currentImg).css('background-size', imageW);
				});
				$('.view-display-id-block_3 .views-row').each(function() {
					var currentImg = $(this).find("img");
					var imageH = $(currentImg).outerHeight();
					var imageW = $(currentImg).outerWidth();
					//var titleMargin = 0 - ((imageH / 2) + 30);
					var titleMargin3 = 0 - ((imageH / 2) - 80);
					//$(this).find("div.overlay-text").css('margin-top', titleMargin);
					$(this).find("div.overlay-text").css('margin-top', titleMargin3);
					$(this).find("div.overlay-text").css('display', 'block');
					$(this).find("div.overlay-text").css('width', imageW);
					$(currentImg).css('background-size', imageW);
				});




				var vidH = ($('#block-views-image-tiles-block-3 .view-image-tiles .views-row img').outerHeight() - 0);
				var vidW = $('#block-views-image-tiles-block-3 .view-image-tiles .views-row img').outerWidth();
				var vidMargin = 0 - ($('#block-views-image-tiles-block-3 .view-image-tiles .views-row img').outerHeight() + 17);
				$('#block-views-image-tiles-block-3 .embedded-video iframe').css('width', vidW);
				$('#block-views-image-tiles-block-3 .embedded-video iframe').css('height', vidH);
				$('#block-views-image-tiles-block-3 .embedded-video').css('width', vidW);
				$('#block-views-image-tiles-block-3 .embedded-video').css('height', vidH);
				$('#block-views-image-tiles-block-3 .embedded-video').css('margin-top', vidMargin);
				//**********VIEWPORT ALERT*****//
				var viewportwidth;
				var viewportheight;
				// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
				if (typeof window.innerWidth != 'undefined') {
					viewportwidth = window.innerWidth, viewportheight = window.innerHeight
				}
				// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
				else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
					viewportwidth = document.documentElement.clientWidth, viewportheight = document.documentElement.clientHeight
				}
				// older versions of IE
				else {
					viewportwidth = document.getElementsByTagName('body')[0].clientWidth, viewportheight = document.getElementsByTagName('body')[0].clientHeight
				}
				if ($(".resp-tabs-container").length > 0) {
					var contentHeight = $('.resp-tabs-container').outerHeight();
					$('#block-views-events-tab-content-block-1').css('height', contentHeight);
					//console.log('.resp-tabs-container='+contentHeight);
				}
				$('#viewportalert').text('Your viewport width is ' + viewportwidth + 'x' + viewportheight);
				//**********VIEWPORT ALERT*****//
				//**********END RESIZE FUNCTIONS*****//
			};
		adjust_size();
		$(window).resize(adjust_size);
	});
	$(document).ready(function() {
		//**********DOC READY FUNCTIONS*****//
/*Add image tiles subheaders*/


$( "<div class='sub'>See Whats Trending</div>" ).prependTo( ".view-display-id-block_2 .views-row-1 .views-field-field-tile-image .field-content" );
$( "<div class='sub'>Learn More About BRECK Create</div>" ).prependTo( ".view-display-id-block_2 .views-row-2 .views-field-field-tile-image .field-content" );
$( "<div class='sub'>Great Winter Deals</div>" ).prependTo( ".view-display-id-block_2 .views-row-3 .views-field-field-tile-image .field-content" );
$( "<div class='sub'>Watch the Video</div>" ).prependTo( ".view-display-id-block_3 .views-row-1 .views-field-field-video-teaser-photo .field-content" );
$( "<div class='sub'>Learn More</div>" ).prependTo( ".view-display-id-block_1 .views-row-1 .views-field-field-landscape-tile-image .field-content" );
$( "<div class='sub'>Learn More</div>" ).prependTo( ".view-display-id-block_1 .views-row-2 .views-field-field-landscape-tile-image .field-content" );
//$( "<div class='sub'>Watch the Video</div>" ).prependTo( ".inner" );
$( "<div class='sub'>Learn More</div>" ).prependTo( ".view-display-id-block_4 .field-content" );





/*Add image tiles subheaders*/

//$('.view-events .views-row')
$("#block-views-events-block-1 .view-events .views-row").hover(function(){

        $(this).find('.views-field-title').addClass('.move-event-title');
        }, function(){
        //$(this).find('.views-field-title').removeClass('.move-event-title');
});

		var $galleryHtml = $("#block-views-photo-gallery-block-2 .views-field-nothing .field-content");
		//var $galleryHtml = $("#block-views-photo-gallery-block-2 .views-field-nothing .field-content")[0].innerHTML;
		if ($galleryHtml.length) {
			$("#block-views-photo-gallery-block-2 .views-row").click(function(event) {
				var $galleryHtml = $(this).find(".views-field-nothing .field-content")[0].innerHTML;
				//var $galleryHtml = $("#block-views-photo-gallery-block-2 .views-field-nothing .field-content")[0].innerHTML;
				event.stopImmediatePropagation();
				event.preventDefault();
				alert($galleryHtml);
			});
		}
		$("#block-block-9").bind("click", function() {
			$('#block-menu-block-11').toggle();
		});
		$('#block-menu-block-11 .menu-block-wrapper ul.menu').prepend('<li><a href="http://book.gobreck.com/lodging/search?checkin&checkout">Book Your Trip</a></li>');
		if ($(".field-name-field-event-logo img").length) {
			$('.field-name-field-event-logo img').height();
			var titleMargin = ($('.field-name-field-event-logo img').height() / 2) - ($('.node-type-event #page-title').height() / 2);
			$('.node-type-event #page-title').css('margin-top', titleMargin);
		} else {
			$('.node-type-event #page-title').css('float', 'none');
		}
		if ($(".mydivclass")[0]) {
			// Do something if class exists
		} else {
			// Do something if class does not exist
		}
		$('#block-search-form .form-submit').mouseover(function() {
			//$( "#page-wrapper" ).animate({
			//marginTop:80
			//}, 200,"linear", function() {
			// Animation complete.
			//});
			$('#block-search-form .form-text').css('display', 'block');
		});
		$('#block-search-form').mouseleave(function() {
			//$( "#page-wrapper" ).stop();
			//$('#page-wrapper').css('margin-top','20px');
			$('#block-search-form .form-text').css('display', 'none');
		});
		$(".region-sidebar-first li").each(function() {
			if ($(this).hasClass('active-trail')) {
				$('.region-sidebar-first').css('display', 'block');
				$('body').addClass('one-sidebar');
				$('body').addClass('sidebar-first');
				$('body').removeClass('no-sidebars');
				return false;
				//$('.region-sidebar-first').css('display','block');
			} else {
				$('.region-sidebar-first').css('display', 'none');
				$('body').removeClass('one-sidebar');
				$('body').removeClass('sidebar-first');
				$('body').addClass('no-sidebars');
			}
		});
		$('.region-sidebar-first .block-menu-block').each(function() {
			var $active = $('a.active', $(this));
			if ($active.length) {
				$($(this)).css('display', 'block');
			} else {
				$($(this)).css('display', 'none');
			}
		});
/*$( "#block-views-image-tiles-block-3 .overlay-text" ).click(function() {
$('.embedded-video').fadeIn();
});*/
		$('#block-views-image-tiles-block-3 img').click(function() {
			$('.embedded-video').fadeIn(100);
			$(".player iframe").attr("src", $(".player iframe").attr("src").replace("autoplay=0", "autoplay=1"));
		});
		$('.embedded-video').bind('inview', function(event, visible) {
			if (visible == true) {
				// element is now visible in the viewport
				console.log('view');
			} else {
				console.log('outview');
			}
		});
		if ($(".player iframe").length) {
			$(".player iframe").attr("src", $(".player iframe").attr("src").replace("autoplay=1", "autoplay=0"));
		}
		if ($('body').hasClass('front')) {
			var distance = ($('#block-views-image-tiles-block-1').offset().top),
				$window = $(window);
			$window.scroll(function() {
				if ($window.scrollTop() >= distance) {
					$('.embedded-video').fadeOut(100);
				}
			});
		} else {
			if ($("#block-views-image-tiles-block-4").length) {
				var distance = ($('#block-views-image-tiles-block-4').offset().top),
					$window = $(window);
				$window.scroll(function() {
					if ($window.scrollTop() >= distance) {
						$('.embedded-video').fadeOut(100);
					}
				});
			}
		}
		$('.node-type-lodging div.specs').replaceWith(function() {
			return $("<ul />", {
				html: $(this).html()
			});
		});
		$('.node-type-lodging div.specs-ul ul section').replaceWith(function() {
			return $("<li />", {
				html: $(this).html()
			});
		});
		//*TWO COLUMN LISTS*//
		$('.plan ul').cols(2);
		$('.more ul').cols(2);
		$('ul.lodging').cols(2);
		$('.node-type-lodging .specs-ul ul').cols(2);
		//$('.node-type-lodging ul').cols(2);
		$('#horizontalTab').easyResponsiveTabs({
			type: 'default',
			//Types: default, vertical, accordion
			width: 'auto',
			//auto or any width like 600px
			fit: true,
			// 100% fit in a container
			closed: 'accordion',
			// Start closed if in accordion view
			activate: function(event) { // Callback function if tab is switched
				var $tab = $(this);
				var $info = $('#tabInfo');
				var $name = $('span', $info);
				$name.text($tab.text());
				$info.show();
			}
		});
		$('#horizontalTabEvents').easyResponsiveTabs({
			type: 'default',
			//Types: default, vertical, accordion
			width: '100%',
			//auto or any width like 600px
			fit: true,
			// 100% fit in a container
			closed: 'accordion',
			// Start closed if in accordion view
			activate: function(event) { // Callback function if tab is switched
				var $tab = $(this);
				var $info = $('#tabInfo');
				var $name = $('span', $info);
				$name.text($tab.text());
				$info.show();
			}
		});
		$(".resp-tabs-container").each(function(index) {
			//console.log('5');
			$("h3").first().addClass("top");
		});
		//**********DOC READY FUNCTIONS*****//
	});
})(jQuery);