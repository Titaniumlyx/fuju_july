<template>
    <div class="side-wrap">
        <div class="item schedule">
            <i class="iconfont icon-kalendar"></i>
            <span>日程</span>
            <div class="hiddenBox">
                我的日程
            </div>
        </div>
        <div class="item attention">
            <i class="iconfont icon-heart"></i>
            <span>关注</span>
            <div class="hiddenBox">
                我的关注
            </div>
        </div>
        <div class="item sell">
            <i class="iconfont icon-fangzi"></i>
            <span>卖房</span>
            <div class="hiddenBox">
                在线卖房
            </div>
        </div>
        <div class="item tool">
            <i class="iconfont icon-gongju"></i>
            <span>工具</span>
            <div class="hiddenBox">
                房贷计算器
            </div>
        </div>
        <div class="item app">
            <i class="iconfont icon-app"></i>
            <span>APP</span>
            <div class="QRcode">
                <img src="../assets/img/app.png">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sideBox"
    }
</script>

<style scoped lang="scss">
    .side-wrap{
        z-index: 998;
        position: fixed;
        right: 0;
        top: 10px;
        background: #fff;
        width: 40px;
        height: 480px;
        font-size: 14px;
        .item{
            cursor: pointer;
            position: relative;
            margin-bottom: 53px;
            padding: 4px 0;
            text-align: center;
            .iconfont{
                font-size: 28px;
            }
            span{
                width: 40px;
                height: 20px;
                display: block;
                position: absolute;
                left: 0;
                text-align: center;
            }
            .hiddenBox{
                display: none;
                position: absolute;
                right: 48px;
                top: 7px;
                color: #fff;
                background: #5f1985;
                /*text-overflow: ellipsis;*/
                /*white-space: nowrap;*/
                width: 80px;
                padding: 10px;
                border-radius: 3px;
            }
            .hiddenBox::after{
                content: "";
                position: absolute;
                top: 14px;
                right: -16px;
                border: 8px solid transparent;
                border-left: 8px solid  #5f1985;
            }
            .QRcode{
                display: none;
                img{
                    width: 200px;
                    height: 200px;
                    position: absolute;
                    right: 40px;
                    top: -71px;
                }
            }
        }
        .schedule{
            margin-top: 25px;
        }
        .item:hover{
             background: #5f1985;
             color: #fff;
         }
        .item:hover span{
            background: #5f1985;
            color: #fff;
        }
        .item:hover .hiddenBox{
             display: block;
        }
        .item:hover .QRcode{
            display: block;
        }
    }
</style>