<template>
    <div class="register-content">
        <div class="registerBox">
            <div class="registerWrap">
                <div class="register-item1">
                    <span class="word1 fll">创建账号</span>
                    <span class="word2 flr">已有账号，立即登录</span>
                </div>
                <div class="register-item2">
                    <form id="register">
                        <div class="phone ">
                            <i class="iconfont icon-app"></i>
                            <input type="tel" placeholder="请输入手机号" v-model="formData.mobile" autofocus="true" @keyup="testMobile">
                        </div>
                        <div class="phoneErrorMsg errorMsg" v-text="phoneError" v-show="phoneError"></div>
                        <div class="yzm clearfix">
                            <i class="iconfont icon-3"></i>
                            <input type="text" class="yzCode fll" placeholder="请输入短信验证码"  v-model="formData.verify">
                            <button type="button" class="obtain flr" v-text="btnText" @click="sendVerify"></button>
                        </div>
                        <div class="yzmErrorMsg errorMsg" v-text="yzmError" v-show="yzmError"></div>
                        <div class="pwd one">
                            <i class="iconfont icon-3"></i>
                            <input type="password" placeholder="请输入6-18位密码" v-model="formData.password" @keyup="testPwd">
                        </div>
                        <div class="pwdErrorMsg errorMsg" v-text="pwdError" v-show="pwdError"></div>
                        <div class="nicheng one">
                            <i class="iconfont icon-nicheng"></i>
                            <input type="text" placeholder="请输入昵称" v-model="formData.name" @keyup="testName">
                        </div>
                        <div class="nameErrorMsg errorMsg" v-text="nameError" v-show="nameError"></div>
                        <input type="button" value="立即注册" class="registerBtn" @click="submit">
                    </form>
                    <div class="notice clearfix">
                        <span class="fll">点击立即注册，则表示您阅读并同意遵守</span>
                        <a href="#" class="fll">福居网平台服务协议</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from '~/plugins/axios';

    export default {
        name: "register",
        layout: "loginBuju",
        data(){
            return{
                formData:{
                    mobile:"",
                    verify:"",
                    password:"",
                    name:""
                },
                btnText:"获取验证码",
                isSending: false,
                canCommit: false,
                phoneError:"",
                yzmError:"",
                pwdError:"",
                nameError:""
            }
        },
        methods:{
            testMobile(){
                let mobileReg = /((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
                this.phoneError = mobileReg.test(this.formData.mobile)? "" : "请输入正确的手机号码!";
                console.log(mobileReg.test(this.formData.mobile));
                return mobileReg.test(this.formData.mobile);
            },
            sendVerify() {
                if(this.testMobile()){
                    axios.get(`/api.php?s=Msg/send_msg/mobile/${this.formData.mobile}`).then(res => {
                        this.send();
                    }).catch(err => {
                        alert(err);
                    })
                }
            },
            send() {
                this.isSending = true;
                let time = 10;
                this.btnText = time + "s";
                let timer = setInterval(()=> {
                    time--;
                    this.btnText = time + "s";
                    if(time <= 0){
                        clearInterval(timer);
                        this.btnText = "重新获取";
                        this.isSending = false;
                    }
                }, 1000)
            },
            testPwd(){
                let mobileReg = /\d{6}$/;
                this.pwdError = mobileReg.test(this.formData.password)? "" : "密码格式不正确!";
                console.log(mobileReg.test(this.formData.password));
                return mobileReg.test(this.formData.password);
            },
            testName(){
                this.nameError = this.formData.name.length>0? "" : "昵称格式不正确!";
                console.log(this.formData.name.length);
                return this.formData.name;
            },
            submit() {
                if(this.phoneError||this.nameError||this.pwdError||this.formData.verify.length<4){
                    return
                }
                axios.get(`/api.php?s=Msg/verify/mobile/${this.formData.mobile}/verify/${this.formData.verify}`)
                    .then(res => {
                        console.log(res.code);
                        if(res.data.code!=200){
                            this.smsError = res.data.msg;
                        }
                        else {
                            let params = {
                                password: md5(md5(this.formData.password)) + "fujuwang",
                                mobile: this.formData.mobile,
                                name: this.formData.name

                            };
                            axios.post("/api.php?s=Login/register",params).then(res => {
                                console.log(res)
                            }).catch(err => {

                            })
                        }
                    }).catch(err => {
                    console.log(err);
                })
            },
        }
    }
</script>

<style scoped lang="scss">
    .register-content{
        overflow: hidden;
        .registerBox{
            width: 626px;
            height: 524px;
            background: #fff;
            margin: 130px auto 40px;
            overflow: hidden;
            .registerWrap{
                width: 365px;
                height: 426px;
                margin: 46px auto;
                .register-item1{
                    width: 360px;
                    height: 32px;
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
                .register-item2{
                    width: 360px;
                    color: #aeaeae;
                    i{
                        position: absolute;
                        top: 17px;
                        left: 50%;
                        margin-left: -172px;
                        font-size: 21px;
                    }
                    .phone{
                        margin-top: 35px;
                        position: relative;
                        input{
                            width: 328px;
                            height: 50px;
                            border: 1px solid #ccc;
                            padding-left: 30px;
                        }
                    }
                    .yzm{
                        position: relative;
                        margin-top: 20px;
                        input{
                            width: 206px;
                            height: 50px;
                            border: 1px solid #ccc;
                            padding-left: 30px;
                        }
                        button{
                            width: 110px;
                            height: 54px;
                            border: 1px solid #ccc;
                            background: 0 0;
                            font-size: 14px;
                            color: #aeaeae;
                            cursor: pointer;
                        }
                    }
                    .one{
                        position: relative;
                        margin-top: 20px;
                        input{
                            width: 328px;
                            height: 50px;
                            border: 1px solid #ccc;
                            padding-left: 30px;
                        }
                    }
                    .registerBtn{
                        width: 360px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        background: #c30d23;
                        font-size: 16px;
                        color: #fff;
                        margin-top: 20px;
                        border: none;
                        cursor: pointer;
                    }
                    .notice{
                        font-size: 12px;
                        color: #666;
                        margin-top: 30px;
                        a{
                            color: #000;
                            font-weight: 700;
                            text-decoration: none;
                        }
                    }
                    .errorMsg{
                        color: #c30d23;
                        margin-top: 20px;
                    }
                }
            }
        }
    }
</style>