<template>
  <base-layout :page="page">
    <div class="container-inner mx-auto my-16 ">
      <slot name="default" />
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from '../components/BaseLayout'

export default {

  components: {
    BaseLayout,
  },
  props: ['page'],
}
</script>

