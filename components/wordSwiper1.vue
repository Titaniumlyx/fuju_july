<template>
    <div class="s-new">
        <div class="scroll-wrap">
            <ul class="scroll-content" :style="{ top }">
                <a href=""><li v-for="item in prizeList">{{item.name}}</li ></a>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                prizeList: [
                    { name: "二手房交易流程详解" },
                    { name: "租让时尚镜像生活更精彩"},
                    { name: "刘明 中了一块毛巾"},
                    { name: "ll 中了保温杯"},
                    { name: "nice 中了100块钱红包"},
                ],
                activeIndex: 0
            }
        },

        computed: {
            top() {
                return - this.activeIndex * 36 + 'px';
            }
        },

        mounted() {
            setInterval(_ => {
                if(this.activeIndex < this.prizeList.length -1) {
                    this.activeIndex += 1;
                } else {
                    this.activeIndex = 0;
                }
            }, 2000);
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .s-new{
        width: 300px;
        height: 40px;
    }
    .scroll-wrap{
        float: right;
        width: 186px;
        height: 36px;
        line-height: 36px;
        cursor: pointer;
        overflow: hidden;
    }

    .scroll-content{
        position: relative;
        transition: top 0.5s;
    }
    .scroll-content a{
        text-decoration: none;
    }
    .scroll-content li{
        list-style: none;
        color: white;
        font-size: 16px;
    }
</style>
