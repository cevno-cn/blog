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

// var img_num = 202; // 图片总数
				
// //预加载图片（多往后加载出来一张图片）
// var list = [];
// var a = parseInt(Math.random()*(img_num+1) ),
//     b = parseInt(Math.random()*(img_num+1));
// list.push(a, b);
// // console.log(list.length);
// var count = 0;
// var num = parseInt(Math.random()*(img_num+1));

// // console.log("click_num/"+num);
// // console.log("click_list/"+list);
// // console.log("click_count"+count+'\n---------------------');


// function load() {
//   var imgObj = new Image();
//   imgObj.src = "http://photo.ganto.xyz/"+list[list.length-1]+".jpg";
// }
// $('#background').css("background-image","url(http://photo.ganto.xyz/"+list[count]+".jpg)");
// load();

// setInterval(function(){
//   num = parseInt(Math.random()*(img_num+1));
//   // console.log("setInterval_num/"+num);
//   list.push(num);
//   // console.log("setInterval_list/"+list);
//   count++;
//   // console.log("setInterval_count"+count+'------------');
//   $('#background').css("background-image","url(http://photo.ganto.xyz/"+list[count]+".jpg)");
//   load();
// },60000);

$.get("https://v1.alapi.cn/api/acg?format=json",function(e,status){
  $('#background').css("background-image","url("+e.data.url+"!/both/1920x1080)");
});
setInterval(function(){
  $.get("https://v1.alapi.cn/api/acg?format=json",function(e,status){
    $('#background').css("background-image","url("+e.data.url+"!/both/1920x1080)");
  });
},30000);

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


// runTime
setInterval(function(){
  var start = "2019-07-01 06:06:06", // 设置的时间
    start_ = new Date(start).getTime(); // 设置的时间戳
  
  var	now = new Date(), // 现在时间
    fullyear = now.getFullYear(), // 现在年份
    month = now.getMonth()+1, // 现在月份
    date = now.getDate(), // 现在日份
    hours = now.getHours(), // 现在小时
    minutes = now.getMinutes(), // 现在分钟
    seconds = now.getSeconds(), // 现在秒钟
    time = now.getTime(); // 现在时间戳
  
  var run = time - start_, // 现在时间戳和设置时间戳的差
    zhD = parseInt(run/1000/60/60/24), // 将时间戳转化为天数
    zhH = parseInt((run % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), // 将时间戳转化为小时数
    zhM = parseInt((run % (1000 * 60 * 60)) / (1000 * 60)), // 将时间戳转化为分钟数
    zhS = parseInt(run % (1000 * 60) / 1000); // 将时间戳转化为秒钟数
    
  // 如果数值小于10的时候，在数值前方拼接一个0
  if(month < 10){
    month = "0" + month
  }
  if(date < 10){
    date = "0" + date
  }
  if(hours < 10){
    hours = "0" + hours
  }
  if(minutes < 10){
    minutes = "0" + minutes
  }
  if(seconds < 10){
    seconds = "0" + seconds
  }
  if(zhD < 10){
    zhD = "0" + zhD
  }
  if(zhH < 10){
    zhH = "0" + zhH
  }
  if(zhM < 10){
    zhM = "0" + zhM
  }
  if(zhS < 10){
    zhS = "0" + zhS
  }
  
  $(".now_ span").html(fullyear + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
  $(".run_ span").html(zhD + "天" + zhH + "小时" + zhM + "分钟" + zhS + "秒钟");
  
},1000);

// 公告关闭按钮
// document.getElementById("bulletin_0").onclick = function(){
//   document.getElementById("bulletin").style.display = "none";
// }