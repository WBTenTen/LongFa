(function() {
    // 拿到元素
    var rolling = document.querySelector('#rolling');//大盒子
    var m_unit = document.querySelector('#m_unit');//运动盒子
    var listul = m_unit.children[0];//ul
    var imgs = listul.getElementsByTagName('img');//所有图片

    // 信号量 折返点
    var zhefandian;

    // 复制一倍的li
    listul.innerHTML += listul.innerHTML;

    // 得到所有的li个数
    var lis = listul.children;

    // 计算折返点，但是每个li的宽度不一致，所以现在一第二列假火车
    // 的头部的offsetLeft为折返点
    console.log(imgs.length);
    for (var i = 0 , count = 0; i < imgs.length; i++) {
        imgs[i].onload = function() {
            count++;
            if (count == imgs.length) {
                // 所有图片加载完毕，就有了折返点
                zhefandian = lis[lis.length / 2].offsetLeft;
                // 所有图片加载完毕，开始运动
                move();
            }
        }
    }

    // 信号量
    var nowLeft = 0;
    var timer;

    function move() {
        clearInterval(timer);
        // 运动
        timer = setInterval(function() {
            nowLeft -= 5;
            if (nowLeft < -zhefandian) {
                nowLeft = 0;
            }
            m_unit.style.left = nowLeft + 'px';
        },80);
    }

    // 鼠标滑进划出
    rolling.onmouseover = function() {
        clearInterval(timer);
    }
    rolling.onmouseout = function() {
        move();
    }
})();