<template>
    <div>
        <transitionFunc>
            <div v-show="isShow">
                <slot></slot>
            </div>
        </transitionFunc>
    </div>
</template>

<script>
    import transitionFunc from '~/components/newHouse/myTransition';

    export default {
        name: "transitionBox",
        components:{
            transitionFunc
        },
        props:{
            value:{
                type: Boolean
            }
        },
        data(){
          return{
              isShow: false
          }
        },
        watch: {
            value(val){
                this.isShow = val;
            },
            isShow(val){
                this.$emit('input',val);
            }
        }
    }
</script>

<style scoped>

</style>