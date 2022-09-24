$(document).ready(function(){
    
    // прелоаdер
    $(window).on('load', function () {
        $(".preloader_image").fadeOut(3500);
        $(".preloader").delay(2300).fadeOut("slow");
    });
    
           // открываем ссылку в новом окне по атрибуту
    $('[data-newwindow]').on('click', function(evt) {
        evt.preventDefault();
        window.open(evt.target.href, '_blank');
    });

// ховер для карт
$( ".card-hover-effect" ).hover(function() {
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
  // $("a").mouseover(function() { $(this).addClass("a-over"); });
  // $("a").mouseout(function() { $(this).removeClass("a-over"); });
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


// для превода
   var rus = {
      life: 'Жизненный опыт',
      name: 'Привет! Меня зовут Евгений',
      aboutMe: 'Немного о себе',
      infoOne: 'Учиться и открывать для себя что-то новое никогда не поздно! Время летит так, что можно и не понять что произошло. В детстве я мечтал стать программистом, но пошел в юриспруденцию. Эта работа мне не приносила удовольствия, и я решил осуществить свою детскую мечту и попробовать себя в IT. Приглянулась специальность фронтендера. Постепенно начал изучать верстку, JavaScript , фрейморк Bootstrap и библиотеку jQuery. Технологии идут вперед и приходится пыхтеть. На даный момент изучаю React.js.',
      mySkills: 'Мои навыки',
      frontEnd: 'HTML, CSS, JavaScript, GitHub. <br/> jQuery, Bootstrap. <br/> Начал изучать React.js.',
      personal: 'Личные качества',
      qualities: 'Стресоустойчивость Ответственност Умение работать в команде',
      languageMe: 'Знание языков',
      skillsLanguage: 'Украинский - родной язык. <br> Русский - второй родной язык. <br> Английский(изучаю) - beginner 2',
      skillDriver: 'Вождение',
      cardDriver:'Водительское удостоверение(категории):<br> A,  B, C, C<sub>1</sub>.',
      hobbies: 'Поговорим о хобби',
      whatIdo: 'Чем я занимаюсь в свободное время',
      whatDoing: 'У каждого из нас есть свое любимое занятие,  и может быть даже не одно. Идеальный вариант, когда работа и интересы совпадают, но это не всегда так. В свое свободное время я путешествую. Это не всегда какая-то новая страна. Учитывая нынешнюю «ОБСТАНОВКУ» это практически невозможно, но жизнь на этом не останавливается.  Мне нравится японская кухня ,и я решил попробовать сам что-то приготовить) и получилось.  Экстремальные виды спорта приносят уйму эмоций, и хочется  еще, и еще). Это и стало одним из вдохновений сверстать сайт в этом направлении.  Надеюсь мое новое влечение станет моей новой работой). Все преграды преодолимы! Главное – ЖЕЛАНИЕ.',
      hob: 'Хобби',
      japon: 'Японская кухня',
      japonKitchen: 'Кто не любит японскую кухню?) Вот и я о том же. В свободное время, на праздники и в обычное время мне нравится готовить суши и роллы.',
      daiving: 'Дайвинг',
      dip: 'Побывавши на море или озере, думаю,  каждый из нас брал маску и пытался  что-то разглядеть под водой.',
      travel: 'Путишествие',
      goTravel: 'Не говорите, что никто не любит путешествовать!!! Даже поход в магазин можно назвать путешествием!',
      xtreme: 'Экстрим',
      tolkExtrym: 'Эмоции должны быть разные. Не всем подходит, но мне нравится. Главное – безопасность! И все возможно!',
      conectWhithMe: 'Связаться со мной',
      aboutMeNav: 'Обо мне',
      myWork: 'Моя верстка',
      whatIToDo:'Где я работал',
      myLifeWork:'Начинал работать еще в студенческие годы. Но это была больше подработка. Начинал работать курьером. Здесь, я получил огромны опыт  в вождении. Я считаю, что это не менее важно в жизни. В это время у меня появился интерес к японской кухни.  Я по вечерам , взамен на опыт, начал учиться в японском ресторане.  Позже меня пригласили на работу в нем. После завершения учебы в институте, я начал пробовать себя в области права. Недолго проработав, я разочаровался в моем выборе профессии и пошел в гуманитарную организацию по разминированию. Проработав в ней, я забыл, что такое личная жизнь. Постоянные командировки на протяжении года начали сказываться на мне. Родных и близких видел 1-2 раза в месяц.  После этого решил поискать работу по месту жительства.  Хотелось получать хороший доход рядом с домом и приятный коллектив. Но не все так просто. Подвернулось место администратора.  Работа, по своему , интересна, неплохой заработок, но без развития и карьерного роста. Немного подумав, я решил попробовать себя в верстке. Начал изучать базу. Я заинтересовался.  В скором времени все получится. О своих навыках  и качествах могу сказать, что я коммуникабелен и могу работать в команде. Ответственность и стараться делать все вовремя мне привили еще в детстве. С этим у меня не было проблем никогда.  Пунктуальный. Стараюсь правильно распределять время для выполнения поставленных задач.'

   };
   var eng = {
      life: 'Life experience',
      name: 'HI! My name is Evgeniy',
      aboutMe: 'A little bit about yourself',
      infoOne: "It's never too late to learn and discover something new! Time flies so that you can not understand what happened. As a child, I dreamed of becoming a programmer, but went into law. This job did not bring me pleasure, and I decided to fulfill my childhood dream and try myself in IT. I liked the specialty of the frontender. Gradually, I began to study layout, JavaScript, the Bootstrap framework and the jQuery library. Technology moves forward and you have to puff. I am currently learning React.js.",
      mySkills: 'My skills',
      frontEnd: 'HTML, CSS, JavaScript, GitHub.\njQuery, Bootstrap.\nStarted learning React.js.',
      personal: 'Personal qualities',
      qualities: 'Stress resistance. Responsibility. Ability to work in a team',
      languageMe: 'Language skills',
      skillsLanguage: 'Ukrainian is my native language. \n Russian is my second native language. \n English (learning) - beginner 2',
      skillDriver: 'Driving',
      cardDriver:'Driving license(categories):A, B, C, C<sub>/1</sub>.',
      hobbies: "Let's talk about hobbies",
      whatIdo: 'What do I do in my free time',
      whatDoing: 'Each of us has our favorite pastime, and maybe even more than one. Ideally, when work and interests coincide, but this is not always the case. In my free time, I travel. It is not always some new country. Considering the current “SITUATION”, this is almost impossible, but life does not stop there. I like Japanese cuisine, and I decided to try to cook something myself) and it turned out. Extreme sports bring a lot of emotions, and you want more and more). This was one of the inspirations to make a website in this direction. I hope my new attraction becomes my new job). All obstacles are overcome! The main desire.',
      hob: 'Hobby',
      japon: 'Japanese kitchen',
      japonKitchen: 'Who does not love Japanese cuisine?) Here I am about the same. In my free time, on holidays and at regular times, I like to cook sushi and rolls.',
      daiving: 'Diving',
      dip: 'Having visited the sea or the lake, I think each of us took a mask and tried to see something under the water.',
      travel: 'Travel',
      goTravel: 'Do not say no one likes to travel!!! Even going to the store can be called a journey!',
      xtreme: 'Extreme',
      tolkExtrym: 'Emotions must be different. Not for everyone, but I like it. The main thing is safety! And everything is possible!',
      conectWhithMe: 'Contact with me',
      aboutMeNav: 'About me',
      myWork: 'My layout',
      whatIToDo:'Where did I work',
      myLifeWork:"He started working as a student. But it was more of a side job. Started working as a courier. Here, I got tremendous experience in driving. I believe that this is no less important in life. During this time, I developed an interest in Japanese cuisine. In the evenings, in exchange for experience, I began to study at a Japanese restaurant. Later I was invited to work in it. After completing my studies at the institute, I began to try myself in the field of law. After a short period of work, I became disillusioned with my choice of profession and joined a humanitarian demining organization. Having worked in it, I forgot what personal life is. Constant business trips throughout the year began to affect me. I saw relatives and friends 1-2 times a month. After that, I decided to look for a job at the place of residence. I wanted to get a good income close to home and a nice team. But not everything is so simple. The place of the administrator turned up. The work, in its own way, is interesting, good earnings, but without development and career growth. After some thought, I decided to try my hand at layout. Started learning the base. I became interested. Everything will work out soon. I can say about my skills and qualities that I am sociable and can work in a team. Responsibility and trying to do everything on time were instilled in me as a child. I never had any problems with this. Punctual. I try to properly allocate time to complete the tasks."


      
   };
   var ua = {
      life: 'Життєвий досвід',
      name: 'Вітаю! Мене звати Євгеній',
      aboutMe: 'Трохи про себе',
      infoOne: 'Вчитися та відкривати для себе щось нове ніколи не пізно! Час летить так, що можна і не зрозуміти, що сталося. У дитинстві мріяв стати програмістом, але пішов у юриспруденцію. Ця робота мені не приносила задоволення, і я вирішив здійснити свою дитячу мрію та спробувати себе в ІТ. Сподобалася спеціальність фронтендера. Поступово почав вивчати верстку, JavaScript, фрейморк Bootstrap та бібліотеку jQuery. Технології йдуть вперед і доводиться пихкати. На даний момент вивчаю React.js.',
      mySkills: 'Мої навички',
      frontEnd: 'HTML, CSS, JavaScript, GitHub. jQuery, Bootstrap. Почав вивчати React.js.',
      personal: 'Особисті якості',
      qualities: 'Стресостійкість Відповідальність Уміння працювати в команді',
      languageMe: 'Знання мов',
      skillsLanguage: 'Українська – рідна мова. <br> Українська - друга рідна мова. <br> Англійська(вивчаю) - beginner 2',
      skillDriver: 'Водіння',
      cardDriver:'Посвідчення водія(категорії):<br> A, B, C, C<sub>1</sub>.',
      hobbies: 'Поговоримо про хобі',
      whatIdo: 'Чим я займаюся у вільний час',
      whatDoing: 'У кожного з нас є своє улюблене заняття і може бути навіть не одне. Ідеальний варіант, коли робота та інтереси збігаються, але це не завжди так. У свій вільний час я мандрую. Це не завжди якась нова країна. Враховуючи нинішню «ОБСТАНОВКУ», це практично неможливо, але життя на цьому не зупиняється. Мені подобається японська кухня і я вирішив спробувати сам щось приготувати) і вийшло. Екстремальні види спорту приносять безліч емоцій, і хочеться ще, і ще). Це і стало одним із натхнень згорнути сайт у цьому напрямку. Сподіваюся мій новий потяг стане моєю новою роботою). Всі перешкоди переборні! Головне бажання.',
      hob: 'Хоббі',
      japon: 'Японська кухня',
      japonKitchen: 'Хто не любить японську кухню?) Ось і я про те саме. У вільний час, на свята та у звичайний час мені подобається готувати суші та роли.',
      daiving: 'Дайвінг',
      dip: 'Побувавши на морі чи озері, думаю, кожен із нас брав маску і намагався щось розгледіти під водою.',
      travel: 'Подорож',
      goTravel: 'Не кажіть, що ніхто не любить подорожувати! Навіть похід у магазин можна назвати подорожжю!',
      xtreme: 'Екстрiм',
      tolkExtrym: 'Емоції мають бути різні. Не всім підходить, але мені подобається. Головне – безпека! І все можливе!',
      conectWhithMe: "Зв'язатися зі мною",
      aboutMeNav: 'Про мене',
      myWork: 'Моя верстка',
      whatIToDo:'Де я працював',
      myLifeWork:"Починав працювати ще у студентські роки. Але це було більше підробітку. Починав працювати кур'єром. Тут, я отримав великий досвід у веденні. Я вважаю, що це не менш важливе в житті. У цей час у мене виник інтерес до японської кухні. Я вечорами, замість досвіду, почав вчитися в японському ресторані. Пізніше мене запросили на роботу у ньому. Після закінчення навчання в інституті я почав пробувати себе в галузі права. Недовго пропрацювавши, я розчарувався у моєму виборі професії та пішов до гуманітарної організації з розмінування. Пропрацювавши в ній, я забув, що таке особисте життя. Постійні відрядження протягом року почали позначатися на мені. Рідних та близьких бачив 1-2 рази на місяць.Після цього вирішив пошукати роботу за місцем проживання. Хотілося отримувати гарний дохід поряд із будинком та приємний колектив. Але не все так просто. Навернулося місце адміністратора. Робота, по-своєму, цікава, непоганий заробіток, але без розвитку та кар'єрного зростання. Трохи подумавши, я вирішив спробувати себе у верстці. Почав вивчати базу. Я зацікавився. Незабаром все вийде. Про свої навички та якості можу сказати, що я комунікабельний і можу працювати в команді. Відповідальність і намагатися робити все вчасно прищепили мені ще в дитинстві. Із цим у мене не було проблем ніколи. Пунктуальний. Намагаюся правильно розподіляти час виконання поставлених завдань."
 };

  // якорные сслыки
  
  $("input").click(function(event) {
    event.preventDefault();
    $("input").removeClass('tr-over');
    $(this).addClass('tr-over');
  });

  $(".nav-item a").click(function(e) {
   
    $(".nav-item a").removeClass('active');
    $(this).addClass('active');
  });

  });

 
 