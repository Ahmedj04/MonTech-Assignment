$(".accordion-content").hide();

$(".heading").click(function () {
    var $currentTile = $(this).closest(".tile");
    var $otherTiles = $(".tile").not($currentTile);
    var $heading = $currentTile.find(".heading");
    var $sign = $currentTile.find(".sign");
    var $accordionContent = $currentTile.find(".accordion-content");

    $otherTiles.find(".accordion-content").slideUp();
    $otherTiles.find(".heading").removeClass('active');
    $otherTiles.find(".sign").html("+");

    $accordionContent.slideToggle();
    $heading.toggleClass('active');
    $sign.html(($sign.html() === "+") ? "-" : "+");
});

$(".faq-link").click(function (e) {
    e.preventDefault();
    var targetFaqId = $(this).data("faq");
    $(".faq-child").hide();
    $("#" + targetFaqId).show();
});