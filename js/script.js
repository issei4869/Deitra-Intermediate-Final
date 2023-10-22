//ページトップへ戻るボタン（スクロールして出てくるタイプ）
var pagetop = $('#page-topbtn');
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    jQuery('.page-top').addClass( 'is-show' );
  } else {
    jQuery('.page-top').removeClass( 'is-show' );
  }
});

pagetop.click(function () {
  $('body, html').animate({ scrollTop: 0 }, 500);
  return false;
});


jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  
  //ドロワーメニュー
  $(".js-hamburger").click(function () {
    //js-hamburgerをクリックしたとき、is-activeクラスがある場合
    if ($('.js-hamburger').hasClass('is-active')) {
      //is-activeクラスを外す
      $('.js-hamburger').removeClass("is-active");
      $('.js-background').removeClass("is-active");
      //$("html").toggleClass("is-fixed");
      $(".js-sp-nav").removeClass("is-active");
    //is-activeクラスがない場合
    } else {
      ////is-activeクラスを追加する
      $('.js-hamburger').addClass("is-active");
      $('.js-background').addClass("is-active");
      $(".js-sp-nav").addClass("is-active");
    }
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });
  
  //カルーセル
  var swiper = new Swiper('.js-results-swiper', {
    slidesPerView: 1.29,
    spaceBetween: 20,

    breakpoints: {
      // 768px以上の場合
      768: {
        slidesPerView: 2.7,
        spaceBetween: 40,
      }
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".js-results-pagination",
      clickable: true,
    },
    clickable: true, //追加
	  loop: true, //追加
  });

  //Q & Aのアコーディオン
  $('.qa-content__question').on('click',function() {
    jQuery(this).next().slideToggle();//qa-content__questionの次の兄弟要素（qa-content__answer）が起動
    $(this).toggleClass( 'is-open' );//slideToggleが起動した際、同要素（qa-content__question）にis-openが付与される
    //jQuery(this).children('.qa-content__icon').toggleClass( 'is-open' );//slideToggleが起動した際、子要素にis-openが付与される
  });

  // モーダルを閉じる
  $('.js-close-button').click(function(e) {
    e.preventDefault();
    //data-以下が「target」になってる属性の値（.target-modal）を取得
    let target = jQuery(this).data('target');
  
    //☓か閉じるボタンが押されたらtarget-modalのクラスは隠される
    jQuery(target).hide();
  
    return false;
  });

  // モーダルを開く
  $('.js-open-button').click(function(e) {
    e.preventDefault();
    //data-以下が「target」になってる属性の値（.target-modal）を取得
    //console.log(jQuery(this).data('target'));
    let target = jQuery(this).data('target');

    //プライバシーポリシーのリンクが押されたらtarget-modalのクラスが表示される
    jQuery(target).show();

    return false;
  });

});




