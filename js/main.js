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
   $('.ua').on('click', function() {
    var r = $('.localization').each(function() {
       var el = $(this);
       var key = (el.attr('caption'));
       el.text(ua[key]);
    });
 });



   var rus = {
      life: 'Жизненный опыт',
      name: 'Привет! Меня зовут Евгений',
      aboutMe: 'Немного о себе',
      infoOne: 'Учиться и открывать для себя что-то новое никогда не поздно! Время летит так, что можно и не понять что произошло. В детстве я мечтал стать программистом, но пошел в юриспруденцию. Эта работа мне не приносила удовольствия, и я решил осуществить свою детскую мечту и попробовать себя в IT. Приглянулась специальность фронтендера. Постепенно начал изучать верстку, JavaScript , фрейморк Bootstrap и библиотеку jQuery. Технологии идут вперед и приходится пыхтеть. На даный момент изучаю React.js.',
      mySkills: 'Мои навыки',
      frontEnd: 'HTML, CSS, JavaScript, GitHub. <br/> jQuery, Bootstrap. <br/> Начал изучать React.js.',

      hobbies: 'Поговорим о хобби',
      whatIdo: 'Чем я занимаюсь в свободное время',
      whatDoing: 'У каждого из нас есть свое любимое занятие,  и может быть даже не одно. Идеальный вариант, когда работа и интересы совпадают, но это не всегда так. В свое свободное время я путешествую. Это не всегда какая-то новая страна. Учитывая нынешнюю «ОБСТАНОВКУ» это практически невозможно, но жизнь на этом не останавливается.  Мне нравится японская кухня ,и я решил попробовать сам что-то приготовить) и получилось.  Экстремальные виды спорта приносят уйму эмоций, и хочется  еще, и еще). Это и стало одним из вдохновений сверстать сайт в этом направлении.  Надеюсь мое новое влечение станет моей новой работой). Все преграды преодолимы! Главное – ЖЕЛАНИЕ.',
      hob: 'Хобби',
      japon: 'Японская кухня',
      japonKitchen: 'Кто не любит японскую кухню?) Вот и я о том же. В свободное время, на праздники и в обычное время мне нравится готовить суши и роллы.',
      daiving: 'Дайвинг',
      dip: 'Побывавши на море или озере, думаю,  каждый из нас брал маску и пытался  что-то разглядеть под водой.',
      travel: 'Путишествие',
      goTravel: 'Не говорите, что никто не любит путешествовать!!! Даже поход в магазин можно назвать путешествием!'

   };
   var eng = {
      life: 'Life experience',
      name: 'HI! My name is Evgeniy',
      aboutMe: 'A little bit about yourself',
      infoOne: "It's never too late to learn and discover something new! Time flies so that you can not understand what happened. As a child, I dreamed of becoming a programmer, but went into law. This job did not bring me pleasure, and I decided to fulfill my childhood dream and try myself in IT. I liked the specialty of the frontender. Gradually, I began to study layout, JavaScript, the Bootstrap framework and the jQuery library. Technology moves forward and you have to puff. I am currently learning React.js.",
      mySkills: 'My skills',
      frontEnd: 'HTML, CSS, JavaScript, GitHub. <br/> jQuery, Bootstrap. <br/> Started learning React.js.',
      

      hobbies: "Let's talk about hobbies",
      whatIdo: 'What do I do in my free time',
      whatDoing: 'Each of us has our favorite pastime, and maybe even more than one. Ideally, when work and interests coincide, but this is not always the case. In my free time, I travel. It is not always some new country. Considering the current “SITUATION”, this is almost impossible, but life does not stop there. I like Japanese cuisine, and I decided to try to cook something myself) and it turned out. Extreme sports bring a lot of emotions, and you want more and more). This was one of the inspirations to make a website in this direction. I hope my new attraction becomes my new job). All obstacles are overcome! The main desire.',
      hob: 'Hobby',
      japon: 'Japanese kitchen',
      japonKitchen: 'Who does not love Japanese cuisine?) Here I am about the same. In my free time, on holidays and at regular times, I like to cook sushi and rolls.',
      daiving: 'Diving',
      dip: 'Having visited the sea or the lake, I think each of us took a mask and tried to see something under the water.',
      travel: 'Travel',
      goTravel: 'Do not say no one likes to travel!!! Even going to the store can be called a journey!'

      
   };
   var ua = {
      life: 'Життєвий досвід',
      name: 'Вітаю! Мене звати Євгеній',
      aboutMe: 'Трохи про себе',
      infoOne: 'Вчитися та відкривати для себе щось нове ніколи не пізно! Час летить так, що можна і не зрозуміти, що сталося. У дитинстві мріяв стати програмістом, але пішов у юриспруденцію. Ця робота мені не приносила задоволення, і я вирішив здійснити свою дитячу мрію та спробувати себе в ІТ. Сподобалася спеціальність фронтендера. Поступово почав вивчати верстку, JavaScript, фрейморк Bootstrap та бібліотеку jQuery. Технології йдуть вперед і доводиться пихкати. На даний момент вивчаю React.js.',
      mySkills: 'Мої навички',
      frontEnd: 'HTML, CSS, JavaScript, GitHub. <br/> jQuery, Bootstrap.  <br/>  Почав вивчати React.js.',

      hobbies: 'Поговоримо про хобі',
      whatIdo: 'Чим я займаюся у вільний час',
      whatDoing: 'У кожного з нас є своє улюблене заняття і може бути навіть не одне. Ідеальний варіант, коли робота та інтереси збігаються, але це не завжди так. У свій вільний час я мандрую. Це не завжди якась нова країна. Враховуючи нинішню «ОБСТАНОВКУ», це практично неможливо, але життя на цьому не зупиняється. Мені подобається японська кухня і я вирішив спробувати сам щось приготувати) і вийшло. Екстремальні види спорту приносять безліч емоцій, і хочеться ще, і ще). Це і стало одним із натхнень згорнути сайт у цьому напрямку. Сподіваюся мій новий потяг стане моєю новою роботою). Всі перешкоди переборні! Головне бажання.',
      hob: 'Хоббі',
      japon: 'Японська кухня',
      japonKitchen: 'Хто не любить японську кухню?) Ось і я про те саме. У вільний час, на свята та у звичайний час мені подобається готувати суші та роли.',
      daiving: 'Дайвінг',
      dip: 'Побувавши на морі чи озері, думаю, кожен із нас брав маску і намагався щось розгледіти під водою.',
      travel: 'Подорож',
      goTravel: 'Не кажіть, що ніхто не любить подорожувати! Навіть похід у магазин можна назвати подорожжю!'


 };
  });

 