<template lang="pug">
  transition(name="fade")
    div.wrapper
      div.popup
        h2.popup__text Exchange complete!
        button.popup__button(@click.prev="$emit('close')") Ok!


</template>

<script>
export default {
  name: "Popup"
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.popup {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  border: solid 2px lightgray;
  border-radius: 5px;
  background-color: white;
  &__text {
    margin: 20px auto 0;
    text-align: center;
    font-size: 40px;
    opacity: 0.7;
  }
  &__button {
    margin: 25px auto;
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
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s linear;
  }
  &-leave-to,
  &-enter {
    opacity: 0;
  }
}

</style>
