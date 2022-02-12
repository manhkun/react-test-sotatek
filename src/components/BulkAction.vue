<template>
  <div class="st-bulk st-border-dark st-flex">
    <div class="st-bulk__text">Bulk Action:</div>

    <div class="st-bulk__buttons">
      <button class="st-btn st-btn--blue" @click="isExpand = !isExpand">Done</button>
      <button class="st-btn st-btn--delete" @click="handleRemoveTask">Remove</button>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '../store'

export default defineComponent({
  setup() {
    const store = useStore();
    const handleRemoveTask = () => {
      store.removeTasks()
    }

    return {
      handleRemoveTask
    }
  },
})
</script>

<style lang="scss">
.st-bulk {
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ccc;

  .st-bulk__buttons {
    button:first-child {
      margin-right: 10px;
    }
  }
}
</style>
