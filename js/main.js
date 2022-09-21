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
$( ".card" ).hover(function() {
   $( this ).fadeOut( 1000 );
   $( this ).fadeIn( 1000 );
 });

// переключатель языка
 $('.rus').on('click', function() {
      var r = $('.localization').each(function() {
         var el = $(this);
         var key = (el.attr('caption'));
         el.text(rus[key]);
      });
   });


   $('.eng').on('click', function() {
      var r = $('.localization').each(function() {
         var el = $(this);
         var key = (el.attr('caption'));
         el.text(eng[key]);
      });
   });



   var rus = {
      test: 'тест',
      name: 'имя'
   };
   var eng = {
      test: 'test',
      name: 'name'
   };
  });

