<template>
    <div class="secondContain">
        <div class="secBlock" v-trans>
            <div class="directive">
                <span class="fll"><a href="#">福居网></a></span>
                <span class="fll zi2"><a href="#">二手房</a></span>
            </div>
            <div class="searchBlock">
                <input class="fll input" type="text" placeholder="搜索">
                <input class="searchBtn fll" type="button" value="搜索">
            </div>

            <div class="area choice clearfix">
                <span class="choice-tit fll">区域</span>
                <div class="choice-list fll">
                    <el-checkbox v-model="isChecked.r_id" @change="handleClear('r_id')" class="item">不限</el-checkbox>
                    <el-checkbox-group v-model="formData.r_id">
                        <el-checkbox :label="item" v-for="item in fillData2.r_idData" :key="item.id" @change="handleChange('r_id')" class="item">{{item.title}}</el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
            <div class="choice clearfix">
                <span class="choice-tit fll">价格</span>
                <div class="choice-list fll priceLi">
                    <el-checkbox v-model="isChecked.total_price" @change="handleClear('total_price')" class="item">不限</el-checkbox>
                    <el-checkbox-group v-model="formData.total_price">
                        <el-checkbox :label="item" class="item" v-for="item in fillData.total_price" :key="item.id" @change="handleChange('total_price')">{{item.title}}</el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
            <div class="section">
                <input type="text" v-model="formData.minPrice">
                <b>&nbsp;-&nbsp;</b>
                <input type="text" v-model="formData.maxPrice">&nbsp;万
                <div class="okBtn" style="display: inline-block">确定</div>
            </div>
            <div class="choice clearfix">
                <span class="choice-tit fll">户型</span>
                <div class="choice-list fll clearfix">
                    <el-checkbox-group v-model="formData.bedroom">
                        <el-checkbox v-for="item in fillData.bedroom" :label="item" :key="item.id" class="item">{{item.title}}</el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>

            <div class="choiceMiddle">
                <div style="height: 0;" class="middleBox" id="box">
                    <slot name="middle">
                        <div class="choice clearfix">
                            <span class="choice-tit fll">类型</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox-group v-model="formData.type">
                                    <el-checkbox :label="item" :key="item.id" v-for="item in fillData.type" class="item">{{item.title}}</el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <div class="choice clearfix">
                            <span class="choice-tit fll">装修</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox-group v-model="formData.decoration">
                                    <el-checkbox :label="item" :key="item.id" v-for="item in fillData.decoration" class="item">{{item.title}}</el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <div class="choice clearfix">
                            <span class="choice-tit fll">朝向</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox-group v-model="formData.direction">
                                    <el-checkbox :label="item" :key="item.id" v-for="item in fillData.direction" class="item">{{item.title}}</el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <div class="choice clearfix">
                            <span class="choice-tit fll">面积</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox v-model="isChecked.built_area" @change="handleClear('built_area')" class="item">不限</el-checkbox>
                                <el-checkbox-group v-model="formData.built_area">
                                    <el-checkbox :label="item" :key="item.id" v-for="item in fillData.built_area" class="item" @change="handleChange('built_area')" >{{item.title}}</el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <div class="choice clearfix">
                            <span class="choice-tit fll">楼龄</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox v-model="isChecked.age" @change="handleClear('age')" class="item">不限</el-checkbox>
                                <el-checkbox-group v-model="formData.age">
                                    <el-checkbox :label="item" :key="item.id" v-for="item in fillData.age" class="item" @change="handleChange('age')" >{{item.title}}</el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <div class="section">
                            <input type="text"v-model="formData.minCustom_built_area" >
                            <b>&nbsp;-&nbsp;</b>
                            <input type="text" v-model="formData.maxCustom_built_area">&nbsp;平
                            <div class="okBtn" style="display: inline-block">确定</div>
                        </div>
                        <div class="choice clearfix">
                            <span class="choice-tit fll">楼层</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox v-model="isChecked.floor_type" @change="handleClear('floor_type')" class="item">不限</el-checkbox>
                                <el-checkbox-group v-model="formData.floor_type">
                                    <el-checkbox :label="item" :key="item.id" v-for="item in fillData.floor_type" class="item" @change="handleChange('floor_type')">{{item.title}}</el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <div class="choice clearfix">
                            <span class="choice-tit fll">电梯</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox-group v-model="formData.dianti">
                                    <el-checkbox :label="item" :key="item.id" v-for="item in fillData.dianti" class="item">{{item.title}}</el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <div class="other">
                            <span class="other-tit fll">其他</span>
                            <div class="other-content fll">
                                <input type="text" placeholder="在结果中搜索">
                                <div class="okBtn" style="display: inline-block">确定</div>
                            </div>
                        </div>
                    </slot>
                </div>
            </div>

            <div class="choiceFoot">
                <slot name="foot">
                    <div class="choiceClass">
                        <span class="choice-tit fll">筛选分类</span>
                        <div class="choice-content fll">
                            <div class="block fll" v-for="item in selectedData" @click="handleReduce(item)">
                                {{item.title}} <i class="iconfont icon-chahao flr"></i>
                            </div>
                            <div class="clear fll" @click="handleClearAll">
                                <i class="iconfont icon-lajitong"></i> 清除全部
                            </div>
                        </div>
                    </div>
                </slot>
            </div>
            <div class="choiceMore">
                <div class="moreBlock clearfix">
                    <!--{{isShow?"收起选项":"更多选项"}}-->
                    <!--<i class="iconfont icon-jiantoushang" v-show="isShow==1"></i>-->
                    <!--<i class="iconfont icon-jiantou6" v-show="isShow==0"></i>-->
                    <span v-show="!isShow" @click="handleShow(true)" id="btn1">更多选项<i class="iconfont icon-jiantou6"></i></span>
                    <span v-show="isShow" @click="handleShow(false)"  id="btn2">收起选项<i class="iconfont icon-jiantoushang"></i></span>
                </div>
            </div>

            <div class="bigBtns">
                <div class="btns1">
                    <el-row>
                        <el-button plain class="btn1-item active">最新</el-button>
                        <el-button plain class="btn1-item">房屋总价 <i class="iconfont icon-jiantou1-bottom"></i></el-button>
                        <el-button plain class="btn1-item">房屋单价 <i class="iconfont icon-jiantou1-bottom"></i></el-button>
                        <el-button plain class="btn1-item">房屋面积 <i class="iconfont icon-jiantou1-bottom"></i></el-button>
                    </el-row>
                </div>
                <div class="btns-choice">
                    <div class="choice clearfix">
                        <span class="choice-tit fll">筛选</span>
                        <div class="choice-list fll clearfix">
                            <el-checkbox-group class="checkLists">
                                <el-checkbox label="两年内" style="margin-bottom: 20px; margin-left: 30px;"></el-checkbox>
                                <el-checkbox label="满两年"></el-checkbox>
                                <el-checkbox label="满五年"></el-checkbox>
                                <el-checkbox label="随时看房"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                </div>
            </div>
            <div class="findHouse">
                共找到
                <span class="total">{{houseCount}}</span> 个
                <span class="region">呼和浩特</span>
                <span>二手房源</span>
            </div>
            <div class="houseLists" v-for="item in houseArr">
                <div class="list_item clearfix">
                    <div class="list_left fll">
                        <a href="/secondHand/secHouseDetails"><img :src="'http://www.fooju.cn'+ item.pic"></a>
                    </div>
                    <div class="list_center fll">
                        <div class="benefit">
                            <a href="/secondHand/secHouseDetails">{{item.title}}</a>
                        </div>
                        <div class="introduce word">
                            <span>{{item.village}}</span>|
                            <span>{{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫</span>|
                            <span>{{item.direction}}</span>
                            <span>{{item.region}}|</span>
                            <span>{{item.built_area}}平</span>
                        </div>
                        <div class="built word">
                            <span>{{item.floor}}/{{item.floor_totle}}</span>层|
                            <span>{{item.decoration}}</span>
                        </div>
                        <div class="constructionTime word">
                            <span>{{item.age}}</span>年建|
                            <span>{{item.type}}</span>
                        </div>
                        <div class="howMuch word">
                            <span>{{item.guanzhu_num}}</span>人关注| 共
                            <span>{{item.daikan_num}}</span>次带看|
                            <span>今天发布</span>
                        </div>
                        <div class="label word">
                            <span v-for="lis in item.lable" class="labelItem fll">{{lis.name}}</span>
                        </div>
                    </div>
                    <div class="list_right flr">
                        <div class="price"><span>{{item.total_price}}</span>万</div>
                        <div class="unitPrice">单价 <span>{{item.unit_price}}</span>元/平米</div>
                        <a href="#">关注</a>
                    </div>
                </div>
            </div>
            <div class="pageTool clearfix">
                <div class="pages flr">
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="houseCount" @current-change="currentPage">
                    </el-pagination>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from '~/plugins/axios'
    import api from '~/mainApi/index'

    export default {
        name: "secHouseList",
        layout: "secondHanBuju",
        async asyncData(){
            let r_idData = await axios.get(api.paramToUrl(api.regionLists,{city:"呼和浩特"}));
            r_idData.data.data = r_idData.data.data.map(item =>{
                item.title = item.area;
                return item;
            });
            return {
                fillData2:{
                    r_idData:r_idData.data.data
                },
            }
        },
        data(){
            return{
                isShow: false,
                formData:{
                    r_id:[],
                    total_price:[],
                    minPrice:[],
                    maxPrice:[],
                    bedroom:[],
                    decoration:[],
                    direction:[],
                    built_area:[],
                    minCustom_built_area:'',
                    maxCustom_built_area:'',
                    age:[],
                    dianti:[],
                    floor_type:[],
                    type:[]
                },
                fillData: {
                    total_price: [
                        {title: "30万以下", id: '0-30'},
                        {title: "30-40万",id: '30-40'},
                        {title: "40-50万", id: '40-50'},
                        {title: "50万以上", id: '50-99999'}
                    ],
                    bedroom: [
                        {title: "一室", id: 1},
                        {title: "两室", id: 2},
                        {title: "三室", id: 3},
                        {title: "四室", id: 4},
                        {title: "五室", id: 5}
                    ],
                    type: [
                        {title: '平层', id: '平层'},
                        {title: '复式', id: '复式'},
                        {title: '跃层', id: '跃层'}
                    ],
                    decoration: [
                        {title: '毛坯', id: '毛坯'},
                        {title: '豪装', id: '豪装'},
                        {title: '精装', id: '精装'},
                        {title: '简装', id: '简装'},
                        {title: '中装', id: '中装'}
                    ],
                    direction: [
                        {title: '东', id: '东'},
                        {title: '西', id: '西'},
                        {title: '南', id: '南'},
                        {title: '北', id: '北'},
                        {title: '南北', id: '南北'},
                        {title: '双南', id: '双南'},
                        {title: '西南', id: '西南'},
                        {title: '东北', id: '东北'},
                        {title: '东南', id: '东南'},
                        {title: '西北', id: '西北'},
                        {title: '东西', id: '东西'}
                    ],
                    built_area: [
                        {title: '50平以下', id: '1-50'},
                        {title: '50-70平', id: '50-70'},
                        {title: '70-90平', id: '70-90'},
                        {title: '90以上', id: '90-9999999'}
                    ],
                    dianti: [
                        {id: 0, title: '是'},
                        {id: 1, title: '否'}
                        ],
                    age: [
                        {id: '1-5', title: '5年以内'},
                        {id: '1-10', title: '10年以内'},
                        {id: '1-15', title: '15年以内'},
                        {id: '15-9999', title: '15年以上'}
                    ],
                    floor_type: [
                        {id: '底层', title: "底层"},
                        {id: '低楼层', title: "低楼层"},
                        {id: '中层', title: "中层"},
                        {id: '中高层', title: "中高层"},
                    ]
                },
                isChecked:{
                    r_id: true,
                    total_price: true,
                    built_area: true,
                    age: true,
                    floor_type: true
                },
                params:{
                    page_size: 10,
                    page_num: 1,
                    order: 1
                },
                houseCount: 0,
                houseArr: []
            }
        },
        methods: {
            handleShow(e){
                this.isShow = e;
            },
            handleClear(key){
                if(this.isChecked[key]){
                    this.formData[key].splice(0);
                }
            },
            handleChange(key){
                if(this.formData[key].length>0){
                    this.isChecked[key] = false;
                }else{
                    this.isChecked[key] = true;
                }
            },
            handleReduce(item){
                let index = this.formData[item._parentName].findIndex(val=>{
                    if(val.id == item.id){
                        return true;
                    }
                });
                this.formData[item._parentName].splice(index,1);
            },
            handleClearAll(){
                let formData = this.formData;
                for(let arr in formData){
                    if(formData[arr] instanceof Array){
                        formData[arr].splice(0);
                    }
                }
            },
            currentPage(val){
                // console.log(val);
                this.params.page_num = val;
                this.getData();
            },
            getData(){
                let formData = this.formData;
                let params = {...this.params};
                for(let key in formData){
                    if(formData[key] instanceof Array && formData[key].length>0){
                        params[key] = formData[key].map(item => item.id)
                    }
                }
                const loading = this.$loading({
                    lock: true,
                    text: '数据加载中...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0,0,0,.7)'
                });
                axios.get(api.paramToUrl(api.used_lists, params)).then(res => {
                    console.log(res);
                    this.houseCount = res.data.count;
                    this.houseArr = res.data.data;
                    loading.close();
                }).catch(err => {
                    loading.close();
                })
            }
        },
        computed: {
            selectedData(){
                let formData = this.formData;
                let allData = [];
                for(let key in formData){
                    if(formData[key] instanceof Array){
                        formData[key].forEach(item=>{
                            item._parentName = [key];
                            allData.push(item)
                        })
                    }
                }
                return allData;
            }
        },
        created(){
            console.log(this.fillData);
        },
        watch:{
            selectedData(){
                this.getData();
            }
        },
        mounted(){
            this.getData();
        },
        directives:{
            trans:{
                inserted(el,binding,vnode){
                    let box = el.querySelector('#box');
                    let btn1 = el.querySelector('#btn1');
                    let btn2 = el.querySelector('#btn2');
                    btn1.onclick = function(){
                        // console.log(1);
                        box.style.height = "auto";
                        let startHeight = 0;
                        let targetHeight = getComputedStyle(box).height;
                        box.style.height = startHeight;
                        box.offsetWidth;
                        box.style.height = targetHeight;
                    };
                    btn2.onclick = function(){
                        // console.log(2);
                        box.style.height = 0;
                    };
                }
            }
        }
    }
</script>

<style>
    .el-checkbox+.el-checkbox{
        margin-left: 30px;
        margin-bottom: 20px;
    }
    .el-checkbox{
        color: #999;
        font-size: 14px;
    }
    .el-checkbox__inner{
        width: 18px;
        height: 18px;
        border: 1px solid #ccc;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
        background: #c30d23;
        border: 1px solid #c30d23;
    }
    .el-checkbox__input.is-checked+.el-checkbox__label{
        color: #999;
    }


    .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
        border: 1px solid #ddd;
        border-radius: 3px;
        display: inline-block;
        padding: 1px 15px;
        margin-left: 5px;
        color: #333;
        font-size: 14px;
        background-color: #fff;
    }
    .el-pager li{
        height: 38px;
        line-height: 38px;
    }
    .el-pagination button, .el-pagination span:not([class*=suffix]){
        height: 38px;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background-color: #5f1985;
        color: #fff;
        border: 1px solid #5f1985;
    }
    .el-pagination.is-background .el-pager li:not(.disabled):hover{
        background-color: #5f1985;
        color: #fff;
        border: 1px solid #5f1985;
    }
</style>
<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    .secondContain{
        width: 100%;
        background: #fff;
        .secBlock{
            width: 1100px;
            margin: 0 auto;
            .directive{
                width: 1100px;
                height: 16px;
                margin-top: 20px;
                span a{
                    font-size: 14px;
                    color: #999;
                }
                .zi2{
                    margin-left: 4px;
                }
            }
            .searchBlock{
                width: 1100px;
                height: 60px;
                margin-top: 40px;
                .input{
                    width: 740px;
                    height: 58px;
                    background: #f4f4f4;
                    border: none;
                    padding-left: 20px;
                    font-size: 14px;
                    color: #999;
                    border-top-left-radius: 3px;
                    border-bottom-left-radius: 3px;
                }
                .searchBtn{
                    width: 160px;
                    height: 60px;
                    line-height: 60px;
                    background: #c30d23;
                    font-size: 16px;
                    color: #fff;
                    text-align: center;
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                    border: none;
                    cursor: pointer;
                }
            }
            .area{
                 padding-top: 40px;
             }
            .section{
                width: 800px;
                padding-right: 300px;
                overflow: hidden;
                color: #999;
                margin-left: 99px;
                margin-bottom: 20px;
                input{
                    width: 56px;
                    height: 22px;
                    font-size: 14px;
                    border: 1px solid #ccc;
                }
                .okBtn{
                    background: #c30d23;
                    color: #fff;
                    width: 55px;
                    height: 25px;
                    line-height: 25px;
                    font-size: 13px;
                    text-align: center;
                    border: none;
                    margin-left: 8px;
                    margin-top: 2px;
                    cursor: pointer;
                }
            }
            .other{
                width: 800px;
                padding-right: 300px;
                overflow: hidden;
                margin-bottom: 20px;
                font-size: 14px;
                color: #333;
                .other-content{
                    margin-left: 70px;
                    input{
                        width: 150px;
                        height: 22px;
                        font-size: 14px;
                        border: 1px solid #ccc;
                    }
                    .okBtn{
                        background: #c30d23;
                        color: #fff;
                        width: 55px;
                        height: 25px;
                        line-height: 25px;
                        font-size: 13px;
                        text-align: center;
                        border: none;
                        margin-left: 20px;
                        margin-top: 2px;
                        cursor: pointer;
                    }
                }
            }
            .choice{
                padding-right: 300px;
                .choice-tit{
                    font-size: 14px;
                    color: #333;
                    padding-right: 20px;
                }
                .choice-list{
                    margin-left: 20px;
                    .item{
                        float: left;
                        margin-bottom: 20px;
                        margin-left: 30px;
                    }
                }
                .priceLi{
                    width: 667px;
                }
            }
            .choiceMiddle{
                .middleBox{
                    transition: height ease .5s;
                    overflow: hidden;
                }
            }
            .choiceMore{
                width: 100%;
                height: 80px;
                .moreBlock{
                    width: 1100px;
                    height: 80px;
                    line-height: 80px;
                    text-align: center;
                    cursor: pointer;
                    font-size: 16px;
                    color: #bbb;
                    border-bottom: 1px solid #ccc;
                }
            }
            .choiceFoot{
                width: 100%;
                height: 38px;
                .choiceClass{
                    width: 800px;
                    padding-right: 300px;
                    .choice-tit{
                        font-size: 14px;
                        color: #333;
                        padding-right: 20px;
                        margin-top: 3px;
                    }
                    .choice-content{
                        width: 700px;
                        cursor: pointer;
                        margin-left: 20px;
                        .block{
                            text-align: center;
                            width: 110px;
                            height: 26px;
                            line-height: 26px;
                            border: 1px solid #ccc;
                            color: #c30d23;
                            font-size: 14px;
                            margin-right: 20px;
                            margin-bottom: 10px;
                            .icon-chahao{
                                background: #ccc;
                                color: #fff;
                                width: 26px;
                            }
                        }
                        .clear{
                            margin-left: 30px;
                            color: #666;
                            border: none;
                            font-size: 14px;
                            text-align: center;
                            width: 110px;
                            height: 26px;
                            line-height: 26px;
                            .icon-lajitong{
                                margin-right: 10px;
                                color: #666;
                            }
                        }
                    }
                }
            }
            .bigBtns{
                margin-top: 80px;
                .btns1{
                    height: 43px;
                    margin-bottom: 30px;
                    .btn1-item{
                        font-size: 18px;
                        color: #c30d23;
                        border: 1px solid #c30d23;
                        border-radius: 20px;
                        padding: 10px 20px;
                        background: #fff;
                        margin-right: 10px;
                    }
                    .active{
                        color: #fff;
                        background: #c30d23;
                    }
                    .btn1-item:hover{
                        color: #fff;
                        background: #c30d23;
                    }
                }
            }
            .findHouse{
                margin-top: 15px;
                font-size: 30px;
                color: #333;
                .total{
                    color: #c30d23;
                }
            }
            .houseLists{
                .list_item{
                    margin-top: 40px;
                    height: 217px;
                    .list_left{
                        img{
                            width: 285px;
                            height: 214px;
                        }
                    }
                    .list_center{
                        margin-left: 30px;
                        .benefit{
                            font-size: 20px;
                            color: #333;
                            margin-bottom: 30px;
                        }
                        .word{
                            font-size: 14px;
                            color: #666;
                            margin-top: 20px;
                        }
                        .label{
                            margin-top: 16px;
                            .labelItem{
                                margin-right: 6px;
                                display: inline-block;
                                width: 72px;
                                height: 22px;
                                line-height: 22px;
                                text-align: center;
                                background: #5f1985;
                                color: #fff;
                                border-radius: 5px;
                            }
                        }
                    }
                    .list_right{
                        text-align: right;
                        .price{
                            font-size: 20px;
                            color: #c30d23;
                            span{
                                font-size: 40px;
                            }
                        }
                        .unitPrice{
                            font-size: 14px;
                            color: #666;
                            margin-top: 20px;
                        }
                        a{
                            display: inline-block;
                            width: 100px;
                            height: 36px;
                            line-height: 36px;
                            text-align: center;
                            border: 1px solid #c30d23;
                            border-radius: 4px;
                            color: #c30d23;
                            font-size: 16px;
                            margin-top: 40px;
                        }
                    }
                }
            }
            .pageTool{
                height: 38px;
                margin-bottom: 70px;
                .pages{
                    margin-top: 40px;
                }
            }

        }
    }
</style>