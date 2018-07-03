<template>
    <div id="scrollBox">
        <ul id="con1">
            <li>李华 中了10块钱</li>
            <li>Leo 中了一个手机</li>
            <li>刘明 中了一块毛巾</li>
            <li>ll 中了保温杯</li>
            <li>nice 中了100块钱红包</li>
            <li>108 中了20元优惠券</li>
            <li>ok 中了100块钱</li>
        </ul>
        <ul id="con2"></ul>
    </div>
</template>

<script type="text/javascript">
    // 文字的轮播
    var area = document.getElementById('scrollBox');
    var con1 = document.getElementById('con1');
    var con2 = document.getElementById('con2');
    con2.innerHTML = con1.innerHTML;

    function scrollUp() {
        if (area.scrollTop >= con1.offsetHeight) {
            area.scrollTop = 0;
        } else {
            area.scrollTop += 40;
        }
    }

    var time = 2000;
    var mytimer = setInterval(scrollUp, time);
    area.onmouseover = function () {
        clearInterval(mytimer);
    }
    area.onmouseout = function () {
        mytimer = setInterval(scrollUp, time);
    }
</script>

<style scoped type="text/css">
    ul, li {
        list-style: none;
        display: block;
    }
    #scrollBox {
        height: 30px;
        width: 300px;
        margin: 50px auto;
        background: skyblue;
        overflow: hidden;
        z-index: 2;
    }
    #scrollBox #con1, #con2 {
        width: 280px;
        float: left;
    }
    #scrollBox li {
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
</style>