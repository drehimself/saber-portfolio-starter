<template>
  <base-layout :page="page">
    <div class="container-inner mx-auto my-16 ">
      <img src="../assets/img/404.svg" alt="404">
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from '../components/BaseLayout'

export default {
  head() {
    return {
      title: '404'
    }
  },
  components: {
    BaseLayout,
  },
  props: ['page'],
}
</script>

