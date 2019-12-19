function floatLabelInput(){$(".input-box.with-float-label").find("input, textarea").on("focus blur",function(e){$(this).parents(".input-box").toggleClass("in-focus","focus"===e.type||0<this.value.length)}).trigger("blur")}function media(e,t){function a(e){e.matches&&t&&"function"==typeof t&&t()}var o=window.matchMedia(e);a(o),o.addListener(a)}function findVideos(){for(var e=document.querySelectorAll(".video-item"),t=0;t<e.length;t++)setupVideo(e[t])}function setupVideo(t){var a=t.querySelector(".video-link"),e=t.querySelector(".video-media"),o=t.querySelector(".video-play-button"),s=parseMediaURL(e);t.addEventListener("click",function(){var e=createIframe(s);a.remove(),o.remove(),t.appendChild(e)}),a.removeAttribute("href")}function parseMediaURL(e){return e.src.match(/https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i)[1]}function createIframe(e){var t=document.createElement("iframe");return t.setAttribute("allowfullscreen",""),t.setAttribute("allow","autoplay"),t.setAttribute("src",generateURL(e)),t.classList.add("video-media"),t}function generateURL(e){return"https://www.youtube.com/embed/"+e+"?rel=0&showinfo=0&autoplay=1"}$(function(){floatLabelInput();$("html");var t=$("body");$("[data-fancybox]").fancybox({idleTime:!1}),$(".open-modal").fancybox({touch:!1,autoFocus:!1,baseClass:"regular-modal-fancybox"}),$(".show-password").on("click",function(e){e.preventDefault();var t=$(this);t.toggleClass("active");var a=t.parent().find("input");"password"===a.attr("type")?a.attr("type","text"):a.attr("type","password")}),$(".regular-select").each(function(){var e=$(this),t=e.attr("data-placeholder");e.SumoSelect({csvDispCount:3,placeholder:t,search:!1,searchText:"",captionFormatAllSelected:"",okCancelInMulti:!1})});var a=$("#headerNav");a.find("a").on("click",function(e){e.preventDefault();$(this);return $("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top-100},300),a.removeClass("opened"),!1}),$(".scroll-to-top").on("click",function(e){return e.preventDefault(),$("html, body").animate({scrollTop:0},300),!1});var o=$(".regular-tabs__btn"),s=$(".regular-tabs__content");o.on("click",function(e){e.preventDefault();var t=$(this),a=t.attr("href");o.removeClass("active"),t.addClass("active"),s.removeClass("active"),$(a).addClass("active")});var l=$(".resp-nav-opener"),i=$(".header");l.on("click",function(e){e.preventDefault(),$(this).closest(".header").toggleClass("resp-opened"),t.toggleClass("overflow-hidden")}),$(document).on("click",function(e){$(e.target).closest(i).length||$(e.target).closest(l).length||(i.removeClass("resp-opened"),t.removeClass("overflow-hidden"),e.stopPropagation())});var n=$(".lang-switcher");$(".lang-switcher__cur").on("click",function(e){e.preventDefault(),$(this).parent().toggleClass("opened")}),$(document).on("click",function(e){$(e.target).closest(".lang-switcher").length||(n.removeClass("opened"),e.stopPropagation())})}),$(document).ready(function(){$(".pk-custom-scroll").length&&(media("(max-width: 375px)",function(){$(".pk-custom-scroll").mCustomScrollbar("destroy")}),media("(min-width: 376px)",function(){$(".pk-custom-scroll").mCustomScrollbar()})),$(".show-details-button").fancybox({touch:!1,baseClass:"regular-modal-fancybox"}),$(".formCallback").validate({submitHandler:function(e){return $.ajax({type:$(e).attr("method"),url:$(e).attr("action"),data:new FormData(e),cache:!1,contentType:!1,processData:!1,dataType:"text",success:function(){$(e).find("input").val(""),$(".callback-form-wrapper").hide(),$(".callback-text-success").css("display","flex")},error:function(){console.log("Упс... Что-то пошло не так!")}}),!1}}),$(".close-callback-form-btn").on("click",function(){$.fancybox.close()}),$(".slider-project-list").length&&(media("(max-width: 1024px)",function(){$(".slider-project-list").trigger("destroy.owl.carousel")}),media("(min-width: 1025px)",function(){$(".slider-project-list").owlCarousel({loop:!0,items:3,nav:!0,dots:!1,margin:20})})),$(".investors-carousel").length&&(media("(max-width: 1024px)",function(){$(".investors-carousel").trigger("destroy.owl.carousel")}),media("(min-width: 1025px)",function(){$(".investors-carousel").owlCarousel({loop:!0,items:4,nav:!0,dots:!1,margin:20,responsive:{1268:{items:4},0:{items:3}}})})),$(".experts-our__slider").owlCarousel({loop:!0,items:3,nav:!0,dots:!1,autoWidth:!0,responsive:{1400:{item:3},0:{item:2}}}),findVideos(),$(".experts-global__map_dot").on("click",function(){$(this).hasClass("active")?$(this).removeClass("active"):($(".experts-global__map_dot").removeClass("active"),$(this).addClass("active"))}),$(".experts-global__map_dot")&&$(document).mouseup(function(e){var t=$(".experts-global__map_dot");!t.is(e.target)&&t.hasClass("active")&&$(".experts-global__map_dot").removeClass("active")}),$(".about-people__tabs_tab-title").on("click",function(){var e=$(this).parent(),t=e.data("id");e.hasClass("active-tab")||($(".about-people__tabs_tab").removeClass("active-tab"),e.addClass("active-tab"),$(".about-people__slider-wrap").removeClass("active"),$("#"+t).addClass("active"))}),$(".about-people__slider")&&$(".about-people__slider").owlCarousel({loop:!0,items:1,nav:!0,dots:!1,animateOut:"fadeOut",animateIn:"fadeIn"}),$(".faq-accordion-title").on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).next(".faq-content__sidebar-accordeon_list").slideUp(300)):($(this).addClass("active"),$(this).next(".faq-content__sidebar-accordeon_list").slideDown(300))})});