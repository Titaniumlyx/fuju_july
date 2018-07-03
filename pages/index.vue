<template>
    <div class="container">

        <div class="content1-search">
            <!--轮播图-->
            <div class="block1">
                <div v-swiper:mySwiper="swiperOption" v-banner id="banner">
                    <div class="swiper-wrapper">
                        <div style="overflow: hidden" class="swiper-slide" >
                            <img src="../assets/img/banner1.jpg" class="slide-img">
                        </div>
                        <div style="overflow: hidden" class="swiper-slide" >
                            <img src="../assets/img/banner1.jpg" class="slide-img">
                        </div>
                    </div>
                </div>
            </div>
            <!--搜索框-->
            <div class="search-box">
                <div class="blockSearch">
                    <ul class="clearfix links">
                        <li class="fll link-item" :class="{active: selectedIndex == 0}" @click="selectedIndex = 0">找二手房</li>
                        <li class="fll link-item" :class="{active: selectedIndex == 1}" @click="selectedIndex = 1">找新房</li>
                        <li class="fll link-item" :class="{active: selectedIndex == 2}" @click="selectedIndex = 2">找租房</li>
                        <li class="fll link-item" :class="{active: selectedIndex == 3}" @click="selectedIndex = 3">找学区房</li>
                        <li class="fll link-item" :class="{active: selectedIndex == 4}" @click="selectedIndex = 4">找小区</li>
                    </ul>
                    <div class="search-bottom clearfix">
                        <input type="text" class="fll" :placeholder="placeholderText">
                        <div class="searchBtn fll">搜索</div>
                        <div class="searchMap flr">
                            <img src="../assets/img/mapSearch.png">
                            地图找房
                        </div>
                    </div>
                </div>
            </div>
            <!--福居头条-->
            <div class="touTiao">
                <div class="touTiao-img fll">
                    <img src="../assets/img/touTiao.png">
                </div>
                <wordSwiper></wordSwiper>
            </div>

        </div>

        <div class="content2">
            <div class="block2">
                <a href="#" class="item">
                    <div class="item-img"><img src="../assets/img/store.png"></div>
                    <div class="item-ti1">查门店</div>
                    <div class="item-ti2">查优质门店</div>
                </a>
                <a href="#" class="item">
                    <div class="item-img"><img src="../assets/img/entrust.png"></div>
                    <div class="item-ti1">在线委托</div>
                    <div class="item-ti2">有问题我帮你</div>
                </a>
                <a href="#" class="item">
                    <div class="item-img"><img src="../assets/img/mapBlue.png"></div>
                    <div class="item-ti1">地图找房</div>
                    <div class="item-ti2">找地图吖..</div>
                </a>
                <a href="#" class="item">
                    <div class="item-img"><img src="../assets/img/encyclopedias.png"></div>
                    <div class="item-ti1">福居百科</div>
                    <div class="item-ti2">多看书啊..</div>
                </a>
            </div>
        </div>
        <div class="content3">
            <div class="block3">
                <div class="item3">
                    <a href="#"><img src="../assets/img/zsfy.png"></a>
                </div>
                <div class="item3">
                    <a href="#"><img src="../assets/img/dbf.png"></a>
                </div>
                <div class="item3">
                    <a href="#"><img src="../assets/img/feature.png"></a>
                </div>
            </div>
        </div>
        <div class="content4">
            <div class="block4">
                <div class="blo4-title">
                    精品新房
                    <a href="#"><span>更多新房...> </span></a>
                </div>
                <div class="blo4-span">在这里寻觅一个新家...</div>
                <div class="blo4-img">
                    <div class="blo4-item">
                        <a href="#"><img src="../assets/img/index4/index4-1.jpg"></a>
                        <div class="blo4-foot">
                            <span class="blo4-fleft">盛世国际</span>
                            <span class="blo4-fright">0元/平</span>
                        </div>
                    </div>
                    <div class="blo4-item">
                        <a href="#"><img src="../assets/img/index4/index4-2.jpg"></a>
                        <div class="blo4-foot">
                            <span class="blo4-fleft">盛世国际</span>
                            <span class="blo4-fright">0元/平</span>
                        </div>
                    </div>
                    <div class="blo4-item">
                        <a href="#"><img src="../assets/img/index4/index4-3.jpg"></a>
                        <div class="blo4-foot">
                            <span class="blo4-fleft">盛世国际</span>
                            <span class="blo4-fright">0元/平</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content5">
            <div class="block5">
                <div class="blo5-title">
                    二手优品
                    <a href="#"><span>更多二手优房...> </span></a>
                </div>
                <div class="blo5-span">生活因为宽广，才会不断延伸...</div>
                <div class="blo5-img">
                    <div class="blo5-item">
                        <a href="#"><img src="../assets/img/index5/index5-1.jpg"></a>
                        <div class="price-tag">100万</div>
                        <div class="blo5-foot">
                            <span>北辰新领地 三居 可按揭</span>
                            <span>3室2厅2卫 128.80㎡</span>
                        </div>
                    </div>
                    <div class="blo5-item">
                        <a href="#"><img src="../assets/img/index5/index5-2.jpg"></a>
                        <div class="price-tag">100万</div>
                        <div class="blo5-foot">
                            <span>北辰新领地 三居 可按揭</span>
                            <span>3室2厅2卫 128.80㎡</span>
                        </div>
                    </div>
                    <div class="blo5-item">
                        <a href="#"><img src="../assets/img/index5/index5-3.jpg"></a>
                        <div class="price-tag">100万</div>
                        <div class="blo5-foot">
                            <span>北辰新领地 三居 可按揭</span>
                            <span>3室2厅2卫 128.80㎡</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="index-ad">
            <a href="#">
                <div class="ad-block">
                    广告位
                </div>
            </a>
        </div>
        <div class="content6">
            <div class="block6">
                <div class="blo6-title">
                    精品租房
                    <a href="#"><span>更多租房...> </span></a>
                </div>
                <div class="blo6-span">与其等待，不如坐享繁华...</div>
                <div class="blo6-img">
                    <div class="blo6-item">
                        <a href="#"><img src="../assets/img/index6/index6-1.png"></a>
                        <div class="blo6-foot">
                            <div class="foot-6">北辰新领地 三居 可按揭</div>
                            <div class="foot-6">
                                <span class="fleft">3室2厅2卫 128.80㎡</span>
                                <span class="fright">1100元/月</span>
                            </div>
                        </div>
                    </div>
                    <div class="blo6-item">
                        <a href="#"><img src="../assets/img/index6/index6-2.png"></a>
                        <div class="blo6-foot">
                            <div class="foot-6">北辰新领地 三居 可按揭</div>
                            <div class="foot-6">
                                <span class="fleft">3室2厅2卫 128.80㎡</span>
                                <span class="fright">1100元/月</span>
                            </div>
                        </div>
                    </div>
                    <div class="blo6-item">
                        <a href="#"><img src="../assets/img/index6/index6-3.png"></a>
                        <div class="blo6-foot">
                            <div class="foot-6">北辰新领地 三居 可按揭</div>
                            <div class="foot-6">
                                <span class="fleft">3室2厅2卫 128.80㎡</span>
                                <span class="fright">1100元/月</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from '~/plugins/axios';
    import wordSwiper from '~/components/wordSwiper1';

    export default {
        components:{
            wordSwiper
        },
        data(){
            return{
                swiperOption:{},
                selectedIndex: 0,
                placeholderText: "输入小区名查找二手房"
            }
        },
        watch:{
            selectedIndex(newValue,oldValue){
                switch (newValue) {
                    case 0:
                        this.placeholderText = "输入小区名查找二手房";
                        break;
                    case 1:
                        this.placeholderText = "输入楼盘名进行搜索";
                        break;
                    case 2:
                        this.placeholderText = "输入小区名可以查找出租的房屋";
                        break;
                    case 3:
                        this.placeholderText = "输入小区名搜索学区房";
                        break;
                    case 4:
                        this.placeholderText = "输入小区名找小区";
                        break;
                }
            }
        },
        async asyncData() {
            let {data} = await axios.get('/api/users')
            return {users: data}
        },
        head() {
            return {
                title: 'Users'
            }
        },
        directives:{
            banner(el,binding,vnode){
                function setBanner(){
                    let bannerHeight = (document.documentElement.clientHeight || document.body.clientHeight) - 100;
                    let bannerWidth = document.documentElement.clientWidth || document.body.clientWidth;
                    el.style.width = bannerWidth + 'px';
                    el.style.height = bannerHeight + 'px';

                    let bannerRate = bannerWidth/bannerHeight;
                    let imgArr = el.querySelectorAll('img');
                    imgArr.forEach(item =>{
                        let imgHeight = item.offsetHeight;
                        let imgWidth = item.offsetWidth;
                        let imgRate = imgWidth/imgHeight;

                        if(bannerRate>imgRate){
                            item.style.width = bannerWidth + "px";
                            item.style.height = "auto";
                            item.style.marginTop = -(item.offsetHeight-bannerHeight)/2 + "px";
                        }else{
                            item.style.height = bannerHeight + "px";
                            item.style.width = "auto";
                            item.style.marginLeft = -(item.offsetWidth-bannerWidth)/2 + "px";
                        }
                    })
                }
                setBanner();
                window.onresize=setBanner;
            }
        }
    }
</script>

<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    .container {
        width: 100%;
        height: auto;
        background: #fff;
    }
    /*轮播图*/
    .slide-img{
        display: block;
        width: 100%;
        opacity: 0.7;
        cursor: pointer;
    }
    .content1-search{
        background: #000;
    }
    /*搜索框*/
    .content1-search{
        position: relative;
        .search-box{
            position: absolute;
            bottom: 42px;
            left: 140px;
            z-index: 2;
            .links{
                width: 1100px;
                height: 48px;
                margin-bottom: 10px;
                .link-item{
                    padding: 17px;
                    color: #fff;
                    font-size: 16px;
                    cursor: pointer;
                    list-style-type: none;
                    position: relative;
                }
                .link-item:first-child{
                    padding-left: 0;
                }
                .active{
                    font-size: 17px;
                    font-weight: 600;
                }
                .active::after{
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: -2px;
                    left: 50%;
                    transform: translateX(-50%);
                    border: 10px solid transparent;
                    border-bottom: 10px solid #fff;
                }
            }
            .search-bottom{
                width: 1100px;
                height: 60px;
                margin-bottom: 70px;
                input{
                    width: 746px;
                    height: 56px;
                    background: #fff;
                }
                .searchBtn{
                    width: 160px;
                    height: 60px;
                    line-height: 60px;
                    background: #c30d23;
                    color: #fff;
                    font-size: 16px;
                    text-align: center;
                    cursor: pointer;
                    border-radius: 3px;
                }
                .searchMap{
                    width: 180px;
                    height: 60px;
                    line-height: 60px;
                    color: #fff;
                    text-align: center;
                    background: #5f1985;
                    cursor: pointer;
                    border-radius: 3px;
                    img{
                        width: 20px;
                        height: 20px;
                        margin-right: 10px;
                        margin-bottom: -4px;
                    }
                }
            }
        }
    }
    .content1-search{
        position: relative;
        .touTiao{
            position: absolute;
            left: 140px;
            bottom: 10px;
            width: 1100px;
            height: 30px;
            z-index: 2;
            .scrollBox{
                height:20px;
                width: 170px;
                padding: 0 10px;
                overflow: hidden;
            }
            .scrollBox ul{
                padding-left: 0;
                list-style: none;
                animation-name: go;
                animation-duration: 4s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                color: #fff;
                font-size: 16px;
            }
            /*<!--@keyframes go {-->*/
                /*<!--0% {-->*/
                    /*<!--transform: translateY(0);-->*/
                /*<!--}-->*/
                /*<!--25%,50%{-->*/
                    /*<!--transform: translateY(-20px);-->*/
                /*<!--}-->*/
                /*<!--75%,100% {-->*/
                    /*<!--transform: translateY(-40px);-->*/
                /*<!--}-->*/
            /*<!--}-->*/
        }
    }


    a{
        text-decoration: none;
    }
    .content2{
        width: 100%;
        height: 252px;
        .block2{
            width: 1080px;
            height: 162px;
            margin: 45px auto;
            .item{
                float: left;
                width: 101px;
                margin: 0 84px;
                .item-img img{
                    width: 90px;
                    height: 92px;
                }
                .item-ti1{
                    font-size: 20px;
                    color: #333;
                    margin-top: 20px;
                    margin-bottom: 8px;
                    text-align: center;
                }
                .item-ti2{
                    font-size: 14px;
                    color: #666;
                    text-align: center;
                }
            }
        }
    }
    .content3{
        width: 100%;
        height: 273px;
        margin-top: -45px;
        .block3{
            width: 1100px;
            height: 225px;
            margin: 0 auto 48px;
            display: flex;
            justify-content: space-between;
            .item3{
                width: 300px;
                height: 225px;
            }
        }
    }
    .content4{
        width: 100%;
        height: 414px;
        .block4{
            width: 1100px;
            height: 369px;
            margin: 0 auto 45px;
            .blo4-title{
                height: 34px;
                font-size: 30px;
                font-weight: bolder;
                color: #333;
                margin-bottom: 16px;
                a span{
                    float: right;
                    font-size: 16px;
                    font-weight: 400;
                    color: #999;
                }
            }
            .blo4-span{
                height: 18px;
                color: #666;
                margin-bottom: 40px;
            }
            .blo4-img{
                display: flex;
                justify-content: space-between;
                height: 257px;
                .blo4-item{
                    position: relative;
                    width: 342px;
                    height: 257px;
                    overflow: hidden;
                    img{
                        width: 342px;
                        height: 257px;
                        transition: all 1s ease 0s;
                    }
                    img:hover{
                        transform: scale(1.12);
                    }
                    .blo4-foot{
                        width: 320px;
                        height: 28px;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        color: #fff;
                        font-size: 16px;
                        background: rgba(0,0,0,.5);
                        padding: 5px 10px;
                        .blo4-fleft{float: left}
                        .blo4-fright{float: right}
                    }
                }
            }
        }
    }
    .content5{
        width: 100%;
        height: 489px;
        .block5{
            width: 1100px;
            height: 369px;
            margin: 0 auto 45px;
            .blo5-title{
                height: 34px;
                font-size: 30px;
                font-weight: bolder;
                color: #333;
                margin-bottom: 16px;
                a span{
                    float: right;
                    font-size: 16px;
                    font-weight: 400;
                    color: #777;
                }
            }
            .blo5-span{
                height: 18px;
                color: #666;
                margin-bottom: 40px;
            }
            .blo5-img{
                display: flex;
                justify-content: space-between;
                height: 257px;
                .blo5-item{
                    position: relative;
                    a{
                        display: block;
                        position: relative;
                        width: 342px;
                        height: 257px;
                        overflow: hidden;
                        img{
                            width: 342px;
                            height: 257px;
                            transition: all 1s ease 0s;
                        }
                        img:hover{
                            transform: scale(1.12);
                        }
                    }
                    .price-tag{
                        position: absolute;
                        left: 0;
                        top: 10px;
                        background: url("../assets/img/pricetag.png");
                        z-index: 2;
                        min-width: 70px;
                        height: 50px;
                        line-height: 50px;
                        padding-left: 10px;
                        padding-right: 20px;
                        font-size: 20px;
                        color: #fff;
                    }
                    .blo5-foot{
                        width: 342px;
                        height: 82px;
                        margin: 20px 0;
                        font-size: 16px;
                        color: #333;
                        span{
                            display: block;
                            width: 342px;
                            margin-bottom: 13px;
                        }
                    }
                }
            }
        }
    }
    .index-ad{
        width: 100%;
        height: 155px;
        margin-bottom: 54px;
        .ad-block{
            width: 665px;
            height: 155px;
            margin: 0 auto;
            background: url("../assets/img/index-ad.png") no-repeat;
            background-size: 100% 100%;
            font-size: 28px;
            font-weight: 600;
            line-height: 155px;
        }
    }
    .content6{
        width: 100%;
        height: 489px;
        .block6{
            width: 1100px;
            height: 369px;
            margin: 0 auto 45px;
            .blo6-title{
                height: 34px;
                font-size: 30px;
                font-weight: bolder;
                color: #333;
                margin-bottom: 16px;
                a span{
                    float: right;
                    font-size: 16px;
                    font-weight: 400;
                    color: #777;
                }
            }
            .blo6-span{
                height: 18px;
                color: #666;
                margin-bottom: 40px;
            }
            .blo6-img{
                display: flex;
                justify-content: space-between;
                height: 257px;
                .blo6-item{
                    position: relative;
                    a{
                        display: block;
                        position: relative;
                        width: 342px;
                        height: 257px;
                        overflow: hidden;
                        img{
                            width: 342px;
                            height: 257px;
                            transition: all 1s ease 0s;
                        }
                        img:hover{
                            transform: scale(1.12);
                        }
                    }
                    .blo6-foot{
                        width: 342px;
                        height: 82px;
                        margin: 20px 0;
                        font-size: 16px;
                        color: #333;
                        .foot-6{
                            display: block;
                            width: 342px;
                            margin-bottom: 13px;
                            .fleft{float: left;}
                            .fright{
                                float: right;
                                color: #c30d23;
                            }
                        }

                    }
                }
            }
        }
    }
</style>
