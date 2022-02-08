<template lang="pug">
  form.converter
    h3.converter__title Exchange {{ selectedPayItem }} to {{ selectedGetItem }}
    input-element(
      :type="'payInput'"
      :currencies="firstCurrency ? firstCurrency : currencyList"
      :inputData="inputPayValue"
      @updateCurrency="onUpdatePayCurrency"
      @updateInput="onUpdatePayInput"
    )
    input-element(
      :type="'getInput'"
      :currencies="secondCurrency"
      :inputData="inputGetValue"
      @updateCurrency="onUpdateGetCurrency"
      @updateInput="onUpdateGetInput"
    )
    button.converter__submit(type="submit" @click.prevent="$emit('popup')") Exchange
</template>

<script>
import InputElement from "@/components/InputElement"
import {currencyList} from "@/utils/generators"

export default {
  name: "Converter",
  components: {
    InputElement
  },
  props: {
    pairs: {
      type: Array,
      required: true,
    },
    rates: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      currencyList: currencyList,
      selectedPayItem: null,
      selectedGetItem: null,
      inputPayValue: null,
      inputGetValue: null,
      isReverse: null
    }
  },
  computed: {
    secondCurrency() {
      return this.currencyList.filter((item)=> {
        return item !== this.selectedPayItem
      })
    },
    firstCurrency() {
      if (this.selectedGetItem) {
        return this.currencyList.filter((item)=> {
          return item !== this.selectedGetItem
        })
      }
      return null
    },
    currentPair() {
      return `${this.selectedPayItem}/${this.selectedGetItem}`
    },
    commissifeon() {
      return this.pairs.filter(obj => {
        return (obj.base_currency === this.selectedGetItem && obj.quote_currency === this.selectedPayItem) ||
            (obj.quote_currency === this.selectedGetItem && obj.base_currency === this.selectedPayItem)
      })[0].commissifeon
    },
    rate() {
      return this.rates.filter((obj) => {
        let reversePair = obj.pair.split('/').reverse().join('/')
        if (obj.pair === this.currentPair) {
          this.isReverse = false
          return obj
        } else if (this.currentPair === reversePair) {
          this.isReverse = true
          return obj
        }
      })[0].rate
    },
  },
  watch: {
    rates() {
      this.convertGetInPay()
    }
  },
  methods: {
    onUpdatePayCurrency(item) {
      if (this.selectedGetItem === item) {
        this.selectedGetItem = currencyList[0]
      }
      this.selectedPayItem = item
      setTimeout(() => {
        this.convertGetInPay()
      }, 200)

    },
    onUpdateGetCurrency(item) {
      this.selectedGetItem = item
      setTimeout(() => {
        this.convertGetInPay()
      }, 200)

    },
    onUpdatePayInput(value) {
      this.inputPayValue = value
      this.convertGetInPay()
    },
    onUpdateGetInput(value) {
      this.inputGetValue = value
      this.convertPayInGet()
    },
    convertGetInPay() {
      if (!this.isReverse) {
        this.inputGetValue = String(this.inputPayValue * this.rate *
            ((100 - +this.commissifeon) / 100).toFixed(4))
      } else {
        this.inputGetValue = String(this.inputPayValue * +(1 / this.rate).toFixed(4) *
            +((100 - +this.commissifeon) / 100).toFixed(4))
      }
    },
    convertPayInGet() {
      if (!this.isReverse) {
        this.inputPayValue = String(this.inputGetValue * +( 1 / this.rate).toFixed(4) *
            ((100 + +this.commissifeon) / 100).toFixed(4))
      } else {
        this.inputPayValue = String(this.inputGetValue * this.rate *
            +((100 + +this.commissifeon) / 100).toFixed(4))
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.converter {
  display: flex;
  flex-direction: column;
  border: solid 1px lightgray;
  border-radius: 5px;
  &__title {
    text-align: center;
    font-size: 25px;
    padding: 20px 0;
    margin: 20px;
    border-bottom: solid 1px lightgray;
  }
  &__submit {
    margin: 20px auto;
    width: 50%;
    height: 30px;
    font-size: 15px;
    border: solid 1px lightgray;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    transition: box-shadow linear 0.2s;
    &:hover {
      box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
