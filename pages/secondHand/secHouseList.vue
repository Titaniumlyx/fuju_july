<template>
    <div class="secondContain">
        <div class="secBlock" v-trans>
            <div class="directive">
                <span class="fll"><a href="#">福居网></a></span>
                <span class="fll zi2"><a href="#">二手房</a></span>
            </div>
            <div class="searchBlock">
                <input class="fll input" type="text" placeholder="搜索">
                <input class="searchBtn fll" type="button" value="搜索"></input>
            </div>

            <div class="area choice clearfix">
                <span class="choice-tit fll">区域</span>
                <div class="choice-list fll">
                    <el-checkbox-group v-model="checkList" class="checkLists">
                        <el-checkbox label="不限" style="margin-bottom: 20px; margin-left: 30px;"></el-checkbox>
                        <el-checkbox label="金桥开发区"></el-checkbox>
                        <el-checkbox label="如意开发区"></el-checkbox>
                        <el-checkbox label="玉泉区"></el-checkbox>
                        <el-checkbox label="回民区"></el-checkbox>
                        <el-checkbox label="赛罕区"></el-checkbox>
                        <el-checkbox label="新城区"></el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
            <div class="choice clearfix">
                <span class="choice-tit fll">价格</span>
                <div class="choice-list fll clearfix">
                    <el-checkbox-group v-model="checkList" class="checkLists">
                        <el-checkbox label="不限" style="margin-bottom: 20px; margin-left: 30px;"></el-checkbox>
                        <el-checkbox label="30万以下"></el-checkbox>
                        <el-checkbox label="30-40万"></el-checkbox>
                        <el-checkbox label="40-50万"></el-checkbox>
                        <el-checkbox label="50万以上"></el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
            <div class="section">
                <input type="text">
                <b>&nbsp;-&nbsp;</b>
                <input type="text">&nbsp;万
                <div class="okBtn" style="display: inline-block">确定</div>
            </div>
            <div class="choice clearfix">
                <span class="choice-tit fll">户型</span>
                <div class="choice-list fll clearfix">
                    <el-checkbox-group v-model="checkList" class="checkLists">
                        <el-checkbox label="一室" style="margin-bottom: 20px; margin-left: 30px;"></el-checkbox>
                        <el-checkbox label="两室"></el-checkbox>
                        <el-checkbox label="三室"></el-checkbox>
                        <el-checkbox label="四室"></el-checkbox>
                        <el-checkbox label="五室"></el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
            <div class="choiceMiddle">
                <div style="height: 0;" class="middleBox" id="box">
                    <slot name="middle">
                        <div class="choice clearfix">
                            <span class="choice-tit fll">类型</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox-group v-model="checkList" class="checkLists">
                                    <el-checkbox label="平层" style="margin-bottom: 20px; margin-left: 30px;"></el-checkbox>
                                    <el-checkbox label="复式"></el-checkbox>
                                    <el-checkbox label="跃层"></el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <div class="choice clearfix">
                            <span class="choice-tit fll">装修</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox-group v-model="checkList" class="checkLists">
                                    <el-checkbox label="毛坯" style="margin-bottom: 20px; margin-left: 30px;"></el-checkbox>
                                    <el-checkbox label="豪装"></el-checkbox>
                                    <el-checkbox label="精装"></el-checkbox>
                                    <el-checkbox label="简装"></el-checkbox>
                                    <el-checkbox label="中装"></el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <div class="choice clearfix">
                            <span class="choice-tit fll">朝向</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox-group v-model="checkList" class="checkLists">
                                    <el-checkbox label="东" style="margin-bottom: 20px; margin-left: 30px;"></el-checkbox>
                                    <el-checkbox label="西"></el-checkbox>
                                    <el-checkbox label="南"></el-checkbox>
                                    <el-checkbox label="北"></el-checkbox>
                                    <el-checkbox label="南北"></el-checkbox>
                                    <el-checkbox label="双南"></el-checkbox>
                                    <el-checkbox label="东南"></el-checkbox>
                                    <el-checkbox label="西南"></el-checkbox>
                                    <el-checkbox label="东北"></el-checkbox>
                                    <el-checkbox label="西北"></el-checkbox>
                                    <el-checkbox label="东西"></el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <div class="choice clearfix">
                            <span class="choice-tit fll">面积</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox-group v-model="checkList" class="checkLists">
                                    <el-checkbox label="不限" style="margin-bottom: 20px; margin-left: 30px;"></el-checkbox>
                                    <el-checkbox label="50平以下"></el-checkbox>
                                    <el-checkbox label="50-70平"></el-checkbox>
                                    <el-checkbox label="70-90平"></el-checkbox>
                                    <el-checkbox label="90平以上"></el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <div class="section">
                            <input type="text">
                            <b>&nbsp;-&nbsp;</b>
                            <input type="text">&nbsp;平
                            <div class="okBtn" style="display: inline-block">确定</div>
                        </div>
                        <div class="choice clearfix">
                            <span class="choice-tit fll">楼龄</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox-group v-model="checkList" class="checkLists">
                                    <el-checkbox label="不限" style="margin-bottom: 20px; margin-left: 30px;"></el-checkbox>
                                    <el-checkbox label="5年以内"></el-checkbox>
                                    <el-checkbox label="10年以内"></el-checkbox>
                                    <el-checkbox label="15年以内"></el-checkbox>
                                    <el-checkbox label="15年以上"></el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <div class="choice clearfix">
                            <span class="choice-tit fll">楼层</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox-group v-model="checkList" class="checkLists">
                                    <el-checkbox label="不限" style="margin-bottom: 20px; margin-left: 30px;"></el-checkbox>
                                    <el-checkbox label="底层"></el-checkbox>
                                    <el-checkbox label="低楼层"></el-checkbox>
                                    <el-checkbox label="中层"></el-checkbox>
                                    <el-checkbox label="中高层"></el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <div class="choice clearfix">
                            <span class="choice-tit fll">电梯</span>
                            <div class="choice-list fll clearfix">
                                <el-checkbox-group v-model="checkList" class="checkLists">
                                    <el-checkbox label="是" style="margin-bottom: 20px; margin-left: 30px;"></el-checkbox>
                                    <el-checkbox label="否"></el-checkbox>
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
                            <div class="block fll">
                                不限 <i class="iconfont icon-chahao flr"></i>
                            </div>
                            <div class="clear fll">
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
                        <el-button type="danger" plain class="btn1-item active">最新</el-button>
                        <el-button type="danger" plain class="btn1-item">房屋总价 <i class="iconfont icon-jiantou1-bottom"></i></el-button>
                        <el-button type="danger" plain class="btn1-item">房屋单价 <i class="iconfont icon-jiantou1-bottom"></i></el-button>
                        <el-button type="danger" plain class="btn1-item">房屋面积 <i class="iconfont icon-jiantou1-bottom"></i></el-button>
                    </el-row>
                </div>
                <div class="btns-choice">
                    <div class="choice clearfix">
                        <span class="choice-tit fll">筛选</span>
                        <div class="choice-list fll clearfix">
                            <el-checkbox-group v-model="checkList" class="checkLists">
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
                <span class="total">1010</span> 个
                <span class="region">呼和浩特</span>
                <span>二手房源</span>
            </div>
            <div class="houseLists">
                <div class="list_item clearfix">
                    <div class="list_left fll">
                        <a href="#"><img src="../../assets/img/water.jpg"></a>
                    </div>
                    <div class="list_center fll">
                        <div class="benefit">
                            <a href="#">关小学区房，满五唯一，适合陪读</a>
                        </div>
                        <div class="introduce word">
                            <span>水设院家属楼</span>|
                            <span>2室1厅1卫</span>|
                            <span>南北</span>
                        </div>
                        <div class="built word">
                            <span>中楼层/6</span>层|
                            <span>中装</span>
                        </div>
                        <div class="constructionTime word">
                            <span>1995</span>年建|
                            <span>多层</span>
                        </div>
                        <div class="howMuch word">
                            <span>0</span>人关注| 共
                            <span>0</span>次带看|
                            <span>今天发布</span>
                        </div>
                        <div class="label word"></div>
                    </div>
                    <div class="list_right flr">
                        <div class="price"><span>100</span>万</div>
                        <div class="unitPrice">单价 <span>100</span>元/平米</div>
                        <a href="#">关注</a>
                    </div>
                </div>
            </div>
            <div class="pageTool clearfix">
                <div class="pages flr">
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="10120">
                        <!--以上页数为实际总页数*10-->
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
        data(){
            return{
                checkList:['不限'],
                isShow: false,
                fillData:{
                    total_priceData:[
                        {
                            title:"不限",
                            id:'0-99999'
                        },
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
                    ]
                },
            }
        },
        created(){
            // console.log(this.fillData2);
        },
        methods: {
            handleShow(e){
                this.isShow = e;
            }
        },
        directives:{
            trans:{
                inserted(el,binding,vnode){
                    let box = el.querySelector('#box');
                    let btn1 = el.querySelector('#btn1');
                    let btn2 = el.querySelector('#btn2');
                    btn1.onclick = function(){
                        console.log(1);
                        box.style.height = "auto";
                        let startHeight = 0;
                        let targetHeight = getComputedStyle(box).height;
                        box.style.height = startHeight;
                        box.offsetWidth;
                        box.style.height = targetHeight;
                    };
                    btn2.onclick = function(){
                        console.log(2);
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
                    .checkLists{
                        width: 608px;
                    }
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
                    height: 38px;
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