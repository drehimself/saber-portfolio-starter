export default {
  methods: {
    formatDate(date) {
      const options = { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }

      return new Date(date).toLocaleDateString('en-US', options)
    }
  }
}
