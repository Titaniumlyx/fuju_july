<template>
    <div class="head-container">
        <div class="headWrap">
            <div class="headLeft fll">
                <img src="../../assets/img/logo.png">
            </div>
            <div class="headRight flr">
                <a href="#">
                    <span class="headBack fll">返回福居网首页</span>
                    <div class="enter flr">
                        <img src="../../assets/img/login/enter.png" alt="">
                    </div>
                </a>
            </div>
        </div>
        <sideBox></sideBox>
    </div>
</template>

<script>
    import sideBox from "~/components/sideBox";

    export default {
        name: "headBu",
        components:{
            sideBox
        },
    }
</script>

<style scoped lang="scss">
    .head-container{
        position: fixed;
        top: 0;
        background: #fff;
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #db4049;
        overflow: hidden;
        .headWrap{
            width: 1145px;
            height: 40px;
            margin: 30px auto 10px;
            .headLeft{
                margin: 2px;
                img{
                    width: 105px;
                    height: 32px;
                    cursor: pointer;
                }
            }
            .headRight{
                padding-top: 8px;
                .headBack{
                    font-size: 14px;
                    color: #666;
                }
                .enter{
                    margin-left: 8px;
                }
            }
        }
    }
</style>