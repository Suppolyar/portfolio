const { data } = require("jquery");

const hamburger    = document.querySelector('.hamburger'),
      menu         = document.querySelector('.menu'),
      closeElem    = document.querySelector('.menu__close'),
      closeOverlay = document.querySelector('.menu__overlay');
      
hamburger.addEventListener('click',() => {
    menu.classList.add('active');
});

closeElem.addEventListener('click',() => {
    menu.classList.remove('active');
});

closeOverlay.addEventListener('click',() => {
    menu.classList.remove('active');
});

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");

        $('form').trigger('reset');
    });
    return false;
});

$(function(){
    $('a[href^="#"]').on('click', function(event) {
      // отменяем стандартное действие
      event.preventDefault();
      
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      /*
      * sc - в переменную заносим информацию о том, к какому блоку надо перейти
      * dn - определяем положение блока на странице
      */
      
      $('html, body').animate({scrollTop: dn}, 1000);
      
      /*
      * 1000 скорость перехода в миллисекундах
      */
    });
});