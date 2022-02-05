<template  lang="pug">
  div
    .pug
      p {{ pairs }}
    .pug__huyag
      p {{ rates }}
</template>

<script>
import {fetchPairs, fetchRates} from '@/services/fetchers'

export default {
  data() {
    return {
      message: '',
      pairs: '',
      rates: ''
    }
  },
  methods: {
    async getData() {
      try {
        this.pairs = await fetchPairs()
        this.rates = await fetchRates()
      }
      catch(error){
        this.pairs = 'Pairs error!'
        this.rates = 'Rates error!'
      }
    }
  },
  async created() {
    await this.getData()
    setInterval(this.getData, 30000)
  }
}
</script>

<style lang="scss">
  .pug {
    color:red;
    &__huyag {
      color:blue;
    }
  }
</style>
