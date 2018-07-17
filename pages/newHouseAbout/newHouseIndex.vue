<template>
    <div class="newHouseCon">
        <banner>
            <div class="content-container">
                <div class="filter-box">
                    <div class="left-box">
                        <dy-select v-model="formData.area" title="区域">
                            <dy-option label="不限" value="0"></dy-option>
                            <dy-option label="金桥开发区" value="1"></dy-option>
                            <dy-option label="如意开发区" value="2"></dy-option>
                            <dy-option label="玉泉区" value="3"></dy-option>
                            <dy-option label="回民区" value="4"></dy-option>
                            <dy-option label="赛罕区" value="5"></dy-option>
                            <dy-option label="新城区" value="6"></dy-option>
                        </dy-select>
                        <dy-select v-model="formData.type" title="类型">
                            <dy-option label="高层" value="0"></dy-option>
                            <dy-option label="多层" value="1"></dy-option>
                            <dy-option label="小高层" value="2"></dy-option>
                            <dy-option label="联排别墅" value="3"></dy-option>
                            <dy-option label="双拼别墅" value="4"></dy-option>
                            <dy-option label="独栋别墅" value="5"></dy-option>
                            <dy-option label="商铺" value="6"></dy-option>
                        </dy-select>
                        <dy-select v-model="formData.houseProperty" title="房屋属性">
                            <dy-option label="待定" value="0"></dy-option>
                            <dy-option label="期房" value="1"></dy-option>
                            <dy-option label="现房" value="2"></dy-option>
                            <dy-option label="商品房" value="3"></dy-option>
                        </dy-select>
                        <dy-select v-model="formData.averagePrice" title="均价">
                            <dy-option label="不限" value="0"></dy-option>
                            <dy-option label="4千" value="1"></dy-option>
                            <dy-option label="4千-5千" value="2"></dy-option>
                            <dy-option label="5千-6千" value="3"></dy-option>
                            <dy-option label="6千-7千" value="4"></dy-option>
                            <dy-option label="7千-8千" value="5"></dy-option>
                            <dy-option label="8千-9千" value="6"></dy-option>
                            <dy-option label="9千-10千" value="7"></dy-option>
                            <dy-option label="10千以上" value="8"></dy-option>
                        </dy-select>
                        <button class="filterBtn" @click="handleFilter">筛选</button>
                    </div>
                </div>
            </div>
        </banner>
    </div>
</template>

<script>
    import banner from '~/components/newHouse/banner';
    import transitionBox from '~/components/newHouse/transitionBox';
    import dySelect from '~/components/newHouse/select';
    import dyOption from '~/components/newHouse/selectOption';

    export default {
        name: "newHouseIndex",
        layout: "newHouseBuju",
        components:{
            banner,transitionBox,dySelect,dyOption
        },
        data(){
            return{
                isShowArea: false,
                formData: {
                    area:[],
                    type: [],
                    houseProperty: [],
                    averagePrice: []
                }
            }
        },
        methods: {
            handleFilter(){}
        }
    }
</script>

<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    .newHouseCon{
        height: 1200px;
        /*position: relative;*/
        .content-container{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            .filter-box{
                width: 1100px;
                margin: 0 auto;
                .left-box{
                    width: 300px;
                    height: 100%;
                    text-align: center;
                    padding-top: 30px;
                    background: rgba(255,0,0,0.4);
                    .filterBtn{
                        display: inline-block;
                        width: 200px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        color: #c30d23;
                        font-size: 16px;
                        background: #fff;
                        border-radius: 3px;
                        margin: 70px auto 40px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>