<template>
  <div class="st-form">
    <div class="st-form__title">
      <input class="st-border--grey" type="text" placeholder="Add new task">
    </div>
    <div class="st-form__desc">
      <label for="st-form-description">Description</label>
      <textarea name="description" id="st-form-description" cols="30" rows="10"></textarea>
    </div>
    <div class="st-form__bottom st-flex">
      <div class="st-form__duedate">
        <label for="st-form-duedate">Due date</label>
        <input type="date" id="st-form-duedate">
      </div>
      <div class="st-form__priority">
        <label for="">Priority</label>
        <select name="priority" id="st-form-priority">
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.st-form {
  > * {
    margin-bottom: 15px;
  }

  label {
    display: block;
    font-weight: 700;
    margin-bottom: 5px;
  }

  input, textarea {
    width: 100%;
  }

  &__title input {
    padding: 10px;
  }

  &__bottom {
    justify-content: space-between;
    > div {
      width: 45%;
    }
    input, select {
      height: 30px;
      width: 100%;
    }
  }
}
</style>
