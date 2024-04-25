// JavaScript Document


/*スリック*/
$('#slick-slide').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: true,
  variableWidth: true,
  dots: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }]
});

/*スクロールしたらふわっと表示*/
jQuery(function ($) {
  var fadeIn = $('.fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
});

/*ハンバーガーメニュー*/
$('#menu-btn-check').click(function () {
  $('.main-menu').toggleClass('is-active');
  $('.menu-btn').toggleClass('is-active');
  $('.overlay').toggleClass('is-active');
});
$('.overlay').click(function () {
  $('.main-menu').removeClass('is-active');
  $('.overlay').removeClass('is-active');
  $('.menu-btn').removeClass('is-active');
});
$('.main-menu a').click(function () {
  $('.main-menu').removeClass('is-active');
  $('.overlay').removeClass('is-active');
  $('.menu-btn').removeClass('is-active');
});


/*メニューボタン*/
const start = document.getElementById('menu-btn'); // 開始ボタン
const image = document.getElementById('menu-btn'); // ロゴ画像
// スタートボタンをクリックしたら
start.addEventListener('click', () => {
  // 画像を時計回りに1回転させる
  image.animate(
    // 途中の状態を表す配列
    [{
        transform: 'rotate(0deg)'
      }, // 開始時の状態（0度）
      {
        transform: 'rotate(360deg)'
      } // 終了時の状態（360度）
    ],
    // タイミングに関する設定
    {
      fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
      duration: 280, // 再生時間（1000ミリ秒）
    }
  );
});

