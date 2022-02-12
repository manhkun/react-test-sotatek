import { ITask } from './../types/Task';
import { defineStore } from 'pinia';

export const useStore = defineStore('todoList',{
  state: () => {
    return {
      todoList: JSON.parse(localStorage.getItem('todoList') || '[]') as ITask[]
    }
  },
  getters: {
    getTaskByTitle: (state) => {
      return (title: string) => state.todoList.filter((task) => task.title === title);
    }
  },
  actions: {
    addTask(task: ITask) {
      this.todoList.push(task);
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    },
    updateTask(task: ITask) {
      this.todoList.forEach((t) => {
        if (t.id === task.id) t = task;
      });
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    },
    removeTasks(ids: string[]) {
      this.todoList = this.todoList.filter((task) => !ids.includes(task.id));
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }
  }
})
