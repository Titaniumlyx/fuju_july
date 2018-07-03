<template>
  <div>
      <shouHead></shouHead>
      <nuxt/>
      <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue';
import shouHead from '~/components/shouHead.vue';

export default {
  components: {
      MyFooter,
      shouHead
  }
}
</script>

<style>

</style>
