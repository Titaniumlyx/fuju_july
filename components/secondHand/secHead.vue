<template>
    <div class="secContainer">
        <div class="secHandTop1">
            <div class="secBlock">
                <div class="headNav fll">
                    <span class="nav-item"><a href="/">首页</a></span>
                    <span class="nav-item active"><a href="javascript:">二手房</a></span>
                    <span class="nav-item"><a href="/newHouseAbout/newHouseIndex">新房</a></span>
                    <span class="nav-item"><a href="/rentHouseLists/rentHouse">租房</a></span>
                    <span class="nav-item"><a href="#">学区房</a></span>
                    <span class="nav-item"><a href="#">小区</a></span>
                    <span class="nav-item"><a href="#">经纪人</a></span>
                    <span class="nav-item"><a href="#">百科</a></span>
                    <span class="nav-item spinner">
                        <a href="#">在线委托</a>
                        <div class="spinner-content">
                            <div><a href="#">我是业主</a></div>
                            <div><a href="#">帮我找房</a></div>
                        </div>
                    </span>
                    <span class="nav-item"><a href="#">工具</a></span>
                    <span class="nav-item"><a href="#">专题</a></span>
                </div>
                <div class="headLogin flr">
                    <span class="shLogin"><a href="#">请登录</a></span>
                    <span class="shRegister"><a href="#">立即注册</a></span>
                </div>
            </div>
        </div>

        <div class="secHandTop2">
            <div class="top2Block">
                <div class="logo fll">
                    <a href="#"><img src="../../assets/img/logo.png"></a>
                </div>
                <div class="nav fll">
                    <span class="nav-item active"><a href="#">在售</a></span>
                    <span class="nav-item"><a href="#">成交</a></span>
                    <span class="nav-item"><a href="#">小区</a></span>
                    <span class="nav-item"><a href="#">地图找房</a></span>
                    <span class="nav-item"><a href="#">计算器</a></span>
                    <span class="nav-item"><a href="#">去估价</a></span>
                </div>
            </div>
        </div>
        <sideBox></sideBox>
    </div>
</template>

<script>
    import sideBox from "~/components/sideBox";

    export default {
        name: "secHead",
        components: {
            sideBox
        }
    }
</script>

<style scoped lang="scss">
    a {
        text-decoration: none;
    }

    .secHandTop1{
        width: 100%;
        height: 60px;
        background: #f4f4f4;
        .secBlock{
            width: 1100px;
            height: 20px;
            padding: 20px 0;
            margin: 0 auto;
        }
    }
    .headNav {
        width: 780px;
        display: flex;
        justify-content: space-between;
        .nav-item {
            display: inline-block;
            font-size: 16px;
            a:hover {
                color: #c30d23;
                padding-bottom: 18px;
                border-bottom: 2px solid #c30d23;
            }
        }
        .active a {
            color: #c30d23;
            padding-bottom: 18px;
            border-bottom: 2px solid #c30d23;
        }
    }
    .spinner:hover .spinner-content {
        display: block;
    }
    .spinner {
        position: relative;
        .spinner-content {
            display: none;
            position: absolute;
            width: 100%;
            top: 40px;
            left: -14px;
            z-index: 998;
            div {
                padding: 10px 0 5px;
                cursor: pointer;
                margin-right: -30px;
                text-align: center;
                background: #fff;
            }
        }
    }
    .spinner .spinner-content a:hover {
        border-bottom-style: hidden;
    }
    .headLogin {
        font-size: 12px;
        text-align: right;
        color: #333;
        padding-top: 3px;
        .shLogin a {
            border-right: 1px solid #333;
            padding: 0 10px;
        }
        .shRegister a {
            padding: 0 10px;
        }
    }

    .secHandTop2{
        width: 100%;
        height: 80px;
        background: #fff;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        .top2Block{
            width: 1100px;
            height: 80px;
            margin: 0 auto;
            .logo{
                width: 128px;
                height: 40px;
                padding: 20px 50px 20px 0;
            }
            .nav{
                width: 600px;
                height: 80px;
                display: flex;
                justify-content: space-around;
                .nav-item{
                    display: block;
                    height: 80px;
                    line-height: 80px;
                    a:hover{
                        color: #c30d23;
                    }
                }
                .active a{
                    color: #c30d23;
                }
            }
        }
    }
</style>