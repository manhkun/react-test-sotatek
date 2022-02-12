<template>
  <div class="st-newtask">
    <div class="st-newtask__header st-header">
      <h2>New Task</h2>
    </div>

    <div class="st-newtask__form">

    </div>

    <div class="st-newtask__form">
      <Form />
    </div>

    <div class="st-newtask__btn">
      <button class="st-btn st-btn--fullwidth st-btn--success">Add</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Form from './Form.vue'
</script>

<style lang="scss">
.st-newtask {
  padding: 0 20px 20px 20px;

  &__btn {
    margin-top: 20px;
  }
}

</style>
