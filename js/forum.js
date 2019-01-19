//设置轮播图
// 获取元素
var l_box  = document.querySelector('.l-box');
var pic = document.querySelector('.pic');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var lis = document.querySelectorAll('.l-box li a');
//H获取宽度
var width = l_box.offsetWidth;
var index = 0;
//当鼠标点击右边按钮 图片向左移动
next.onclick = function () {
    if (index==0) {
        pic.style.left=0+'px';
    }
    lis[index].className=''
    index++
    
    var distance = -index*width;
    if (index>=5) {
        index=0
       }
    moveBox(pic,distance,100);
    lis[index].className='active'
    
}
//当鼠标点击左侧
prev.onclick = function () {
    lis[index].className=''
    index--
    
    if (index<0) {
        index=4
        pic.style.left=-2665+'px';
    }
    
    var distance = -index*width;
    moveBox(pic,distance,100);
    lis[index].className='active'

}
//li添加点击事件
for (var i =0;i<lis.length;i++) {
    lis[i].newIndex=i;
   lis[i].onclick = function () {
       lis[index].className=''
       index=this.newIndex;
       var distance= -index*width;
       moveBox(pic,distance,100)
       lis[index].className='active';
   }
}
//设置自动轮播
var timer ;
timer = setInterval(function () {
    next.onclick()
},1800)
//鼠标放上去 清除定时器
l_box .onmouseover = function () {
    clearInterval(timer)
}
// //鼠标离开 启动定时器
l_box .onmouseout =  function () {
    timer = setInterval(function () {
        next.onclick()
    },1800)
}
   

//右边切换 使用jQuery做
//当鼠标放在change上 背景颜色改变 a标签的背景图改变 列表进行切换
// $('.change1').mouseover(function () {
//     $('.change1').eq(0).css('background','#3f91d6')

// $('.change1 a').css('background','url(../img/hot-activity-logo2.png) no-repeat')
// $('.change1 span').css('color','#fff')
// })
// $('.change1').mouseout(function () {
//     $('.change1').eq(0).css('background','')
//     $('.change1 span').css('color','')
//     $('.change1 a').css('background','url(../img/hot-activity-logo.png) no-repeat')
// })
// $('.change2').mouseover(function () {
//     $('.change2').eq(0).css('background','#ff9c00')
// $('.change2 a').css('background','url(../img/hot-activity-logo2.png) no-repeat')
// $('.change2 span').css('color','#fff')
// $('Box box2 ul').css('display','block').siblings().css('display','none');
// })
// $('.change2').mouseout(function () {
//     $('.change2').eq(0).css('background','')
//     $('.change2 span').css('color','')
//     $('.change2 a').css('background','url(../img/hot-activity-logo.png) no-repeat')
// })
// $('.change3').mouseover(function () {
//     $('.change3').eq(0).css('background','#3f91d6')

// $('.change3 a').css('background','url(../img/hot-activity-logo2.png) no-repeat')
// $('.change3 span').css('color','#fff')

// })
// $('.change3').mouseout(function () {
//     $('.change3').eq(0).css('background','')
//     $('.change3 span').css('color','')
//     $('.change3 a').css('background','url(../img/hot-activity-logo.png) no-repeat')
// })
//  var change = document.querySelectorAll('.change');
//  var as = document.querySelectorAll()
$('.change').mouseover(function () {
    var num = $(this).index()
    $('.Box ul').eq(num).css('display','block').siblings().css('display','none')
    $(this).children('span').css('color','#fff')
    //获取对应的msrc
    var msrc = $(this).find('img').attr('msrc');
    // console.log(msrc)
    $(this).find('img').attr('src',''+msrc+'')
// $('.change').children('a').eq(0).css('background','url(./img/hot-activity-logo2.png)')

$('.change').mouseleave(function () {
    $(this).children('span').css('color','#000');
   var bsrc = $(this).find('img').attr('bsrc')
   console.log(bsrc)
   $(this).find('img').attr('src',''+bsrc+'')
})
})
//鼠标放上去 rotate 边框显示 
// r1 r2 旋转180
$('.rotate').mouseover(function () {
    $(this).addClass('display').siblings().removeClass('display');
    $(this).find('.r2').stop().show()
   
    $(this).find('.r1').stop().hide()
})
$('.rotate').mouseout(function () {
    $(this).removeClass('display');
    $(this).find('.r2').hide()
    $(this).find('.r1').show()
})
