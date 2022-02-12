<template>
  <div class="st-todos">
    <div class="st-todos__header st-header">
      <h2>To Do List</h2>
    </div>

    <div class="st-todos__search">
      <input class="st-border--grey" type="text" placeholder="Search...">
    </div>

    <div class="st-todos__wrapper">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TaskItem from './TaskItem.vue';
</script>

<style lang="scss">
.st-todos {
  padding: 20px 20px 0 20px;
}
</style>
