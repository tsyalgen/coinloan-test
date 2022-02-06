<template lang="pug">
  div.input
    p.input__title You {{ types[type] }}
    input.input__field(:placeholder="`${types[type]} Amount`")
    select.input__select
      option.input__select_item(v-for="value in object") {{ value }}
</template>
<script>

export default {
  name: 'InputElement',
  props: {
    type: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      types: {
        getInput: 'Get',
        payInput: 'Pay'
      },
      object: {
        name: 123123,
        name2: 234234,
        name3: 124124,
        asdsad: "dfdfvfdv",
        asssad: "dfdfvfdv",
        asasdasdad: "dfdfvfdv",
        asdasddsad: "dfdfvfdv",
        asasdasddssad: "dfdfvfdv",
        asasdasdasdsad: "dfdfvfdv",
        asdsasdasdd: "dfdfvfdv",
        asadassssad: "dfdfvfdv",
        aasdsaddsad: "dfdfvfdv",
        asdasdsadad: "dfdfvfdv",
        asdasdsadd: "dfdfvfdv",
        asasdsadasdad: "dfdfvfdv",
        asasdsadd: "dfdfvfdv",
        asasdasdssasdsad: "dfdfvfdv"
      }
    }
  },
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
