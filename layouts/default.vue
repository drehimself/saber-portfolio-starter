<template>
  <base-layout :page="page">
    <slot name="default" />
  </base-layout>
</template>

<script>
import ThemeSwitcher from '../components/ThemeSwitcher'
import BaseLayout from '../components/BaseLayout'


export const data = {
  // layout: 'home',
}

export default {
  props: ['page'],
  components: {
    ThemeSwitcher,
    BaseLayout,
  },
  head() {
    const pageTitle = this.page.title
    return {
      title: pageTitle ?
        `${pageTitle} - ${this.$siteConfig.title}` :
        this.$siteConfig.title
    }
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-light'
  },
  data() {
    return {
      isOpen: false,
      theme: '',
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    updateTheme(theme) {
      this.theme = theme
    }
  }
}
</script>
