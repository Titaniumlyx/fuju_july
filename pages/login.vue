<template>
    <div class="content-container">
        <div class="loginBox">
            <div class="loginWrap">
                <div class="login-item1 itemQi">
                    <span class="word1 fll">登录</span>
                    <span class="word2 flr">没有账号，立即注册</span>
                </div>
                <form>
                    <div class="login-item2 itemQi">
                        <i class="iconfont icon-app fll"></i>
                        <input type="text" placeholder="请输入手机号码">
                    </div>
                    <div class="login-item3 itemQi">
                        <i class="iconfont icon-3 fll"></i>
                        <input type="text" placeholder="请输入密码">
                    </div>
                    <a href="#" class="login-btn">
                        <input type="button" value="登录" @click="login">
                    </a>
                    <div class="forget">
                        忘记密码 ?
                    </div>
                </form>
                <div class="sanFangLogin">
                    <div class="login-qq item-img fll">
                        <img src="../assets/img/login/qq.png">
                        <span>QQ登录</span>
                    </div>
                    <div class="login-weixin item-img fll">
                        <img src="../assets/img/login/weixin.png">
                        <span>微信登录</span>
                    </div>
                    <div class="login-weibo item-img fll">
                        <img src="../assets/img/login/weibo.png">
                        <span>新浪微博登录</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import cookies from "js-cookie";

    export default {
        layout: "loginBuju",
        name: "login",
        methods: {
            login() {
                let params = {
                    mobile: this.mobile,
                    password: md5(md5(this.pwd))+"fujuwang"
                };
                this.$axios.post("/api.php?s=Login/login", params).then(res => {
                    if(res.data.code == 200){
                        cookies.set("userid", res.data.data.id, {expires: 10});
                        cookies.set("username", res.data.data.username, {expires: 10});
                        cookies.set("userpic", res.data.data.face, {expires: 10});
                        cookies.set("userphone", res.data.data.mobile, {expires: 10});
                        this.$message.success("登录成功，正在为您跳转......");
                        setTimeout(() => {
                            this.$router.push("/")
                        },500)
                    }
                })
            },
        }
    }
</script>

<style scoped lang="scss">
    a{
        text-decoration: none;
    }
    .content-container{
        overflow: hidden;
        .loginBox{
            width: 626px;
            height: 524px;
            background: #fff;
            margin: 130px auto 40px;
            overflow: hidden;
            .loginWrap{
                width: 365px;
                height: 426px;
                margin: 46px auto;
                .itemQi{
                    width: 363px;
                    height: 48px;
                    margin-bottom: 30px;
                    .iconfont{
                        font-size: 25px;
                        padding: 11px;
                    }
                }
                .login-item1{
                    .word1{
                        font-size: 28px;
                        color: #666;
                    }
                    .word2{
                        font-size: 14px;
                        color: #ffa652;
                        display: block;
                        padding-top: 13px;
                        cursor: pointer;
                    }
                }
                .login-item2{
                    border: 1px solid #ccc;
                    input{
                        width: 315px;
                        height: 44px;
                        border-style: none;
                        margin-top: 1px;
                        outline: none;
                    }
                }
                .login-item3{
                    border: 1px solid #ccc;
                    input{
                        width: 315px;
                        height: 44px;
                        border-style: none;
                        margin-top: 1px;
                        outline: none;
                    }
                }
                .login-btn{
                    display: inline-block;
                    input{
                        background: #c30d23;
                        color: #fff;
                        font-size: 18px;
                        font-weight: 300;
                        text-align: center;
                        width: 365px;
                        height: 50px;
                        line-height: 50px;
                        border: none;
                        border-radius: 3px;
                        cursor: pointer;
                    }
                }
                .forget{
                    width: 300px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    margin: 8px auto;
                    font-size: 14px;
                    color: #666;
                    border-bottom: 1px solid #e4e4e4;
                    cursor: pointer;
                }
                .sanFangLogin{
                    width: 300px;
                    height: 80px;
                    margin: 5px auto;
                    .item-img{
                        width: 88px;
                        height: 62px;
                        padding: 2px;
                        margin-right: 8px;
                        position: relative;
                        cursor: pointer;
                        img{
                            display: block;
                            width: 40px;
                            height: 40px;
                            margin: 0 auto;
                        }
                        span{
                            font-size: 14px;
                            color: #666;
                            display: block;
                            width: 88px;
                            height: 20px;
                            text-align: center;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                        }
                    }
                }
            }
        }
    }
</style>