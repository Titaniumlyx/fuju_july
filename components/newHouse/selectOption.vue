<template>
    <li class="dy-select-item" @click="handleClick">
        {{label}}
    </li>
</template>

<script>
    export default {
        name: "selectOption",
        props:{
            value:{
                type:[String,Number]
            },
            label:{
                type:[String,Number]
            }
        },
        methods:{
            handleClick(){
                let select = this.$parent.$parent;
                let arr = [];
                arr.push({label: this.label,value: this.value});
                select.updateValue(arr);
                select.closeMenu();
            }
        }
    }
</script>

<style lang="scss">
    .dy-select-item{
        cursor: pointer;
        line-height: 25px;
        width: 196px;
        &:hover{
            background: #eee;
        }
        &:active{
            color: #fff;
            background: #bbb;
        }
        user-select: none;
    }

</style>