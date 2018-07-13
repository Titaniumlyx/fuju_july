<template>
    <div class="storeListContainer">
        <!--顶部+搜索框-->
        <div class="directive">
            <span class="fll"><a href="javascript:">福居网></a></span>
            <span class="fll zi2"><a href="javascript:">找门店</a></span>
        </div>
        <div class="searchBlock">
            <input class="fll input" type="text" placeholder="搜索">
            <input class="searchBtn fll" type="button" value="搜索">
            <div class="searchMap flr">
                <img src="../../assets/img/mapSearch.png">
                地图找房
            </div>
        </div>
        <!--区域复选框-->
        <div class="area choice clearfix">
            <span class="choice-tit fll">区域</span>
            <div class="choice-list fll">
                <el-checkbox v-model="isChecked.r_id" @change="handleClear('r_id')" class="item">不限</el-checkbox>
                <el-checkbox-group v-model="formData.r_id">
                    <el-checkbox :label="item" v-for="item in fillData2.r_idData" :key="item.id" @change="handleChange('r_id')" class="item">{{item.title}}</el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
        <!--筛选-->
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
        <!--门店列表区-->
        <div class="listAreaCon">
            <div class="common clearfix">
                共找到 <span>{{houseCount}}</span> 个门店
            </div>
            <div class="listArea" v-for="item in houseArr">
                <div class="list clearfix">
                    <a href="javascript:" class="details">
                        <div class="store fll">{{item.name}}</div>
                        <div class="renting fll one">
                            在租房源 <span>{{item.retaling}}</span>套
                        </div>
                        <div class="selling fll one">
                            在售二手房 <span>{{item.useding}}</span>套
                        </div>
                        <div class="phone fll one">
                            电话&nbsp;:&nbsp;<span>{{item.f_phone}}转{{item.mobile}}</span>
                        </div>
                        <div class="address fll one">
                            地址&nbsp;:&nbsp;<span>{{item.address}}</span>
                        </div>
                    </a>
                    <a href="javascript:" class="flr mapLocation">
                        <i class="iconfont icon-ditudingwei"></i>一键地图
                    </a>
                </div>
            </div>
            <div class="moreStore" @click="getMoreStore" v-if="this.houseCount>10">
                加载更多门店
            </div>
            <div class="moreStore" v-if="this.houseCount<=10">
                暂无更多门店
            </div>
        </div>

    </div>
</template>

<script>
    import axios from '~/plugins/axios'
    import api from '~/mainApi/index'

    export default {
        name: "storeList",
        layout: "default",
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
                formData:{
                    r_id:[],
                },
                isChecked:{
                    r_id:true
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
        methods:{
            getMoreStore(){
                this.params.page_num++;
                let formData = this.formData;
                let params = {...this.params};
                for(let key in formData){
                    if(formData[key] instanceof Array && formData[key].length>0){
                        params[key] = formData[key].map(item => item.id)
                    }
                }
                axios.get(api.paramToUrl(api.Storelists,params)).then(res =>{
                    console.log(res);
                    this.houseArr = [...this.houseArr,...res.data.data];
                })
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
                axios.get(api.paramToUrl(api.Storelists, params)).then(res => {
                    // console.log(res);
                    this.houseCount = res.data.count;
                    this.houseArr = res.data.data;
                    loading.close();
                }).catch(err => {
                    loading.close();
                })
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
    .storeListContainer{
        border-top: 1px solid #ccc;
        width: 1100px;
        margin: 30px auto 0;
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
                width: 725px;
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
                display: block;
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
        .listAreaCon{
            padding-top: 80px;
            border-top: 1px solid #ccc;
            .common{
                font-size: 30px;
                color: #333;
                span{
                    color: #c30d23;
                }
            }
            .listArea{
                margin-top: 10px;
                .list{
                    padding: 20px 0;
                    border-bottom: 1px solid #ccc;
                    .details{
                        .store{
                            font-size: 20px;
                            color: #333;
                            width: 145px;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                        .one{
                            width: 140px;
                            font-size: 14px;
                            color: #333;
                            margin-left: 20px;
                            margin-top: 7px;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            word-break: keep-all;
                            white-space: nowrap;
                            span{
                                color: #c30d23;
                            }
                        }
                        .phone{
                            width: 255px;
                        }
                        .address{
                            width: 220px;
                            margin-left: 10px;
                            span{color: #333;}
                        }
                    }
                    .mapLocation{
                        color: #c30d23;
                        display: block;
                        padding: 6px 16px;
                        border: 1px solid #c30d23;
                        margin-top: -3px;
                        border-radius: 6px;
                        .iconfont{
                            font-size: 22px;
                            margin-right: 3px;
                        }
                    }
                }
            }
            .moreStore{
                margin-top: 40px;
                margin-bottom: 80px;
                color: #333;
                border: 1px solid #ccc;
                border-radius: 6px;
                text-align: center;
                padding: 22px 0;
                cursor: pointer;
            }
        }
    }
</style>