import { createRouter, createWebHistory } from 'vue-router'
import TodoInput from '/src/components/TodoInput.vue'
import HelloWorld from '/src/components/HelloWorld.vue'

let history = createWebHistory()
let routes = [
  {
    path: '/',
    name: 'TodoInput',
    component: TodoInput
  },
  {
    path: '/hello',
    name: 'Hello',
    component: HelloWorld
  }
]

export default createRouter({ history, routes })