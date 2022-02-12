import { ITask } from './../types/Task';
import { defineStore } from 'pinia';

export const useStore = defineStore('todoList',{
  state: () => {
    return {
      todoList: JSON.parse(localStorage.getItem('todoList') || '[]') as ITask[],
      tasksChecked: [] as string[]
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
      this.todoList.forEach((t, index) => {
        if (t.id === task.id) this.todoList[index] = task;
      });
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    },
    removeTasks(ids?: string[]) {
      if (ids) {
        this.todoList = this.todoList.filter((task) => !ids.includes(task.id));
      } else {
        this.todoList = this.todoList.filter((task) => !this.tasksChecked.includes(task.id));
        this.tasksChecked = []
      }
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }
  }
})
