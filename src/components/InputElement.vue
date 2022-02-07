<template lang="pug">
  div.input
    p.input__title You {{ inputTypes[type] }}
    input.input__field(
      :placeholder="`${inputTypes[type]} Amount`"
      v-model.trim="inputValue"
    )
    select.input__select(
      v-model="selectedItem"
      @change="sendCurrency"
    )
      option.input__select_item(
        v-for="(item, index) in currencies"
        :key="index"
      ) {{ item }}
</template>
<script>

export default {
  name: 'InputElement',
  props: {
    type: {
      type: String,
      required: true
    },
    currencies: {
      type: Array,
      required: true
    },
    inputData: {
      type: String
    }
  },
  data() {
    return {
      inputTypes: {
        getInput: 'Get',
        payInput: 'Pay'
      },
      selectedItem: this.type === 'payInput' ? 'EUR' : 'USD',
    }
  },
  computed: {
    inputValue: {
      get: function () {
        if (typeof +this.inputData === 'number' && isFinite(+this.inputData)) {
          return this.inputData
        } else {
          return null
        }
      },
      set: function (value) {
        this.$emit('updateInput', value)
      }
    }
  },
  methods: {
    sendCurrency() {
      this.$emit('updateCurrency', this.selectedItem)
    }
  },
  mounted() {
    this.sendCurrency()
  }
}
</script>
<style lang="scss" scoped>
.input {
  width: 70%;
  margin: 0 auto;
  &__title {
    font-size: 18px;
    font-weight: bold;
    margin: 5px 0;
  }
  &__field {
    width: 75%;
    height: 30px;
    border: solid 1px lightgray;
    border-radius: 5px 0 0 5px;
    font-size: 15px;
    margin: 0 0 10px 0;
    padding: 0 0 0 10px;
    &:focus {
      outline: 0;
    }
  }
  &__select {
    width: 22%;
    height: 32px;
    border: solid 1px lightgray;
    border-left: none;
    border-radius: 0 5px 5px 0;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    margin: 0 0 10px 0;
    padding: 0;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
  }
}
</style>
