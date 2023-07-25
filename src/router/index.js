import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutUsView.vue'
import Write from '../views/WriteCourseView.vue'
import Lessons from '../views/AllCoursesView.vue'



const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/write',
    component: Write
  },
  {
    path: '/courses',
    component: Lessons
  },
  
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router