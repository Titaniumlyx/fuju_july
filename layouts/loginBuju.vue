<template>
    <div class="loginCon">
        <loginHead></loginHead>
        <nuxt/>
        <loginFoot></loginFoot>
    </div>
</template>

<script>
    import loginHead from '~/components/login/headBu.vue';
    import loginFoot from '~/components/login/headFoot.vue';

    export default {
        name: "loginBuju",
        components:{
            loginHead,
            loginFoot
        }
    }
</script>

<style scoped>
    .loginCon{
        background: #f2f2f2;
    }
</style>