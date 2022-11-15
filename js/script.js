$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
});

$(document).ready(function () {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left" style="width:50px;height:30px;"></i>',
      '<i class="fa fa-angle-right" style="width:50px;height:30px;"></i>',
    ],
  });
});

$(function () {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          1000
        );
      });

      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );
});

$("#responsiveTabsDemo").responsiveTabs({
  animation: "slide",
});

$(window).on("load", function () {
  $("#isotope-container").isotope({
    // options
  });

  $("#isotope-filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $("#isotope-container").isotope({ filter: filterValue });
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

$(function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled:true
    }
  });
});
