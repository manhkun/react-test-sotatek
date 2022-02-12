<template>
  <div class="st-todos">
    <div class="st-todos__header st-header">
      <h2>To Do List</h2>
    </div>

    <div class="st-todos__search">
      <input class="st-border--grey" type="text" placeholder="Search...">
    </div>

    <ul class="st-todos__wrapper">
      <TaskItem v-for="task in todoList" :key="task.id" :task="task"/>
    </ul>

    <div class="st-todos__bulk" v-if="tasksChecked.length > 0">
      <BulkAction />
    </div>
  </div>
</template>

<script lang="ts">
import TaskItem from './TaskItem.vue';
import BulkAction from './BulkAction.vue';
import { defineComponent } from 'vue'
import { useStore } from '../store';
import { storeToRefs } from 'pinia';

export default defineComponent({
  components: {
    TaskItem,
    BulkAction
  },
  setup() {
    const store = useStore();
    const { todoList, tasksChecked } = storeToRefs(store);

    return {
      todoList,
      tasksChecked
    }
  },
})
</script>


<style lang="scss">
.st-todos {
  padding: 0px 20px 100px 20px;

  .st-todos__search input {
    width: 100%;
    padding: 10px;
  }

  .st-todos__wrapper {
    padding: 0;
  }

  .st-todos__bulk {
    position: absolute;

    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>
