<template>
    <div class="footCon clearfix">
        <div class="footWrap">
            <div class="word font1 fll">北京福居网网络科技有限公司</div>
            <div class="word font2 fll">Copyright © 2013-2017 FOOJU Corporation, All Rights Reserved 福居网 版权所有</div>
            <div class="word font3 fll">京ICP备13012924号-1 </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headFoot"
    }
</script>

<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    .footCon{
        width: 100%;
        height: 80px;
        overflow: hidden;
        .footWrap{
            width: 884px;
            height: 20px;
            margin: 30px auto;
            .word{
                font-size: 13px;
                color: #666;
                padding: 0 10px;
            }
        }

    }
</style>