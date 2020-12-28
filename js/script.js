$(window).on("load", function() {
    "use strict";



     // ============== Sticky Header Function ============ 


    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 1){  
            $('header').addClass("sticky animated slideInDown");
            
          }
          else{
            $('header').removeClass("sticky animated slideInDown");
          }
    });

    // ============ PAGE LOADER ============= 

    $('.page-loading').fadeOut();

    
     // =============== SIDE PANEL FUNCTION ===================

    $(".side-panel-sec > a").on("click",function(){
        $(this).parent().toggleClass('active');
        return false;
    });


    // ================= Header Height ================ 

    var hd_height = $("header").innerHeight();
    $(".fixed-prices").css({
      "top": hd_height
    });

    /*================== RESPONSIVE MOBILE MENU =====================*/

    $(".mobile-menu > nav ul ul").parent().addClass("menu-item-has-children");
    $(".mobile-menu > nav ul li.menu-item-has-children > a").on("click", function() {
        $(this).parent().toggleClass("active").siblings().removeClass("active");
        $(this).next("ul").slideToggle();
        $(this).parent().siblings().find("ul").slideUp();
        return false;
    });

    /*================== RIGHT SIIDE OPEN =====================*/


    $(".open-rsm-menu").on("click",function(){
      $(".right-side-menu").addClass("active");
      return false;
    });
    $(".right-side-menu > .close-search").on("click", function(){
      $(".right-side-menu").removeClass("active");
      return false;
    });


    /*================== MOBILE MENU OPEN =====================*/


    $(".mobile-menu-bar > a").on("click",function(){
      $(".mobile-menu").addClass("active");
      return false;
    });
    $(".mobile-menu > .close-search").on("click", function(){
      $(".mobile-menu").removeClass("active");
      return false;
    });

    /*================== FIXED PRICE OPEN =====================*/


    $(".open-cart-pg").on("click",function(){
      $(".fixed-prices").toggleClass("active");
      return false;
    });
    $("html").on("click", function(){
      $(".fixed-prices").removeClass("active");
    });
    $(".fixed-prices").on("click", function(e){
      e.stopPropagation();
    });


    /*================== SEARCH PAGE OPEN =====================*/

    $(".open-search-page").on("click",function(){
      $(".search-page").addClass("active");
      return false;
    });
    $(".close-search").on("click", function(){
      $(".search-page").removeClass("active");
      return false;
    });

    /*================== LANGUAGE LIST DROPDOWN =====================*/

    $(".lang-selct").on("click",function(){
      $(".lang-list").toggleClass("active");
      return false;
    });

    /*================== SETTING HEIGH OF DIV =====================*/

    var bg_height = $(".blog_info").innerHeight();
    $(".blog_img").css({
      "height": bg_height
    });

    var geheight = $(".contact-general-info").innerHeight();
    $("#map").css({
          "height": geheight
    });

     var lheight2 = $(".office_info").innerHeight();
    $("#map").css({
          "height": lheight2
    });


     // ================== SCROLLER TOP ============== 

    var scroll = $(window).scrollTop();

    $('.scrollTop, .bottom-strip a, .scrollertop').on("click", function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });
    
    
    /*================== ACCORDION TOGGLE FUNCTION =====================*/

    $(".toggle").each(function(){
        $(this).find('.content').hide();
        $(this).find('h2:first').addClass('active').next().slideDown(500).parent().addClass("activate");
        $('h2', this).on("click", function() {
            if ($(this).next().is(':hidden')) {
                $(this).parent().parent().find("h2").removeClass('active').next().slideUp(500).removeClass('animated fadeInUp').parent().removeClass("activate");
                $(this).toggleClass('active').next().slideDown(500).addClass('animated fadeInUp').parent().toggleClass("activate");
            }
        });
    });


    /*================== CART UP DOWN COUNTER =====================*/


    var spinner = $( "#spinner" ).spinner();
    var spinner = $( "#spinner2" ).spinner();
    var spinner = $( "#spinner3" ).spinner();
    var spinner = $( "#spinner4" ).spinner();

    
    /*================== DATE SETTING =====================*/

    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 2);
    $("#countdown").countdown(myDate, function (event) {
      $(this).html(
          event.strftime(
              '<div class="timer-wrapper"><div class="time">%D</div><span class="text">days</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">hrs</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">mins</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">sec</span></div>'
          )
      );
    });

    /*================== SETTING DIFFERENT TIME TO THIS =====================*/

    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 24.5);
    $("#countdown2").countdown(myDate, function (event) {
      $(this).html(
          event.strftime(
              '<div class="timer-wrapper"><div class="time">%D</div><span class="text">days</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">Hours</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">mins</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">sec</span></div>'
          )
      );
    });


    /*================== PRICE RANGE SLIDER  =====================*/

    $( function() {
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 10000,
        values: [ 500, 2000 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    } );






	


});


