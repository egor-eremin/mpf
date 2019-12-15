/* functions */

// float label input
function floatLabelInput(){
	var $inputBoxWithFloat = $(".input-box.with-float-label");
	var $inputWithFloat = $inputBoxWithFloat.find("input, textarea");
	$inputWithFloat.on("focus blur", function (e) {
		$(this).parents(".input-box").toggleClass('in-focus', (e.type === 'focus' || this.value.length > 0));
	}).trigger('blur');
}

$(function() { // document.ready
	
	floatLabelInput();
	
	var $html = $("html");
	var $body = $("body");
	
	// modal windows
	$("[data-fancybox]").fancybox({
		idleTime: false
	});
	var $modalOpener = $(".open-modal");
	$modalOpener.fancybox({
		// animationEffect: "zoom-in-out",
		touch: false,
		autoFocus: false,
		baseClass: "regular-modal-fancybox"
	});
	
	// show password
	var $showPasswordTrigger = $(".show-password");
	$showPasswordTrigger.on("click", function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass("active");
		var $inputPassword = $this.parent().find("input");
		var inputPasswordType = $inputPassword.attr("type");
		if (inputPasswordType === "password") {
			$inputPassword.attr("type", "text");
		} else {
			$inputPassword.attr("type", "password");
		}
	});
	
	// custom select
	var $regularSelect = $(".regular-select");
	$regularSelect.each(function () {
		var $this = $(this);
		var placeholder = $this.attr("data-placeholder");
		$this.SumoSelect({
			csvDispCount: 3,
			placeholder: placeholder,
			search: false,
			searchText: "",
			captionFormatAllSelected: "",
			okCancelInMulti: false
		});
	});
	
	// smooth scroll to section
	var $headerNav = $("#headerNav");
	var $headerNavLink = $headerNav.find("a");
	$headerNavLink.on("click", function (e) {
		e.preventDefault();
		var $this = $(this);
		$("html, body").animate({
			scrollTop: $($.attr(this, "href")).offset().top - 100
		}, 300);
		$headerNav.removeClass("opened");
		return false;
	});
	
	// scroll to top
	var $scrollToTop = $(".scroll-to-top");
	$scrollToTop.on("click", function (e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, 300);
		return false;
	});
	
	// regular tabs
	var $regularTabsBtn = $(".regular-tabs__btn");
	var $regularTabsContent = $(".regular-tabs__content");
	$regularTabsBtn.on("click", function (e) {
		e.preventDefault();
		var $this = $(this);
		var thisContentID = $this.attr("href");
		$regularTabsBtn.removeClass("active");
		$this.addClass("active");
		$regularTabsContent.removeClass("active");
		$(thisContentID).addClass("active");
	});
	
	// open responsive nav
	var $respNavOpener = $(".resp-nav-opener");
	var $header = $(".header");
	$respNavOpener.on("click", function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.closest(".header").toggleClass("resp-opened");
		$body.toggleClass("overflow-hidden");
	});
	$(document).on("click", function (e) {
		if ($(e.target).closest($header).length || $(e.target).closest($respNavOpener).length) return;
		$header.removeClass("resp-opened");
		$body.removeClass("overflow-hidden");
		e.stopPropagation();
	});
	
	// lang switcher
	var $langSwitcher = $(".lang-switcher");
	var $langSwitcherCur = $(".lang-switcher__cur");
	$langSwitcherCur.on("click", function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.parent().toggleClass("opened");
	});
	$(document).on("click", function (e) {
		if ($(e.target).closest(".lang-switcher").length) return;
		$langSwitcher.removeClass("opened");
		e.stopPropagation();
	});
	
});
$( document ).ready(function () {
	(function addCustomScroll() {
		if ($('.pk-custom-scroll').length) {
			media('(max-width: 375px)', function () {
				$('.pk-custom-scroll').mCustomScrollbar("destroy");
			});
			media('(min-width: 376px)', function () {
				$('.pk-custom-scroll').mCustomScrollbar();
			});
		}
	})();
	(function openCallbackForm() {
		$('.show-details-button').fancybox({
			touch: false,
			baseClass: "regular-modal-fancybox"
		});
	})();
	(function validateCallbackForm() {
		$('.formCallback').validate({
			submitHandler: function (form) {
				$.ajax({
					type: $(form).attr('method'),
					url: $(form).attr('action'),
					data: new FormData(form),

					cache: false,
					contentType: false,
					processData: false,

					dataType: 'text',
					success: function () {
						$(form).find('input').val('');
						$('.callback-form-wrapper').hide();
						$('.callback-text-success').css('display','flex');
					},
					error: function() {
						console.log('Упс... Что-то пошло не так!');
					}
				});
				return false;
			}
		});
	})();
	(function closeFancyBox() {
		$('.close-callback-form-btn').on('click', function () {
			$.fancybox.close()
		});
	})();
	(function initMainProjectSlider() {

		if ($('.slider-project-list').length) {
			media('(max-width: 1024px)', function () {
				$('.slider-project-list').trigger('destroy.owl.carousel');
			});
			media('(min-width: 1025px)', function () {
				$('.slider-project-list').owlCarousel({
					loop:true,
					items: 3,
					nav: true,
					dots: false,
					margin: 20,
				});
			})
		}

	})();
	(function initinvestorsSlider() {
		if ($('.investors-carousel').length) {
			media('(max-width: 1024px)', function () {
				$('.investors-carousel').trigger('destroy.owl.carousel');
			});
			media('(min-width: 1025px)', function () {
				$('.investors-carousel').owlCarousel({
					loop:true,
					items: 4,
					nav: true,
					dots: false,
					margin: 20,
					responsive : {
						1268: {
							items: 4,
						},
						0: {
							items: 3,
						}
					}
				})
			});
		}
	})();
	(function initExpertsSlider() {
		if ('.experts-our__slider') {
			$('.experts-our__slider').owlCarousel({
				loop:true,
				items: 3,
				nav: true,
				dots: false,
				autoWidth:true,
				responsive: {
					1400: {
						item: 3
					},
					0: {
						item: 2
					}
				}
			});
		}
	})();
	(function playVideo() {
		findVideos();
	})();
	(function showExpertsMapPopup() {
		$('.experts-global__map_dot').on('click', function () {
			if (!$(this).hasClass('active')) {
				$('.experts-global__map_dot').removeClass('active');
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		})
	})();
	(function hideExpertsMapPopup() {
		if ($('.experts-global__map_dot')) {
			$(document).mouseup(function (e) {
				var element = $('.experts-global__map_dot');
					if (!element.is(e.target) && element.hasClass('active')) {
						$('.experts-global__map_dot').removeClass('active');
					}
				})
		}
	})();
});

function media(mediaQueryString, action){
	var handleMatchMedia = function (mediaQuery) {
		if (mediaQuery.matches) { //Попадает в запроc
			if (action  && typeof(action) === 'function') {
				action();
			}
		}
	};
	var mql = window.matchMedia(mediaQueryString); //стандартный медиазапрос для смены режима просмотра
	handleMatchMedia(mql);
	mql.addListener(handleMatchMedia);
}
function findVideos() {
	var videos = document.querySelectorAll('.video-item');

	for (var i = 0; i < videos.length; i++) {
		setupVideo(videos[i]);
	}
}

function setupVideo(video) {
	var link = video.querySelector('.video-link');
	var media = video.querySelector('.video-media');
	var button = video.querySelector('.video-play-button');
	var id = parseMediaURL(media);

	video.addEventListener('click', function () {
		var iframe = createIframe(id);

		link.remove();
		button.remove();
		video.appendChild(iframe);
	});

	link.removeAttribute('href');
	// video.classList.add('video--enabled');
}

function parseMediaURL(media) {
	var regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
	var url = media.src;
	var match = url.match(regexp);

	return match[1];
}

function createIframe(id) {
	var iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay');
	iframe.setAttribute('src', generateURL(id));
	iframe.classList.add('video-media');

	return iframe;
}

function generateURL(id) {
	var query = '?rel=0&showinfo=0&autoplay=1';

	return 'https://www.youtube.com/embed/' + id + query;
}
