function scrollToElement(target, offset) {
  var scroll_offset = $(target).offset();
  $('body,html').animate({
    scrollTop: scroll_offset.top + (offset || 0),
    easing: 'swing',
  });
}

function scrollToBoard() {
  scrollToElement('#board', -$('#navbar').height());
}

// 防抖动函数
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

$(document).ready(function () {
  // 顶部菜单的动效
  var navbar = $('#navbar');
  if (navbar.offset().top > 0) {
    navbar.addClass('navbar-custom');
    navbar.removeClass('navbar-dark');
  }
  $(window).scroll(function () {
    if (navbar.offset().top > 0) {
      navbar.addClass('navbar-custom');
      navbar.removeClass('navbar-dark');
    } else {
      navbar.addClass('navbar-dark');
    }
  });
  $('#navbar-toggler-btn').on('click', function () {
    $('.animated-icon').toggleClass('open');
    $('#navbar').toggleClass('navbar-col-show');
  });

  // 头图滚动动画
  $(window).scroll(function () {
    var oVal = $(window).scrollTop() / 3;
    $('#background[parallax="true"]').css({
      transform: 'translate3d(0,' + oVal + 'px,0)',
      '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-o-transform': 'translate3d(0,' + oVal + 'px,0)',
    });
  });

  // 向下滚动箭头的点击
  $('.scroll-down-bar').on('click', scrollToBoard);

  // 向顶部滚动箭头
  var topArrow = $('#scroll-top-button');
  var posDisplay = false;
  var scrollDisplay = false;
  // 位置
  var setTopArrowPos = function () {
    var boardRight = document.getElementById('board').getClientRects()[0].right;
    var bodyWidth = document.body.offsetWidth;
    var right = bodyWidth - boardRight;
    posDisplay = right >= 50;
    topArrow.css({
      'bottom': posDisplay && scrollDisplay ? '20px' : '-60px',
      'right': right - 64 + 'px',
    });
  };
  setTopArrowPos();
  $(window).resize(setTopArrowPos);
  // 显示
  var headerHeight = $('#board').offset().top;
  $(window).scroll(debounce(function () {
    var scrollHeight = document.body.scrollTop + document.documentElement.scrollTop;
    scrollDisplay = scrollHeight >= headerHeight;
    topArrow.css({
      'bottom': posDisplay && scrollDisplay ? '20px' : '-60px',
    });
  }, 20));
  // 点击
  topArrow.on('click', function () {
    $('body,html').animate({
      scrollTop: 0,
      easing: 'swing',
    });
  });
});







// 背景图片
// var img_num = 202;
// var num = parseInt(Math.random()*(img_num+1));
// document.getElementById("background").style.backgroundImage = "url(http://say.ganto.xyz/images/" + num + ".jpg)";
// setInterval(function(){
//   num = parseInt(Math.random()*(img_num+1));
//   document.getElementById("background").style.backgroundImage = "url(http://say.ganto.xyz/images/" + num + ".jpg)";
// },1000);

var img_num = 202; // 图片总数
				
//预加载图片（多往后加载出来一张图片）
var list = [];
var a = parseInt(Math.random()*(img_num+1) ),
    b = parseInt(Math.random()*(img_num+1));
list.push(a, b);
// console.log(list.length);
var count = 0;
var num = parseInt(Math.random()*(img_num+1));

// console.log("click_num/"+num);
// console.log("click_list/"+list);
// console.log("click_count"+count+'\n---------------------');


function load() {
  var imgObj = new Image();
  imgObj.src = "http://say.ganto.xyz/images/"+list[list.length-1]+".jpg";
}
$('#background').css("background-image","url(http://say.ganto.xyz/images/"+list[count]+".jpg)");
load();

setInterval(function(){
  num = parseInt(Math.random()*(img_num+1));
  // console.log("setInterval_num/"+num);
  list.push(num);
  // console.log("setInterval_list/"+list);
  count++;
  // console.log("setInterval_count"+count+'------------');
  $('#background').css("background-image","url(http://say.ganto.xyz/images/"+list[count]+".jpg)");
  load();
},60000);







// 百度收录
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
// 好像是360收录
(function(){
var src = "https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba";
document.write('<script src="' + src + '" id="sozz"><\/script>');
})();