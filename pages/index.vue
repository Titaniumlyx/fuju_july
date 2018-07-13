<template>
    <div class="container">

        <div class="content1-search">
            <!--轮播图-->
            <div class="block1">
                <div v-swiper:mySwiper="swiperOption" v-banner id="banner">
                    <div class="swiper-wrapper">
                        <div style="overflow: hidden" class="swiper-slide" v-for="banner in banners">
                            <img :src="'http://www.fooju.cn/'+banner.picurl" class="slide-img">
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
                        <input type="text" class="fll" :placeholder="placeholderText" v-model="searchText">
                        <div class="searchBtn fll">搜索</div>
                        <div class="searchMap flr" v-if="selectedIndex<3">
                            <img src="../assets/img/mapSearch.png">
                            地图找房
                        </div>
                        <ul class="pre-search" v-show="isSearch">
                            <li v-for="item in searchData" @click="handleFind">{{item.title}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--福居头条-->
            <div class="touTiao">
                <div class="touTiao-img fll">
                    <img src="../assets/img/touTiao.png">
                </div>
                <div v-swiper:headlineSwiper="headlineOption" class="wordSwiper fll">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in headlineData">
                            <nuxt-link to="#" class="swiper-link" :key="index">{{item.title}}</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!--小图标-->
        <div class="content2">
            <div class="block2">
                <a href="/shouyeAbout/storeList" class="item">
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
        <!--大图标-->
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
        <!--精品新房-->
        <div class="content4">
            <div class="block4">
                <div class="blo4-title">
                    精品新房
                    <a href="#"><span>更多新房...> </span></a>
                </div>
                <div class="blo4-span">在这里寻觅一个新家...</div>
                <div class="blo4-img">
                    <div class="blo4-item" v-for="(item,index) in productData.new" v-if="index<3">
                        <a href="#"><img :src="'http://www.fooju.cn/'+item.pic"></a>
                        <div class="blo4-foot">
                            <span class="blo4-fleft">{{item.title}}</span>
                            <span class="blo4-fright">{{item.average_price}}元/平</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--二手优品-->
        <div class="content5">
            <div class="block5">
                <div class="blo5-title">
                    二手优品
                    <a href="#"><span>更多二手优房...> </span></a>
                </div>
                <div class="blo5-span">生活因为宽广，才会不断延伸...</div>
                <div class="blo5-img">
                    <div class="blo5-item" v-for="(item,index) in productData.used" v-if="index<3">
                        <a href="#"><img :src="'http://www.fooju.cn/'+item.pic"></a>
                        <div class="price-tag">{{item.total_price}}万</div>
                        <div class="blo5-foot">
                            <span>{{item.title}}</span>
                            <span>{{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫&nbsp;&nbsp;{{item.built_area}}m²</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--广告栏-->
        <div class="index-ad">
            <a href="#">
                <div class="ad-block">
                    广告位
                </div>
            </a>
        </div>
        <!--精品租房-->
        <div class="content6">
            <div class="block6">
                <div class="blo6-title">
                    精品租房
                    <a href="#"><span>更多租房...> </span></a>
                </div>
                <div class="blo6-span">与其等待，不如坐享繁华...</div>
                <div class="blo6-img">
                    <div class="blo6-item" v-for="(item,index) in productData.retal" v-if="index<3">
                        <a href="#"><img :src="'http://www.fooju.cn/'+item.pic"></a>
                        <div class="blo6-foot">
                            <div class="foot-6">{{item.title}}</div>
                            <div class="foot-6">
                                <span class="fleft">{{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫&nbsp;&nbsp;{{item.built_area}}m²</span>
                                <span class="fright">{{item.rent}}元/月</span>
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
    import api from '~/mainApi/index';

    export default {
        data(){
            return{
                swiperOption:{
                    autoplay: true
                },
                selectedIndex: 0,
                placeholderText: "输入小区名查找二手房",
                headlineOption: {
                    autoplay: true,
                    speed: 400,
                    direction: 'vertical',
                    loop: true
                },
                searchData: [],
                searchText: "",
                isSearch: false
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
            },
            searchText(val){
                if(val.trim() != ""){
                    this.isSearch = true;
                    axios.get(api.paramToUrl(api.used_lists,{title: val})).then(res =>{
                        this.searchData = res.data.data;
                    }).catch(err => {
                        console.log(err);
                    })
                }else{
                    this.isSearch = false;
                }
            }
        },
        async asyncData() {
            // let {data} = await axios.get('/api/users');
            let bannerData = await axios.get(api.paramToUrl(api.adLists,{type: 0,position: 0}));
            let res = await axios.get(api.regionListCopy);
            let headlineData = await axios.get(api.paramToUrl(api.encyTop,{page_num: 0,page_size: 10}));
            let features = await axios.get(api.linkData);
            let productData = await axios.get(api.paramToUrl(api.productRecommend,{plat: 2,page_num: 1,page_size: 3}));

            console.log(productData.data);
            return {
                // users: data,
                region: res.data.data,
                banners: bannerData.data.data,
                headlineData: headlineData.data.datas[0],
                features: features.data.datas,
                productData: productData.data
            };
        },
        mounted(){
            console.log('1');
        },
        head() {
            return {
                title: 'Users'
            }
        },
        methods: {
            handleFind(){
                console.log('查找');
            },
            // 点击按钮
            handleSearch(){
              let selected = this.selectedIndex;
              switch(selected){
                  case 0:
                      this.$router.push({name:"secHouseList",query:{q: this.searchText}})
              }
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
            .wordSwiper{
                margin-left: 15px;
                overflow: hidden;
                height: 30px;
                line-height: 30px;
                .swiper-wrapper{
                    .swiper-slide{
                        .swiper-link{
                            color: #fff;
                        }
                    }
                }
            }
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
