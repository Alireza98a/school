(function ($) {
	'use strict';


	/* Scroll Animation Active */
	new WOW().init();



	/* Scroll Up Activation */
	$.scrollUp({
		scrollText: '<i class="icofont-dotted-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'slide'
	});


	/* Carousel Activation */
	// Banner Slider Active
	$('.banner-slider-active').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		adaptiveHeight: true,
		arrows: false,
		pauseOnHover: false,
	});




	// Banner Slider active with navigation 
	$('.active-slider-def').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		adaptiveHeight: true,
		arrows: true,
		prevArrow: '<span class="slider-navigation slider-navigation-left"><i class="icofont-long-arrow-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-right"><i class="icofont-long-arrow-right"></i></span>'
	});



	// Testimonial Slider Active
	$('.review-style-1.active-review-style').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		centerMode: true,
		focusOnSelect: true,
		responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	
	// Portfolios Slider Active
	$('.team_slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		focusOnSelect: true,
		centerMode: true,
		arrows: true,
		prevArrow: '<span class="slider-navigation slider-navigation-left"><i class="icofont-long-arrow-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-right"><i class="icofont-long-arrow-right"></i></span>',
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					centerMode: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					centerMode: false,
				}
			},			
			{
				breakpoint: 508,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				}
			}
		]
	});
	
	
	
	
	// related Course
	$('.related-course-sidebar').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		autoplay: false,
	});
	
	
	
		// related Course
	$('.related-course-sidebar-test').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		focusOnSelect: true,
		autoplay: false,
	});
	
	// Latest Post
	$('.latest-post-active').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		prevArrow: '<span class="slider-navigation slider-navigation-left"><i class="icofont-long-arrow-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-right"><i class="icofont-long-arrow-right"></i></span>',
		focusOnSelect: true,
		autoplay: false,
		responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

		// Latest Post
		$('.latest-post-active-full').slick({
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 5,
			arrows: true,
			prevArrow: '<span class="slider-navigation slider-navigation-left"><i class="icofont-long-arrow-left"></i></span>',
			nextArrow: '<span class="slider-navigation slider-navigation-right"><i class="icofont-long-arrow-right"></i></span>',
			focusOnSelect: true,
			autoplay: false,
			responsive: [{
					breakpoint: 1500,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	
	// Online Library
	$('.online-libary-active').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		prevArrow: '<span class="slider-navigation slider-navigation-left"><i class="icofont-long-arrow-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-right"><i class="icofont-long-arrow-right"></i></span>',
		focusOnSelect: true,
		autoplay: false,
		responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	// related_product_active
	$('.related_product_active').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		prevArrow: '<span class="slider-navigation slider-navigation-left"><i class="icofont-long-arrow-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-right"><i class="icofont-long-arrow-right"></i></span>',
		focusOnSelect: true,
		autoplay: false,
		responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

		// related_portfolio_active
		$('.related_portfolio_active').slick({
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: true,
			prevArrow: '<span class="slider-navigation slider-navigation-left"><i class="icofont-long-arrow-left"></i></span>',
			nextArrow: '<span class="slider-navigation slider-navigation-right"><i class="icofont-long-arrow-right"></i></span>',
			focusOnSelect: true,
			autoplay: false,
			responsive: [{
					breakpoint: 991,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

	// upsell_product_active
	$('.upsell_product_active').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		prevArrow: '<span class="slider-navigation slider-navigation-left"><i class="icofont-long-arrow-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-right"><i class="icofont-long-arrow-right"></i></span>',
		focusOnSelect: true,
		autoplay: false,
		responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	

	// Latest Post
	$('.popular-post-active').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		prevArrow: '<span class="slider-navigation slider-navigation-left"><i class="icofont-long-arrow-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-right"><i class="icofont-long-arrow-right"></i></span>',
		focusOnSelect: true,
		autoplay: false,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 1
			}
		}
	]
	});
	
	

	// Best Selling
	$('.feature_ctg_active').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		rows: 3,
		arrows: false,
		focusOnSelect: true,
		autoplay: false,
	});
	
	// related Course
	$('.related-blog-active').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: true,
		prevArrow: '<span class="slider-navigation slider-navigation-left"><i class="icofont-long-arrow-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-right"><i class="icofont-long-arrow-right"></i></span>',
		focusOnSelect: true,
		autoplay: false,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1
			}
		}
	]
	});

	
	// Sidemenu testimonial slider active
	$('.sidemenu-wrapper-active-review-style').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		centerMode: true,
		focusOnSelect: true,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	// Testimonial Slider Active
	$('.review-style-2.active-review-style').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		autoplay: true,
	});


	$('.sponsors-logo-carousel-activation').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 300,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	// Service Slider Active
	$('.service-slider-active').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		focusOnSelect: true,
		centerMode: true,
		responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					centerMode: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				}
			}
		]
	});


	// Portfolios Slider Active
	$('.portfolios-slider-active').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		focusOnSelect: true,
		centerMode: true,
		arrows: true,
		prevArrow: '<span class="slider-navigation slider-navigation-left"><i class="icofont-long-arrow-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-right"><i class="icofont-long-arrow-right"></i></span>',
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					centerMode: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					centerMode: false,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				}
			}
		]
	});
	


	// Single Portfolio Gallery Slider Active
	$('.pg-portfolio-images').slick({
		dots: false,
		infinite: true,
		speed: 300,
		autoplay: false,
		arrows: true,
		prevArrow: '<span class="slider-navigation slider-navigation-left"><i class="icofont-long-arrow-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-right"><i class="icofont-long-arrow-right"></i></span>',
	});


	// Single Portfolio Related portfolios slider
	$('.pg-related-portfolios').slick({
		dots: false,
		infinite: true,
		speed: 300,
		autoplay: false,
		arrows: true,
		prevArrow: '<span class="slider-navigation slider-navigation-left"><i class="icofont-long-arrow-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-right"><i class="icofont-long-arrow-right"></i></span>',
		slidesToShow: 3,
		slidesToScroll: 1,
		items: 3,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});


	// Gallery post slider
	$('.pg-post-gallery .pg-post-thumb').slick({
		dots: false,
		infinite: true,
		speed: 300,
		autoplay: true,
		arrows: true,
		prevArrow: '<span class="slider-navigation slider-navigation-left"><i class="icofont-long-arrow-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-right"><i class="icofont-long-arrow-right"></i></span>',
		items: 1,
	});


	// post details gallery slider
	$('.course-details-thumb').slick({
		dots: false,
		infinite: true,
		speed: 300,
		autoplay: true,
		arrows: true,
		prevArrow: '<span class="slider-navigation slider-navigation-left"><i class="icofont-long-arrow-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-right"><i class="icofont-long-arrow-right"></i></span>',
		items: 1,
	});
	
	// single product
	$('.product-multiple-item').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
		responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					centerMode: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					centerMode: false,
				}
			}
		]
	});
	
	$('.details-product-thumbnail .product-multiple-item a').on('click', function () {
		$('.details-product-thumbnail .product-multiple-item a').removeClass('active');
	})
	

	/* Portfolio Active */
	var isotopFilter = $('.portfolio-filters');
	var isotopGrid = $('.portfolios:not(.portfolios-slider-active)');
	var isotopGridItemSelector = $('.portfolio-single');
	var isotopGridItem = '.portfolio-single';

	isotopFilter.find('button:first-child').addClass('active');

	//Images Loaded
	isotopGrid.imagesLoaded(function () {
		/*-- init Isotope --*/
		var initial_items = isotopGrid.data('show');
		var next_items = isotopGrid.data('load');
		var loadMoreBtn = $('.load-more-toggle');

		var $grid = isotopGrid.isotope({
			itemSelector: isotopGridItem,
			layoutMode: 'masonry',
		});

		/*-- Isotop Filter Menu --*/
		isotopFilter.on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');

			isotopFilter.find('button').removeClass('is-checked');
			$(this).addClass('is-checked');

			// use filterFn if matches value
			$grid.isotope({
				filter: filterValue
			});
		});

		/*-- Update Filter Counts --*/
		function updateFilterCounts() {
			// get filtered item elements
			var itemElems = $grid.isotope('getFilteredItemElements');

			if (isotopGridItemSelector.hasClass('hidden')) {
				isotopGridItemSelector.removeClass('hidden');
			}

			var index = 0;

			$(itemElems).each(function () {
				if (index >= initial_items) {
					$(this).addClass('hidden');
				}
				index++;
			});

			$grid.isotope('layout');
		}

		/*-- Function that Show items when page is loaded --*/
		function showNextItems(pagination) {
			var itemsMax = $('.hidden').length;
			var itemsCount = 0;

			$('.hidden').each(function () {
				if (itemsCount < pagination) {
					$(this).removeClass('hidden');
					itemsCount++;
				}
			});

			if (itemsCount >= itemsMax) {
				loadMoreBtn.hide();
			}

			$grid.isotope('layout');
		}

		/*-- Function that hides items when page is loaded --*/
		function hideItems(pagination) {
			var itemsMax = $(isotopGridItem).length;
			var itemsCount = 0;

			$(isotopGridItem).each(function () {
				if (itemsCount >= pagination) {
					$(this).addClass('hidden');
				}
				itemsCount++;
			});

			if (itemsCount < itemsMax || initial_items >= itemsMax) {
				loadMoreBtn.hide();
			}

			$grid.isotope('layout');
		}

		/*-- Function that Load items when Button is Click --*/
		loadMoreBtn.on('click', function (e) {
			e.preventDefault();
			showNextItems(next_items);
		});

		hideItems(initial_items);
	});


	/* factsUp Active */
	$('.facts-active').factsUp({
		delay: 10,
		time: 1000
	});



	/* Mobile Menu */
	$('.header-style-1 nav.menu, .header-style-2 nav.menu, .header-style-3 nav.menu').meanmenu({
		meanMenuClose: '<i class="icofont icofont-close"></i>',
		meanMenuCloseSize: '18px',
		meanScreenWidth: '991',
		meanExpandableChildren: true,
		meanMenuContainer: '.mobile-menu',
		onePage: true
	});




	/* Mobile Menu Minimal */
	$('.header-minimal-1 nav.menu, .header-minimal-2 nav.menu, .header-minimal-3 nav.menu').meanmenu({
		meanMenuClose: '<i class="icofont icofont-close"></i>',
		meanMenuCloseSize: '18px',
		meanScreenWidth: '991',
		meanExpandableChildren: true,
		meanMenuContainer: '.mobile-menu',
		onePage: true
	});




	/* Parallax Active */
	$('.bg-parallax').scrolly({
		bgParallax: true
	});



	/* Instafeed Activation */
	if ($('#sidebar-instagram-feed').length) {
		var userFeed = new Instafeed({
			get: 'user',
			userId: 6665768655,
			accessToken: '6665768655.1677ed0.313e6c96807c45d8900b4f680650dee5',
			target: 'sidebar-instagram-feed',
			resolution: 'thumbnail',
			limit: 6,
			template: '<li><a href="{{link}}" target="_new"> <img src="{{image}}" /><ul class="likes-post_comments"><li><i class="icofont icofont-heart"></i><span>{{likes}}</span></li><li><i class="icofont icofont-speech-post_comments"></i><span>{{post_comments}}</span></li></ul></a></li>',
		});
		userFeed.run();
	}



	/* Particle Activation */
	if ($('#particles-js').length) {
		particlesJS.load('particles-js', 'particles.json', function () {
			console.log('callback - particles.js config loaded');
		});
	}



	/* Tilter Activation */
	if ($('[data-tilt]').length) {

		$('[data-tilt]').tilt({
			perspective: 800,
		});
		
	}


	/* Youtube Background Activation */
	if ($('.youtube-bg').length) {
		$('.youtube-bg').YTPlayer({
			containment: '.youtube-bg',
			autoPlay: true,
			loop: true,
			realfullscreen: true,
			showControls: false,
			mobileFallbackImage: '../images/bg/11.jpg',
		});
	}

	
    /* Body Overlay */
    $('<div class="body-overlay"></div>').appendTo($('.wrapper'));

    function bodyOverlay() {
        $('html').css('overflow-y', 'hidden');
        $('.body-overlay').addClass('is-visible')
            .on('click', function () {
                $(this).removeClass('is-visible');
                $('.header-sidemenu-minimal').removeClass('is-visible');
                $('.sidemenu-header-optional-trigger').removeClass('is-active');
                $('.wrapper').removeClass('left-offset-active');
                $('html').css('overflow-y', 'auto');
            });

    }



    /* Trigger Menu */
    var slideMenu = function (container, trigger) {
        var slideMenuContainer = container;
        var slideMenutrigger = trigger;
        $(slideMenutrigger).on('click', function () {
            $(this).toggleClass('is-active')
                .siblings(slideMenuContainer).toggleClass('is-visible');
        });
    };
    var slidemenu1 = new slideMenu('.slide-menu-inner', '.header-style-2 .trigger-menu-icon');



    /* Button Effect */
    function buttonEffect() {
        $('<b></b>').appendTo('.cr-btn');
        $('.cr-btn')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('b').css({
                    top: relY,
                    left: relX
                });
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('b').css({
                    top: relY,
                    left: relX
                });
            });
        $('[href="#"]').click(function () {
            return false;
        });
    }
    buttonEffect();


    /* Trigger Sidemenu */
    function triggerHeader() {
        var menuContainer = $('.header-sidemenu-triggered');
        $('<button class="header-sidemenu-trigger"><i class="flaticon-signs"></i></button>').appendTo(menuContainer)
            .on('click', function () {
                $(this).find('i').toggleClass('flaticon-close flaticon-signs');
                menuContainer.toggleClass('is-visible');
            });
    }
    triggerHeader();



    /* Banner Padding */
    function fixedHeader() {
        var winWidth = $(window).width();
        if (!$('.sidemenu-wrapper').length) {

            if (winWidth > 991) {
                if ($('.fixed-header').length) {
                    var headerHeight = $('.header').innerHeight();
                    $('.single-slider').css({
                        'min-height': 'calc(100vh - ' + headerHeight + 'px)',
                    });
                    $('.fixed-header').next().css({
                        'margin-top': headerHeight + 'px'
                    });
                }
            }

        }
    }
    fixedHeader();


    /* Mouse Parallax */
    // Banner Layers Parallax
    function mouseParallax() {
        var trigger = $('.banner-layers');
        var container = $('.slider-area');
        container.mousemove(function (e) {
            var leftOffset = e.pageX;
            var topOffset = e.pageY;
            var currentPosLeft = (container.width() / 2) - leftOffset;
            var currentPosTop = (container.height() / 2) - topOffset;

            trigger.css({
                'transform': 'translate(' + currentPosLeft / 50 + 'px, ' + currentPosTop / 50 + 'px)'
            });
        });
    }
    mouseParallax();


    // Banner Content Parallax
    function mouseParallax2() {
        var trigger = $('.single-slider-content-parallax');
        var container = $('.slider-area');
        container.mousemove(function (e) {
            var leftOffset = e.pageX;
            var topOffset = e.pageY;
            var currentPosLeft = (container.width() / 2) - leftOffset;
            var currentPosTop = (container.height() / 2) - topOffset;

            trigger.css({
                'transform': 'translate(' + currentPosLeft / 50 + 'px, ' + currentPosTop / 50 + 'px)'
            });
        });
    }
    mouseParallax2();


    /* Trigger Sidemenu Another */
    function headerSidemenuOptionalTrigger() {
        var trigger = $('.sidemenu-header-optional-trigger');
        var container = $('.header-sidemenu-minimal');
        trigger.on('click', function () {
            container.toggleClass('is-visible');
            $(this).toggleClass('is-active');
            $('.wrapper').toggleClass('left-offset-active');
            bodyOverlay();
        });
    }
    headerSidemenuOptionalTrigger();



    /* Sticky Header */
    $(window).on('scroll', function () {
        var scrollPos = $(this).scrollTop();
        if (scrollPos > 300) {
            $('.sticky-header').addClass('is-sticky');
        } else {
            $('.sticky-header').removeClass('is-sticky');
        }
    });




    /* Last Dropdown Selector */
    function menuDropdownLast() {
        $('nav.menu > ul > li').slice(-3).addClass('last-element');
    }
    menuDropdownLast();




    /* Sidemenu Dropdown */
    function sidemenuDropdown() {
        var $this = $('.header-sidemenu');
        $this.find('nav.menu .cr-dropdown')
            .find('ul').slideUp();
        $this.find('nav.menu li.cr-dropdown > a, nav.menu li.cr-sub-dropdown > a').on('click', function(e) {
            e.preventDefault();
            $(this).next().slideToggle();
        });
    }
    sidemenuDropdown();




    // Contact Form Message Popup
    function contactFormPopup() {
        var trigger = $('#contact-form [type="submit"]'),
            container = $('.cr-contact-message-modal');

        trigger.on('click', function () {
            container.addClass('is-visible');
        });

        $('<button><i class="icofont icofont-close"></i></button>').appendTo(container).on('click', function () {
            container.removeClass('is-visible');
        });
    }
    contactFormPopup();
	
	
	
	
	// new
	/*----------------------------
		Toogle Search
	------------------------------ */
		// Handle click on toggle search button
		$('.menu-search').on('click', function() {
			$('.search').toggleClass('open');
			return false;
		});
		
	/*----------------------------
        Nice Select Activation
    ------------------------------ */
    $('select').niceSelect();
    
    /*----------------------------
        Price Slider Activation
    -----------------------------*/
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    
    sliderrange.slider({
        range: true,
        min: 0,
        max: 100,
        values: [0, 85],
        slide: function (event, ui) {
            amountprice.val("$" + ui.values[0] + "  $" + ui.values[1]);
        }
    });
    amountprice.val("$" + sliderrange.slider("values", 0) +
        "  $" + sliderrange.slider("values", 1));


	// checkout	
	$('.acc-toggle').on('click', function(){
		if ($('.acc-toggle input').is(':checked')) {
			$('.create-acc-body').slideDown();
		}else{
			$('.create-acc-body').slideUp();
		}
	});
		
	$('.ship-toggle').on('click', function(){
		if ($('.ship-toggle input').is(':checked')) {
			$('.ship-acc-body').slideDown();
		}else{
			$('.ship-acc-body').slideUp();
		}
	});
			


    /*----------------------------
    Countdown active
    ------------------------------ */
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span><span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span><span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });



	
})(jQuery);