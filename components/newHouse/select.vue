<template>
    <div class="dy-select-container">
        <span class="options-item" @click="toggle" v-clickOutSide>
            {{title}} <i class="iconfont icon-jiantou6"></i>
        </span>
        <div class="select-menu">
            <transitionBox v-model="isShow">
                <ul class="dy-select-options" @click.stop>
                    <slot></slot>
                </ul>
            </transitionBox>
        </div>
    </div>
</template>

<script>
    import transitionBox from '~/components/newHouse/transitionBox';

    export default {
        name: "select",
        components:{
            transitionBox
        },
        props:{
            value:{
                type:[Array,String]
            },
            title:{
                type:String
            }
        },
        directives:{
            clickOutSide:{
                inserted(el,binding,vnode){
                    function clickOutSide(ev){
                        vnode.context.isShow = false;
                    }
                    el["_clickOutSideFunc"] = clickOutSide;
                    document.addEventListener('click',clickOutSide)
                },
                unbind(el){
                    document.removeEventListener("click",el["_clickOutSideFunc"])
                }
            }
        },
        data(){
            return{
                isShow: false,
                currentValue: this.value
            }
        },
        methods:{
            toggle(ev){
                ev.stopPropagation();
                this.isShow = !this.isShow;
            },
            updateValue(newValue){
                this.$emit("input",newValue);
            },
            closeMenu(){
                this.isShow = false;
            }
        },
        watch:{
            value(val){
                this.currentValue = val;
            },
            currentValue(val){
                this.$emit("input",val)
            }
        }
    }
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    .dy-select-container{
        position: relative;
        .options-item{
            user-select: none;
            position: relative;
            color: #fff;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 198px;
            height: 25px;
            line-height: 25px;
            margin: 50px auto 0;
            display: block;
            cursor: pointer;
            overflow: hidden;
            i{
                position: absolute;
                right: 6px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        .select-menu{
            z-index: 998;
            position: absolute;
            left: 51px;
            top: 27px;
            .dy-select-options{
                width: 196px;
                border: 1px solid #ccc;
                background: #fff;
                color: #333;
                -webkit-padding-start: 0;
            }
        }
    }
</style>