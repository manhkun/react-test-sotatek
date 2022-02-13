<template>
  <div class="st-newtask">
    <div class="st-newtask__header st-header">
      <h2>New Task</h2>
    </div>

    <div class="st-newtask__form">
      <Form type="add" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Form from './Form.vue';

export default defineComponent({
  components: {
    Form,
  },
});
</script>

<style lang="scss">
.st-newtask {
  padding: 0 20px 20px 20px;
}

</style>
