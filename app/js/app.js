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
		animationEffect: "zoom-in-out",
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
			$('.pk-custom-scroll').mCustomScrollbar();
		}
	})();
});