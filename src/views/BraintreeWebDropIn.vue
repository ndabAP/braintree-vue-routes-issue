<template>
  <div id="braintree"></div>
</template>

<script>
import { create } from 'braintree-web-drop-in'

const AUTHORIZATION = '123' // Change

export default {
  async mounted () {
    await this.sleep()

    create({
      authorization: AUTHORIZATION,
      container: '#braintree'
    }, (error, instance) => {
      if (error) console.error(error)
    })
  },

  methods: {
    sleep: () => new Promise(resolve => setTimeout(resolve, 3000))
  }
}
</script>
