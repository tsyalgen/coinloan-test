<template lang="pug">
  form.converter
    h3.converter__title Exchange NAME1 to NAME2
    input-element(:type="'payInput'")
    input-element(:type="'getInput'")
    button.converter__submit(type="submit") Exchange
</template>

<script>
import InputElement from "@/components/InputElement";

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
