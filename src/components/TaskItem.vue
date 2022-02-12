<template>
  <li class="st-task__item">
    <div class="st-item__header st-flex st-border-dark">
      <input type="checkbox" :value="task?.id" @input="handleTaskChecked($event.target.checked, $event.target.value)" :checked="tasksChecked.includes(String(task?.id))">
      <div class="st-task__title">{{ task?.title }}</div>
      <div class="st-task__buttons">
        <button class="st-btn st-btn--primary" @click="isExpand = !isExpand">{{isExpand ? 'Collapse' :'Detail'}}</button>
        <button class="st-btn st-btn--delete" @click="handleRemoveTask">Remove</button>
      </div>
    </div>
    <div class="st-item__expand st-border-dark" :class="{'is-expand': isExpand}">
      <div class="st-expand__wrapper">
        <div class="st-item__form">
          <Form type="update" :task="task"/>
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import Form from './Form.vue'
import { defineComponent, PropType, ref } from 'vue'
import { ITask } from '../types/Task';
import { useStore } from '../store';
import { storeToRefs } from 'pinia';

export default defineComponent({
  components: {
    Form
  },
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: false
    },
  },
  setup({task}) {
    const isExpand = ref(false);
    const store = useStore();
    const { tasksChecked } = storeToRefs(store)

    const handleRemoveTask = () => {
      store.removeTasks([String(task?.id)])
    }

    const handleTaskChecked = (checked: boolean, value: string) => {
      if (checked && !tasksChecked.value.includes(value)) tasksChecked.value.push(value);
      else if (!checked) tasksChecked.value.splice(tasksChecked.value.indexOf(value), 1)
    }

    return {
      isExpand,
      tasksChecked,
      handleRemoveTask,
      handleTaskChecked
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
