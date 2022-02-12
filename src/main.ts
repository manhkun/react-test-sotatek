import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import { createPinia } from 'pinia'

// Init store local

if (!localStorage.getItem('todoList')) localStorage.setItem('todoList', '[]')

createApp(App).use(createPinia()).mount('#app')
