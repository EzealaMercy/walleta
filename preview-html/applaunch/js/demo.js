(function ($) {
    "use strict";
	
	/* Theme switcher */
	$("#switcher-toggle").on("click", function() {
        if ($(this).hasClass("switcher-open")) {
            $("#theme-switcher").animate({
                left: "0px"
            }, 500);
            $(this).removeClass("switcher-open").addClass("switcher-close")
        } else {
            $("#theme-switcher").animate({
                left: "-208px"
            }, 500);
            $(this).removeClass("switcher-close").addClass("switcher-open")
        }
    });
	
    $("button[data-theme]").click(function() {
        $("#color-switcher").attr("href", $(this).data("theme"))
    })
	
	//$('body').append('<div class="btn-buy-demo"><a href="https://themeforest.net/item/app-launch-app-landing-page-html5-template/19833300?ref=awaiken"><img src="http://awaiken.com/preview-html/applaunch/images/buy-now-applaunch.png" /></a> <a href="http://awaiken.com/preview-html/applaunch/#landing-page-demo"><img src="http://awaiken.com/preview-html/applaunch/images/see-more-demo.png" /></a></div><style>.btn-buy-demo{	position: fixed;   bottom: 10px;   right: 0px; text-align: right; } .btn-buy-demo img {	margin-right:10px; }</style>');
	
})(jQuery);