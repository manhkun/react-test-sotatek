<template>
  <form class="st-form" @submit.prevent="handleSubmitForm">
    <div class="st-form__title">
      <input
        v-model="title" class="st-border--grey"
        type="text" name="title"
        placeholder="Add new task" required
      >
    </div>
    <div class="st-form__desc">
      <label for="st-form-description">
        Description
      </label>
      <textarea
        id="st-form-description" v-model="description"
        name="description" cols="30"
        rows="10"
      />
    </div>
    <div class="st-form__bottom st-flex">
      <div class="st-form__duedate">
        <label for="st-form-duedate">
          Due date
        </label>
        <input
          id="st-form-duedate" v-model="dueDate"
          type="date" name="dueDate"
          :min="dueDate"
        >
      </div>
      <div class="st-form__priority">
        <label for="st-form-priority">
          Priority
        </label>
        <select id="st-form-priority" v-model="priority" name="priority">
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
    <div class="st-form__button">
      <button class="st-btn st-btn--fullwidth st-btn--success">
        {{ type }}
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { ITask } from '../types/Task';
import { randomID } from '../helpers';
import { useStore } from '../store';

export default defineComponent({
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: false,
      default: {} as ITask,
    },
    type: {
      type: String as PropType<'add' | 'update'>,
      required: true,
    },
  },
  setup({ task, type }) {
    const store = useStore();
    const title = ref(task?.title || '');
    const description = ref(task?.description || '');
    const dueDate = ref(task?.dueDate || new Date().toISOString().split('T')[0]);
    const priority = ref(task?.priority || 'normal');

    // Reset form as init
    const resetForm = () => {
      title.value = '';
      description.value = '';
      [dueDate.value] = new Date().toISOString().split('T');
      priority.value = 'normal';
    };

    const handleSubmitForm = () => {
      const newTask: ITask = {
        id: task?.id || randomID(),
        title: title.value,
        description: description.value,
        dueDate: dueDate.value,
        priority: priority.value,
      };

      if (type === 'update') {
        store.updateTask(newTask);
      } else {
        store.addTask(newTask);
        resetForm();
      }
    };

    return {
      title,
      description,
      dueDate,
      priority,
      handleSubmitForm,
    };
  },
});
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
