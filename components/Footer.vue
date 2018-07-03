<template>
    <div class="footContainer">
        <div class="footTop">
            <div class="fTop">
                <h1>友情链接</h1>
                <div class="fList">
                    <li><a href="#">福居网咨询</a></li>
                    <li><a href="#">呼和浩特去114</a></li>
                    <li><a href="#">包头房产网</a></li>
                    <li><a href="#">天堂草原音乐网</a></li>
                </div>
            </div>
        </div>

        <div class="fBottom">
            <div class="fContent">
                <div class="li1">
                    <a href="#">关于我们</a>
                    <a href="#">联系方式</a>
                    <a href="#">隐私声明</a>
                    <a href="#">版权声明</a>
                    <a href="#">法律保障</a>
                </div>
                <div class="li2">温馨提示：呼和浩特房地产网最新购房信息请及时查看呼和浩特房地产业网官方网站【福居网】</div>
                <div class="li2">地 址： 呼和浩特市赛罕区恩和大厦1909室 电 话:400-898-1018</div>
                <div class="li2">北京福居网网络科技有限公司 Copyright © 2013-2017 FOOJU Corporation, All Rights Reserved 福居网 版权所有| 京ICP备13012924号-1</div>
                <div class="li3">
                    <a href="#"><img src="../assets/img/360check.png"></a>
                    <a href="#"><img src="../assets/img/360check.png"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    .footContainer {
        width: 100%;
    }
    .footTop {
        background: #f4f4f4;
        height: 210px;
        .fTop {
            width: 1050px;
            height: 100px;
            margin: 0 auto;
            padding-top: 55px;
            .fList {
                margin-top: 30px;
                li {
                    margin-right: 48px;
                    list-style-type: none;
                    float: left;
                    a {
                        text-decoration: none;
                        font-size: 14px;
                        color: #999;
                    }
                }
            }
        }
    }
    .fBottom{
        background: url("../assets/img/footerBg.png") no-repeat;
        height: 446px;
        .fContent{
            width: 910px;
            height: 300px;
            margin: 0 auto;
            padding-top: 60px;
            div{
                color: #fff;
                a{
                    text-decoration: none;
                    color: #fff;
                    font-size: 16px;
                    padding: 0 50px;
                }
            }
            .li2{
                margin-top: 30px;
                font-size: 14px;
                text-align: center;
            }
            .li3{
                width: 520px;
                height: 44px;
                margin: 80px auto 0;
                a{
                    display: block;
                    border-style: none;
                    img{
                        float: left;
                    }
                }
            }
        }
    }
</style>