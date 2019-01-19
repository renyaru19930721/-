var dsq;
function moveBox (element,targetVal,speed) {
        //清楚上一个定时器  如果变量定义在函数里边，属于局部变量 每次点击不能清楚
        window.clearInterval(dsq)
      dsq= window.setInterval(function () {
           //获取元素左边距离
        var leftVal = element.offsetLeft;
         //判断左边距离与目标距离
         //如果目标距离和左边距离相等 清除定时器 停止程序运行
         if (targetVal==leftVal) {
             window.clearInterval(dsq)
              return;
         }
         //如果目标距离与移动距离不成倍数关系 目标距离-左边距离的值小于speed；直接将目标距离赋值给移动元素 否则按照之前移动
         if (Math.abs(targetVal-leftVal)<speed) {
                element.style.left=targetVal+'px'
         } else {
            if (targetVal-leftVal>0) {
                leftVal=leftVal+speed;
             
            } else  {
                leftVal=leftVal-speed;
               
            }
            element.style.left=leftVal+'px';
         }
       
       
       },10)
    
    }
