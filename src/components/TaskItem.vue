<template>
  <li class="st-task__item">
    <div class="st-item__header st-flex st-border-dark">
      <input type="checkbox">
      <div class="st-task__title">Do homework</div>
      <div class="st-task__buttons">
        <button class="st-btn st-btn--primary" @click="isExpand = !isExpand">{{isExpand ? 'Collapse' :'Detail'}}</button>
        <button class="st-btn st-btn--delete">Remove</button>
      </div>
    </div>
    <div class="st-item__expand st-border-dark" :class="{'is-expand': isExpand}">
      <div class="st-expand__wrapper">
        <div class="st-item__form">
          <Form />
        </div>
        <div class="st-item__button">
          <button class="st-btn st-btn--fullwidth st-btn--success">Update</button>
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import Form from './Form.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    Form
  },
  setup() {
    const isExpand = ref(false);

    return {
      isExpand
    }
  },
})
</script>


<style lang="scss">
.st-task__item {
  list-style: none;
  margin-bottom: 10px;
  .st-item__header {
    padding: 10px;
    align-items: center;

    input[type="checkbox"] {
      margin-right: 10px;
    }
    .st-task__title {
      margin-right: auto;
    }

    .st-task__buttons {
      button:first-child {
        margin-right: 10px;
      }
    }
  }

  .st-item__expand {
    max-height: 0;
    overflow: hidden;
    transition: max-height .5s ease;
    .st-expand__wrapper {
      padding: 15px;
    }

    &.is-expand {
      max-height: 400px;
    }
  }
}
</style>
