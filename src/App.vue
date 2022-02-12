<template>
  <div class="st-container">
    <div class="st-wrapper st-flex">
      <div class="st-wrapper__left st-border-dark">
        <NewTask />
      </div>
      <div class="st-wrapper__right st-border-dark">
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NewTask from './components/NewTask.vue';
import TodoList from './components/TodoList.vue'
</script>


<style lang="scss">
.st-wrapper {
  &__left {
    width: 100%;
    border-bottom: none;

    @media screen and (min-width: 768px) {
      width: 40%;
      border-bottom: 1px solid #000;
      border-right: none;
    }
  }

  &__right {
    width: 100%;
    position: relative;

    @media screen and (min-width: 768px) {
      width: 60%;
    }
  }
}
</style>
