/** 
 *------------------------------------------------------------------------------
 * @package       T3 Framework for Joomla!
 *------------------------------------------------------------------------------
 * @copyright     Copyright (C) 2004-2013 JoomlArt.com. All Rights Reserved.
 * @license       GNU General Public License version 2 or later; see LICENSE.txt
 * @authors       JoomlArt, JoomlaBamboo, (contribute to this project at github 
 *                & Google group to become co-author)
 * @Google group: https://groups.google.com/forum/#!forum/t3fw
 * @Link:         http://t3-framework.org 
 *------------------------------------------------------------------------------
 */
 
(function($){
	
	$(document).ready(function(){
	
		// Width for carousel section intro
		if($('.acm-testimonials.style-6').length > 0) {
			var maxwidth = 0;
				
			$('.word-wrap .carousel-inner .item').each(function(){
				if($(this).width() > maxwidth) {
					maxwidth = $(this).width();
				}
			});
			
			$('.word-wrap').width(maxwidth);
		}
		
		// Add class active for carousel (module Articles category)
		if($('.job-layout').length > 0) {
			$('.mod-articles-category-title').click(function(){
				$('.mod-articles-category-title').removeClass('active');
				$(this).toggleClass('active');
			});
		}
		
		// Fix bug Tabs
		if($('.nav.nav-tabs').length > 0){
			$('.nav.nav-tabs a:not(.toclink)').click(function (e) {
				e.preventDefault();
				$(this).tab('show');
			});
		}
		
		// Video background
		if($('.full-screen').length > 0) {
			var windowvideo = $(window).height() - $('.t3-header').height();
			$('.full-screen').outerHeight(windowvideo);
			
			$(window).resize(function(){
				var windowvideo = $(window).height() - $('.t3-header').height();
				$('.full-screen').outerHeight(windowvideo);
			});
		}
		
		
		var iOS = parseFloat(('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1]).replace('undefined', '3_2').replace('_', '.').replace('_', '')) || false;
		if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || iOS)) {
			if ($('.bg-image').length > 0 || $('.style-tab-1').length > 0) {
				$('.bg-image').parallax("50%", 0.05);
			}
		} else {
			$('.bg-image').css({"background-attachment": "scroll", "background-size": "cover"});
		}

		
		// Add Placeholder form contact
		var formContact = $('.contact-form-1');
		if (formContact.length > 0) {
			$('#jform_contact_name', formContact).attr('placeholder','Name');
			$('#jform_contact_email', formContact).attr('placeholder','Mail');
			$('#jform_contact_emailmsg', formContact).attr('placeholder','Subject');
			$('#jform_contact_message', formContact).attr('placeholder','Write your message here');
			
			if($('.ie8').length > 0) {
				$("input[placeholder], textarea[placeholder]", formContact).each(function(i, e){
					if($(e).val() == "") {
						$(e).val($(e).attr("placeholder"));
					}
					$(e).blur(function(){
					if($(this).val()=="")
						$(this).val($(e).attr("placeholder"));
					}).focus(function() {
					if($(this).val() == $(e).attr("placeholder"))
						$(this).val("");
					});
				});
			}
		}
		
		// Add Placeholder to input in IE 8
		if($('.ie8').length > 0) {
			$('input, textarea').placeholder();
		}
		
		//inview events
		$('.section, .feature-animate, .sections-wrap .t3-module').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				if (visiblePartY == 'bottom' || visiblePartY == 'both') {
					if(!$(this).hasClass('section-mask')){
						$(this).addClass('inview').trigger('inview');
					}
				}
			}
		});
		
		// Product Item
		var carousel_items = $('.product-carousel-item');
		carousel_items.on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			if( $this.hasClass('first') ) {
				return false;
			}
			var first = $this;
			carousel_items.removeClass('first')
			if( $this.hasClass('next') ) {
				var next = first.next().length > 0 ? first.next() : carousel_items.first();
				var last = first.prev().length > 0 ? first.prev() : carousel_items.last();
			} else if( $this.hasClass('last') ) {
				var last = first.next().length > 0 ? first.next() : carousel_items.first();
				var next = first.prev().length > 0 ? first.prev() : carousel_items.last();
			}

			carousel_items.removeClass('first next last');
			first.addClass('first');
			next.addClass('next');
			last.addClass('last');
			return false;
		});
		
		var elmWidth = $('.t3-sidebar').width(),
				elmHeight = $('.uber-footer').outerHeight() + 40;
				
		if($('.t3-module.has-affix').length > 0) {
			$('.t3-module.has-affix').affix({
	      offset: {
	        top: $('.t3-module.has-affix').offset().top,
	        bottom: elmHeight
	      }
			});	
			
			$('.t3-module.has-affix').css({"width": elmWidth});
			
			
			if($('.t3-module.affix-bottom').length > 0) {
				$('.t3-module.affix-bottom').css({"bottom": elmHeight});
			}
		}

        setTimeout (function(){
            // fix for collapse menu caret click
            // click on caret, no action on link
            $('li .caret').on ('tap', function(e) {
                $item = $(this).parents('li').first();
                if ($item.data('t3menu.item')) {
                    $item.data('t3menu.item').clickable = false;
                }
            });
        }, 200)
	});

    $(document).ready(function() {
        $('.loginDropDown').unbind().mouseover(function(e) {
            $(this).parents('.dropdown_:first').addClass('open');
            e.stopPropagation();
        }).mousedown(function(e) {
                $(this).parents('.dropdown_:first').addClass('open');
                e.stopPropagation();
            });
    });

 })(jQuery);