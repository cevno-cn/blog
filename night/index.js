// 声明所用到的变量
var y = parseInt(getCookie("night")),
a = document.getElementsByTagName("a"),
j,
i,
name,
ca,
c;

// 返回cookie指定参数的方法
function getCookie(cname){
    name = cname + "=";
    ca = document.cookie.split(';');
    for(i=0; i<ca.length; i++) {
        c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

// 判断cookie值中的night为 0 or 1 ;
function panduan(){
    y = parseInt(getCookie("night"));
    if(y == 0){ // 白天模式的样式
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        for(j = 0; j < a.length; j++){
            a[j].style.color = ""
        }
    }else if(y == 1){ // 夜间模式的样式
        document.body.style.backgroundColor = "#24292e";
        document.body.style.color = "white";
        for(j = 0; j < a.length; j++){
            a[j].style.color = "white"
        }
    }
}

// 判断night是否存在，设置初始cookie值
if(y == 0){
    panduan();
}else if(y == 1){
    panduan();
}else{ // night不存在则执行，初始化night = 0 即 白天模式
    document.cookie="night = 0; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
    panduan();
}

// 刷新页面时直接执行判断方法，从而实现刷新页面
panduan();

window.onload = function(){
    // panduan(); // 页面资源加载完成后，再次执行判断方法（可删）

    function aaa(){
        if(y == 0){
            panduan();
            $(".vbtn").css("color","");
            $("#board").css({"background":""});
            $(".markdown-body").css("color","");
            $(".top-nav-collapse").css("background","");
            $("#scroll-top-button").css({"background":"","border":""});
        }else if(y == 1){
            panduan();
            $(".vbtn").css("color","white");
            $("#board").css({"background":"#24292e"});
            $(".markdown-body").css("color","white");
            $(".top-nav-collapse").css("background","rgba(0,0,0,0.5)");
            $("#scroll-top-button").css({"background":"#24292e","border":"1px solid white"});
        }else{
            document.cookie="night = 1; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/"; // 第一次加载，设置默认cookie值
            panduan();
        }
    }
    this.setInterval(function(){
        aaa()
    },10)
    $("#an").click(function(){
        if(y == 0){
            document.cookie="night = 1; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/"; // 修改 1 / 夜间
            panduan();
        }else if(y == 1){
            document.cookie="night = 0; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/"; // 修改 0 / 白天
            panduan();
        }else{
            document.cookie="night = 1; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/"; // 第一次加载，设置默认cookie值
            panduan();
        }
    })
}
