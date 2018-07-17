<template>
   <div>
       <header class="header">
           <newHead></newHead>
       </header>
       <nuxt/>
       <MyFooter></MyFooter>
   </div>
</template>

<script>
    import newHead from '~/components/newHouse/newHead.vue';
    import MyFooter from '~/components/Footer.vue';

    export default {
        name: "newHouseBuju",
        components:{
            newHead,MyFooter
        }
    }
</script>

<style scoped>

</style>