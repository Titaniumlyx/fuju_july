<template>
    <div class="secContainer">
        <div class="secHandTop1">
            <div class="secBlock">
                <div class="headNav fll">
                    <span class="nav-item"><a href="/">首页</a></span>
                    <span class="nav-item"><a href="/secondHand/secHouseList">二手房</a></span>
                    <span class="nav-item"><a href="javascript:">新房</a></span>
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
                    <span class="shLogin"><a href="/login">请登录</a></span>
                    <span class="shRegister"><a href="/register-login/register">立即注册</a></span>
                </div>
            </div>
        </div>

        <div class="secHandTop2">
            <div class="top2Block">
                <div class="logo fll">
                    <a href="javascript:"><img src="../../assets/img/logo.png"></a>
                </div>
                <div class="headCity" @click="selectbox = true">
                    <span>呼和浩特<i class="iconfont icon-jiantou6"></i></span>
                </div>
                <div class="second-nav active">
                    <a href="javascript:">首页</a>
                </div>
                <div class="second-nav">
                    <a href="javascript:">楼盘</a>
                </div>
                <div class="search">
                    <div class="flr clearfix">
                        <input type="text" class="fll searchBlock">
                        <div class="searchBtn fll">搜索</div>
                        <div class="mapSearch fll">
                            <a href="javascript:">地图找房</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="choose-box" v-show="selectbox">
            <div class="choose-box1 clearfix">
                <div>
                    <i class="iconfont icon-chahao" @click="selectbox = false"></i>
                </div>
                <div class="title-box">
                    <div class="quxian">选择区县</div>
                    <a href="#" class="huhe">呼和浩特</a>
                    <p>H <a href="#" class="choose-item">回民区</a></p>
                    <p>J <a href="#" class="choose-item">金桥开发区</a></p>
                    <p>R <a href="#" class="choose-item">如意开发区</a></p>
                    <p>S <a href="#" class="choose-item">赛罕区</a></p>
                    <p>X <a href="#" class="choose-item">新城区</a></p>
                    <p>Y <a href="#" class="choose-item">玉泉区</a></p>
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
        },
        data(){
            return{
                selectbox: false
            }
        },
    }
</script>

<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
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
            display: table;
            width: 1100px;
            height: 80px;
            margin: 0 auto;
            .logo{
                width: 128px;
                height: 40px;
                padding: 20px 25px 20px 0;
            }
            .headCity{
                cursor: pointer;
                padding-top: 30px;
                float: left;
                span {
                    border: 1px solid #999;
                    border-radius: 15px;
                    padding: 4px 10px;
                    font-size: 16px;
                    color: #333;
                }
            }
            .second-nav{
                display: table-cell;
                vertical-align: middle;
                width: 80px;
            }
            .active a{
                color: #c30d23;
            }
            .search{
                display: table-cell;
                vertical-align: middle;
                width: 600px;
                .searchBlock{
                    width: 300px;
                    height: 40px;
                    box-sizing: border-box;
                }
                .searchBtn{
                    padding: 0 35px;
                    color: #fff;
                    background: #c30d23;
                    margin-right: 20px;
                    height: 40px;
                    line-height: 40px;
                    cursor: pointer;
                }
                .mapSearch{
                    padding: 0 45px;
                    background: #5f1985;
                    height: 40px;
                    line-height: 40px;
                    a{color: #fff;}
                }
            }
        }
    }
    .choose-box{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.3);
        align-items: center;
        display: flex;
        z-index: 10;
        .choose-box1{
            margin: 0 auto;
            width: 720px;
            height: 355px;
            background: #fff;
            position: relative;
            display: flex;
            align-items: center;
            i{
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 22px;
            }
            .title-box{
                margin: 0 auto;
                width: 640px;
                height: 340px;
                .quxian{
                    margin-top: 20px;
                    width: 640px;
                    height: 40px;
                    line-height: 40px;
                    text-align: left;
                    font-size: 22px;
                    color: #333;
                    font-weight: bolder;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 1px;
                }
                .huhe{
                    width: 640px;
                    height: 60px;
                    line-height: 60px;
                    text-align: left;
                    font-size: 18px;
                    color: #444;
                }
                a:hover{
                    color: #c30d23;
                }
                p{
                    color: #999;
                    font-size: 16px;
                    margin-top: 10px;
                }
            }
        }
    }
</style>