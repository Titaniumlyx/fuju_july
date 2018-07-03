<template>
    <div class="container">
        <div class="headShang">
            <span class="shLogin">
                <nuxt-link to="#" v-if="username">{{username}}</nuxt-link>
                <nuxt-link to="/login" v-else>请登录</nuxt-link>
            </span>
            <span class="shRegister">
                <a href="javascript:" v-if="username" @click="logOut">退出</a>
                <nuxt-link to="/register-login/register" v-else>立即注册</nuxt-link>
            </span>
        </div>

        <div class="headXia">
            <div class="headLogo">
                <a href="http://www.fooju.cn/"><img src="../assets/img/logo.png"></a>
            </div>
            <div class="headCity" @click="selectbox = true">
                <span>呼和浩特<i class="iconfont icon-jiantou6"></i></span>
            </div>
            <div class="headNav clearfix">
                <span class="nav-item active"><a href="#">首页</a></span>
                <span class="nav-item"><a href="/secondHand/secHouseList">二手房</a></span>
                <span class="nav-item"><a href="#">新房</a></span>
                <span class="nav-item"><a href="#">租房</a></span>
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
    import common from '~/js/common';
    import {mapState} from 'vuex';

    export default {
        name: "shouHead",
        components:{
            sideBox
        },
        data(){
            return{
                selectbox : false
            }
        },
        methods:{
            getLoginStatus: common.getLoginStatus,
            logOut: common.logOut
        },
        created(){
            this.getLoginStatus();
        },
        computed: {
            ...mapState([
                'userid',
                'username',
                'userpic',
                'userphone'
            ])
        }
    }
</script>

<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }

    .container {
        width: 1110px;
        height: 100px;
        margin: 0 auto;
    }

    .headShang {
        font-size: 12px;
        text-align: right;
        color: #333;
        padding: 12px 0 5px;
    }

    .shLogin a {
        text-decoration: none;
        border-right: 1px solid #333;
        padding: 0 10px;
    }

    .shRegister a {
        text-decoration: none;
        padding: 0 10px;
    }
    .headXia {
        position: relative;
        .headLogo {
            position: absolute;
            left: 0;
            bottom: -57px;
        }
        .headCity {
            cursor: pointer;
            margin-left: 150px;
            padding-top: 23px;
            float: left;
            span {
                border: 1px solid #999;
                border-radius: 15px;
                padding: 4px 10px;
                font-size: 16px;
                color: #333;
            }
        }
        .headNav {
            float: right;
            padding-top: 20px;
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



    .active a {
        color: #c30d23;
        padding-bottom: 25px;
        border-bottom: 2px solid #c30d23;
    }

    .headNav .nav-item {
        display: inline-block;
        padding-left: 32px;
        font-size: 16px;
    }

    .headNav .nav-item a {
        text-decoration: none;
    }

    .headNav .nav-item a:hover {
        color: #c30d23;
        padding-bottom: 25px;
        border-bottom: 2px solid #c30d23;
    }

    .spinner:hover .spinner-content {
        display: block;
    }

    .spinner {
        position: relative;
    }

    .spinner .spinner-content {
        display: none;
        position: absolute;
        width: 100%;
        top: 47px;
        left: 0;
        z-index: 998;
        div {
            padding: 10px 0 5px;
            cursor: pointer;
            margin-right: -30px;
            text-align: center;
            background: #fff;
        }
    }

    .spinner .spinner-content a:hover {
        border-bottom-style: hidden;
    }
</style>