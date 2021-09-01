(function ($) {
    "use strict";

    // window load functions init
    $(window).on('load', function () {
		preloader();
        wowJS();
        projectFilter();
    });

    // document ready functions init
    $(document).ready(function () {
        responsiveMenu();
        stickyCount();
        smoothScroll();
        backgroundImage();
		clientSlider();
		testimonialSlider();
		blogHover();
		likeArticle();
    });

    // preloader init
    function preloader() {
        $(".circle").fadeOut(400);
        setTimeout(function(){
            $(".loader").slideUp(300);
        }, 450);
    };

    // window scroll functions init
    $(window).on('scroll', function () {
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 150) {
                $('header').removeClass('bg-transparent');
                $('.go_top').addClass('show');
            } else {
                $('header').addClass('bg-transparent');
                $('.go_top').removeClass('show');
            }
        });
    });

    // responsive_menu init
    function responsiveMenu() {
        $('.menu_btn').on('click', function () {
            $(this).toggleClass('open');
            $('nav').toggleClass('show');
            $('header').toggleClass('h-100');
            $('body').toggleClass('oflow-hide');
        });
        $('.menu_btn.closei').on('click', function () {
            $('header').removeClass('h-100');
        });
    };

    // sticky work-count init
    function stickyCount() {
        $(".work_count").stick_in_parent({
            offset_top: 70
        });
    };

    // wowJS init
    function wowJS() {
        new WOW().init();
    };

    // likeArticle init
    function likeArticle() {
        $('.like_btn').on('click', function(){
            $(this).addClass('liked');
        });
    };

    // blogHover Init
    function blogHover() {
        $('.blog_title_n_img').on('mouseover', 'a', function() {
            $(this).siblings('img').addClass('show');
        });
        $('.blog_title_n_img').on('mouseout', 'a', function() {
            $(this).siblings('img').removeClass('show');
        });

        $('.blog-items').isotope();
    };


    // isotop filter init
    function projectFilter() {
        var $gridt = $('.projects');
        $gridt.isotope();
        $('.filter-buttons').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $gridt.isotope({
                filter: filterValue
            });
            $(this).addClass('active').siblings().removeClass('active');
        });
    };
	
	
    // testimonialSlider init
	function testimonialSlider() {
		$('.owl-carousel.testimonial_slider').owlCarousel({
			loop:true,
			items:1,
			margin:10,
			autoplay:true,
			nav:false,
			autoplayTimeout:5000,
            autoplayHoverPause:true,
            animateIn:'fadeIn',
            animateOut:'fadeOut',
		});
	};
	
	
    // clientSlider init
	function clientSlider() {
		$('.owl-carousel.clients_slider').owlCarousel({
            smartSpeed:1000,
			loop:true,
			margin:10,
			autoplay:true,
			nav:false,
			dots:false,
			autoplayTimeout:2500,
			responsive:{
				0:{
					items:2
				},
				420:{
					items:3
				},
				576:{
					items:3
				},
				767:{
					items:4
				},
				992:{
					items:5
				}
			}
		});
	};

	
    // smooth-scroll init
    function smoothScroll() {
        $('.smooth_scroll').on("click", function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - 70
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    };

	
    // background-image init
    function backgroundImage() {
        $('[data-background]').each(function () {
            $(this).addClass('has-bgImage');
            var src = $(this).attr('data-background');
            $(this).css({
                'background-image': 'url(' + src + ')'
            });
        });
    };

})(jQuery);