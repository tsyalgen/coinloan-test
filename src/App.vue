<template  lang="pug">
  div.container
    h2.container__warn(v-if="isError") API error
    converter(v-else :pairs="pairs" :rates="rates")
</template>

<script>
import {fetchPairs, fetchRates} from '@/services/fetchers'
import Converter from "@/components/Converter";

export default {
  name: 'App',
  components: {
    Converter
  },
  data() {
    return {
      isError: false,
      pairs: [],
      rates: []
    }
  },
  methods: {
    async getData() {
      this.isError = false
      try {
        this.pairs = await fetchPairs()
        this.rates = await fetchRates()
      }
      catch(error) {
        this.isError = true
      }
    }
  },
  async created() {
    await this.getData()
    setInterval(this.getData, 30000)
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 60px auto;
  width: 50%;
  &__warn {
    color: darkred;
    text-align: center;
  }
}

</style>
