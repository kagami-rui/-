//下拉框
(function() {
    var num = 0;

    $('[data-toggle=arrowdown]').hover(function() {
        var _id = $(this).attr('id');
        num = _id.charAt(_id.length - 1);
        $(this).addClass('nav-hover').find('span')
            .removeClass('run-down')
            .addClass('run-up');
        $('#nav-box' + num).slideDown(100);
    }, function() {
        $(this).removeClass('nav-hover').find('span')
            .removeClass('run-up')
            .addClass('run-down');
        $('#nav-box' + num).hide();
    });

    $('[data-toggle=hidden-box]').hover(function() {
        var _id = $(this).attr('id');
        num = _id.charAt(_id.length - 1);
        $('#arrow' + num).addClass('nav-hover')
            .find('span').removeClass('run-down')
            .addClass('run-up');
        $(this).show();
    }, function() {
        $('#arrow' + num).removeClass('nav-hover')
            .find('span').removeClass('run-up')
            .addClass('run-down');
        $(this).slideUp(100);
    });
})(jQuery);

// 选项卡
function Tab(num) {
    var i;
    for (i = 1; i <= 3; i++) {
        if (i == num)
            document.getElementById("d" + i).style.display = "block";
        else
            document.getElementById("d" + i).style.display = "none";
    }
};

//收藏夹星星变红
(function() {
    $('#arrow5').hover(function() {
        $(this).find('i').addClass('fa-orange');
    }, function() {
        $(this).find('i').removeClass('fa-orange');
    });

    $('#nav-box5').hover(function() {
        $('#arrow5').find('i').addClass('fa-orange');
    }, function() {
        $('#arrow5').find('i').removeClass('fa-orange');
    });
})(jQuery);

// 商品分类选项卡
(function() {
    var num;
    $('[toggle=side]').hover(function() {
        var s_class = $(this).attr('class');
        num = s_class.charAt(s_class.length - 1);
        $('#hiden-box-' + num).show();
    }, function() {
        $('#hiden-box-' + num).hide();
    });

    $('.hiden-box').hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    });
})(jQuery);


// 轮播图
$(document).ready(function() {
    var $iBox = $('.imgBox'),
        $iNum = $('.imgNum'),
        indexImg = 1, //初始下标
        totalImg = 5, //图片总数量
        imgSize = 520, //图片宽度
        moveTime = 900, //切换时间
        setTime = 2500, //停留时间
        clc = null;

    function moveImg() {
        if (indexImg != totalImg) {
            $iBox.animate({
                left: -(indexImg * imgSize) + 'px'
            }, moveTime);
            $iNum.removeClass('mark-color')
                .eq(indexImg)
                .addClass('mark-color');
            indexImg++;
        } else {
            indexImg = 1;
            $iNum.removeClass('mark-color')
                .eq(indexImg - 1)
                .addClass('mark-color');
            $iBox.animate({
                left: 0
            }, moveTime);
        }
    }
    $iNum.hover(function() {
        $iBox.stop(); //结束当前动画
        clearInterval(clc); //暂停循环
        $iNum.removeClass('mark-color');
        $(this).addClass('mark-color');
        indexImg = $(this).index();
        $iBox.animate({
            left: -(indexImg * imgSize) + 'px'
        }, 500);
    }, function() {
        clc = setInterval(moveImg, setTime); //周期调用函数
    });

    //鼠标放上停止动画
    $iBox.hover(function() {
        $('.control').fadeIn(200);
        clearInterval(clc); //暂停循环
    }, function() {
        $('.control').hide();
        clc = setInterval(moveImg, setTime);
    });
    //显示箭头
    $('.control').hover(function() {
        clearInterval(clc);
        $('.control').show();
    });
    //点击右箭头
    $('.to-right').click(function() {
        if (indexImg != totalImg) {
            $iBox.animate({
                left: -(indexImg * imgSize) + 'px'
            }, moveTime);
            $iNum.removeClass('mark-color')
                .eq(indexImg)
                .addClass('mark-color');
            indexImg++;
        } else {
            indexImg = 1;
            $iNum.removeClass('mark-color')
                .eq(indexImg - 1)
                .addClass('mark-color');
            $iBox.animate({
                left: 0
            }, moveTime);
        }
    });
    //点击左箭头
    $('.to-left').click(function() {
        indexImg--;
        if (indexImg != 0) {
            $iBox.animate({
                left: -((indexImg - 1) * imgSize) + 'px'
            }, moveTime);
            $iNum.removeClass('mark-color')
                .eq((indexImg - 1))
                .addClass('mark-color');
        } else {
            indexImg = totalImg;
            $iNum.removeClass('mark-color')
                .eq(indexImg - 1)
                .addClass('mark-color');
            $iBox.animate({
                left: -((indexImg - 1) * imgSize) + 'px'
            }, moveTime);
        }
    });

    clc = setInterval(moveImg, setTime);
});


// var box = document.getElementById("box");
// var content = box.children[0];
// var ul = content.children[0];
// var ol = content.children[1];
// var ullis = ul.children;

// var arr = getElementById("arr");
// var left = getElementById("left");
// var right = getElementById("right");

// for (var = 0;i<ullis.length ; i++){
//     var li = document.createElement("li");
//     li.innerHTML = i+1;
//     ol.appendChild(li);
// }


//轮播图2
$(document).ready(function() {
    var $iBox = $('.imgBox1'),
        $iNum = $('.imgNum1'),
        indexImg = 1, //初始下标
        totalImg = 5, //图片总数量
        imgSize = 520, //图片宽度
        moveTime = 800, //切换时间
        setTime = 2400, //停留时间
        clc = null;

    function moveImg() {
        if (indexImg != totalImg) {
            $iBox.animate({
                left: -(indexImg * imgSize) + 'px'
            }, moveTime);
            $iNum.removeClass('mark-color')
                .eq(indexImg)
                .addClass('mark-color');
            indexImg++;
        } else {
            indexImg = 1;
            $iNum.removeClass('mark-color')
                .eq(indexImg - 1)
                .addClass('mark-color');
            $iBox.animate({
                left: 0
            }, moveTime);
        }
    }
    $iNum.hover(function() {
        $iBox.stop(); //结束当前动画
        clearInterval(clc); //暂停循环
        $iNum.removeClass('mark-color');
        $(this).addClass('mark-color');
        indexImg = $(this).index();
        $iBox.animate({
            left: -(indexImg * imgSize) + 'px'
        }, 500);
    }, function() {
        clc = setInterval(moveImg, setTime); //周期调用函数
    });


    //鼠标放上停止动画
    $iBox.hover(function() {
        $('.control1').fadeIn(200);
        clearInterval(clc); //暂停循环
    }, function() {
        $('.control1').hide();
        clc = setInterval(moveImg, setTime);
    });
    //显示箭头
    $('.control1').hover(function() {
        clearInterval(clc);
        $('.control1').show();
    });

    //点击右箭头
    $('.to-right1').click(function() {
        if (indexImg != totalImg) {
            $iBox.animate({
                left: -(indexImg * imgSize) + 'px'
            }, moveTime);
            $iNum.removeClass('mark-color')
                .eq(indexImg)
                .addClass('mark-color');
            indexImg++;
        } else {
            indexImg = 1;
            $iNum.removeClass('mark-color')
                .eq(indexImg - 1)
                .addClass('mark-color');
            $iBox.animate({
                left: 0
            }, moveTime);
        }
    });
    //点击左 箭头
    $('.to-left1').click(function() {
        indexImg--;
        if (indexImg != 0) {
            $iBox.animate({
                left: -((indexImg - 1) * imgSize) + 'px'
            }, moveTime);
            $iNum.removeClass('mark-color')
                .eq((indexImg - 1))
                .addClass('mark-color');
        } else {
            indexImg = totalImg;
            $iNum.removeClass('mark-color')
                .eq(indexImg - 1)
                .addClass('mark-color');
            $iBox.animate({
                left: -((indexImg - 1) * imgSize) + 'px'
            }, moveTime);
        }
    });

    clc = setInterval(moveImg, setTime);
});




// 公告栏
(function() {
    $('.li-nav').hover(function() {
        var _id, num;
        _id = $(this).attr('id');
        num = _id.charAt(_id.length - 1);
        $('.li-nav').removeClass('li-nav-hover');
        $('.hiddenBox').hide();
        $('#box-' + num).fadeIn(200);
    }, function() {
        $(this).addClass('li-nav-hover');
    });
})(jQuery);



// 充值等四个下拉栏选项卡的js
(function() {
    $('.Recharge-li').hover(function() {
        var _id, num;
        _id = $(this).attr('id');
        num = _id.charAt(_id.length - 1);
        $('.Recharge-li').removeClass('Recharge-box-hover');
        $('.Recharge-box').hide();
        $('#Recharge-' + num).fadeIn(200);
    }, function() {
        $(this).addClass('Recharge-box-hover');
    });
})(jQuery);

// 二维码
(function() {
    $('.apps').hover(function() {
        var _id, num;
        _id = $(this).attr('id');
        num = _id.charAt(_id.length - 1);
        $('.user-qr-code').hide();
        $('#qrcode-' + num).fadeIn(200);
    }, function() {
        $('.user-qr-code').hide();
    });
})(jQuery);

//滚动出现固定导航
(function() {
    $(window).scroll(function() {
        var scTop = $(window).scrollTop(),
            $scS = $('.scroll-search');
        scTop >= 200 ? $scS.slideDown(200) : $scS.slideUp(200);
    });
})(jQuery);