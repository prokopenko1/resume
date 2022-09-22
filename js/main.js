$(document).ready(function(){
    
    // прелоаdер
    $(window).on('load', function () {
        $(".preloader_image").fadeOut(4500);
        $(".preloader").delay(3300).fadeOut("slow");
    });
    
           // открываем ссылку в новом окне по атрибуту
    $('[data-newwindow]').on('click', function(evt) {
        evt.preventDefault();
        window.open(evt.target.href, '_blank');
    });

// ховер для карт
$( ".card-img-top" ).hover(function() {
  $(this).css("opacity","0.6");
  $(this).css("transition","all 1s ease 0s");
    },function(){
  $(this).css("opacity","1");
  $(this).css("transition","all 1s ease 0s");
 });

// плавный скрол
$(function (){   
    $("#back-top").hide();
   
    $(window).scroll(function (){
      if ($(this).scrollTop() > 1000){
        $("#back-top").fadeIn();
      } else{
        $("#back-top").fadeOut();
      }
    });
     
    $("#back-top a").click(function (){
      $("body,html").animate({
        scrollTop:0
      }, 1000);
      return false;
    });
  });  

    // наведение на иконки хедера
  $(".navbar-brand").mouseover(function() { $(this).addClass("tr-over"); });
  $(".navbar-brand").mouseout(function() { $(this).removeClass("tr-over"); });
      // наведение на карты
  $(".djambaRemow").mouseover(function() { $(this).addClass("shadowHowerCard"); });
  $(".djambaRemow").mouseout(function() { $(this).removeClass("shadowHowerCard"); });


// переключатель языка
//  $('.rus').on('click', function() {
//       var r = $('.localization').each(function() {
//          var el = $(this);
//          var key = (el.attr('caption'));
//          el.text(rus[key]);
//       });
//    });


//    $('.eng').on('click', function() {
//       var r = $('.localization').each(function() {
//          var el = $(this);
//          var key = (el.attr('caption'));
//          el.text(eng[key]);
//       });
//    });



//    var rus = {
//       test: 'тест',
//       name: 'имя'
//    };
//    var eng = {
//       test: 'test',
//       name: 'name'
//    };
  });

 