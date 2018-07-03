<template>
    <div class="secHandCon">
        <secHead></secHead>
        <nuxt/>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import secHead from '~/components/secondHand/secHead.vue';
    import MyFooter from '~/components/Footer.vue';

    export default {
        name: "secondHanBuju",
        components: {
            secHead,
            MyFooter
        }
    }
</script>

<style scoped lang="scss">

</style>