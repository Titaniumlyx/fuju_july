<template>
    <div class="secondContain">
        <div class="secBlock" v-trans>
            <div class="directive">
                <span class="fll"><a href="#">福居网></a></span>
                <span class="fll zi2"><a href="#">租房</a></span>
            </div>
            <div class="searchBlock">
                <input class="fll input" type="text" placeholder="搜索">
                <input class="searchBtn fll" type="button" value="搜索"></input>
                <div class="searchMap flr">
                    <img src="../../assets/img/mapSearch.png">
                    地图找房
                </div>
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
                <span class="choice-tit fll">租金</span>
                <div class="choice-list fll priceLi">
                    <el-checkbox v-model="isChecked.rent" @change="handleClear('rent')" class="item">不限</el-checkbox>
                    <el-checkbox-group v-model="formData.rent">
                        <el-checkbox :label="item" class="item" v-for="item in fillData.rent" :key="item.id" @change="handleChange('rent')">{{item.title}}</el-checkbox>
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
                        <div class="choice clearfix">
                            <span class="choice-tit fll">方式</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox-group v-model="formData.style">
                                    <el-checkbox :label="item" :key="item.id" v-for="item in fillData.style" class="item">{{item.title}}</el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <div class="choice clearfix">
                            <span class="choice-tit fll">更多</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox-group v-model="formData.more">
                                    <el-checkbox :label="item" :key="item.id" v-for="item in fillData.more" class="item">{{item.title}}</el-checkbox>
                                </el-checkbox-group>
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
                        <el-button plain class="btn1-item">房屋租金 <i class="iconfont icon-jiantou1-bottom"></i></el-button>
                        <el-button plain class="btn1-item">房屋面积 <i class="iconfont icon-jiantou1-bottom"></i></el-button>
                    </el-row>
                </div>
            </div>
            <div class="findHouse">
                共找到
                <span class="total">{{houseCount}}</span> 套
                <span class="region">呼和浩特</span>
                <span>在租房源</span>
            </div>
            <div class="houseLists" v-for="item in houseArr">
                <div class="list_item clearfix">
                    <div class="list_left fll">
                        <a href="#"><img :src="'http://www.fooju.cn'+ item.pic"></a>
                    </div>
                    <div class="list_center fll">
                        <div class="benefit">
                            <a href="#">{{item.title}}</a>
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
                            具体地址: <span>{{item.address}}</span>
                        </div>
                        <div class="label word">
                            <span v-for="lis in item.lable" class="labelItem fll">{{lis.name}}</span>
                        </div>
                    </div>
                    <div class="list_right flr">
                        <div class="price"><span>{{item.rent}}</span>{{item.rent_type}}</div>
                        <div class="unitPrice"><span>{{item.edittime}}更新</span></div>
                        <div class="unitPrice"><span>&nbsp;&nbsp;&nbsp;浏览{{item.v_id}}次</span></div>
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
        name: "rentHouse",
        layout: "default",
        async asyncData(){
            let r_idData = await axios.get(api.paramToUrl(api.regionLists,{city:"呼和浩特"}))
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
        created(){
            console.log(this.fillData2.r_idData);
        },
        data(){
            return{
                isShow: false,
                formData:{
                    r_id:[],
                    rent:[],
                    minPrice:[],
                    maxPrice:[],
                    bedroom:[],
                    decoration:[],
                    direction:[],
                    built_area:[],
                    minCustom_built_area:'',
                    maxCustom_built_area:'',
                    floor_type:[],
                    dianti:[],
                    style:[],
                    more:[]
                },
                fillData:{
                    rent:[
                        {
                            title:"1000以下",
                            id:'0-1000'
                        },
                        {
                            title:"1000-1500",
                            id:'1000-1500'
                        },
                        {
                            title:"1500-2500",
                            id:'1500-2500'
                        },
                        {
                            title:"2500-3500",
                            id:'2500-3500'
                        },
                        {
                            title:"3500-4500",
                            id:'3500-4500'
                        },
                        {
                            title:"4500-5500",
                            id:'4500-5500'
                        }
                    ],
                    bedroom:[
                        {
                            title:"1",
                            id:'1'
                        },
                        {
                            title:"2",
                            id:'2'
                        },
                        {
                            title:"3",
                            id:'3'
                        },
                        {
                            title:"4",
                            id:'4'
                        },
                    ],
                    decoration:[
                        {
                            title:"毛坯",
                            id:'1'
                        },
                        {
                            title:"简易装修",
                            id:'2'
                        },
                        {
                            title:"精装修",
                            id:'3'
                        },
                        {
                            title:"豪华装修",
                            id:'4'
                        },
                    ],
                    direction:[
                        {
                            title:"东",
                            id:'1'
                        },
                        {
                            title:"南",
                            id:'2'
                        },
                        {
                            title:"西",
                            id:'3'
                        },
                        {
                            title:"北",
                            id:'4'
                        },
                    ],
                    built_area:[
                        {
                            title:"50平以下",
                            id:'0-50'
                        },
                        {
                            title:"50-70平",
                            id:'50-70'
                        },
                        {
                            title:"70-90平",
                            id:'70-90'
                        },
                        {
                            title:"90平以上",
                            id:'90-9999'
                        },
                    ],
                    floor_type:[
                        {
                            title:"底层",
                            id:'1'
                        },
                        {
                            title:"低楼层",
                            id:'2'
                        },
                        {
                            title:"中层",
                            id:'3'
                        },
                        {
                            title:"中高层",
                            id:'4'
                        },
                    ],
                    dianti:[
                        {
                            title:"是",
                            id:'1'
                        },
                        {
                            title:"否",
                            id:'2'
                        },
                    ],
                    style:[
                        {
                            title:"整租",
                            id:'1'
                        },
                        {
                            title:"合租",
                            id:'2'
                        },
                    ],
                    more:[
                        {
                            title:"近地铁",
                            id:'1'
                        },
                        {
                            title:"精装修",
                            id:'2'
                        },
                        {
                            title:"有采暖",
                            id:'3'
                        },
                        {
                            title:"独立卫生间",
                            id:'4'
                        },
                        {
                            title:"有阳台",
                            id:'5'
                        },
                        {
                            title:"随时看房",
                            id:'6'
                        },
                    ],
                },
                isChecked:{
                    r_id: true,
                    rent: true,
                    built_area: true,
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
                console.log(val);
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
                axios.get(api.paramToUrl(api.retal_lists, params)).then(res => {
                    this.houseCount = res.data.count;
                    this.houseArr = res.data.data;
                    console.log(res);
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
                    width: 726px;
                    height: 60px;
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
                /*width: 800px;*/
                /*padding-right: 300px;*/
                /*overflow: hidden;*/
                /*margin-bottom: 20px;*/
                /*font-size: 14px;*/
                /*color: #333;*/
                /*.other-content{*/
                /*margin-left: 70px;*/
                /*input{*/
                /*width: 150px;*/
                /*height: 22px;*/
                /*font-size: 14px;*/
                /*border: 1px solid #ccc;*/
                /*}*/
                /*.okBtn{*/
                /*background: #c30d23;*/
                /*color: #fff;*/
                /*width: 55px;*/
                /*height: 25px;*/
                /*line-height: 25px;*/
                /*font-size: 13px;*/
                /*text-align: center;*/
                /*border: none;*/
                /*margin-left: 20px;*/
                /*margin-top: 2px;*/
                /*cursor: pointer;*/
                /*}*/
                /*}*/
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