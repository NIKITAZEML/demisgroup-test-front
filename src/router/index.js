import Vue from 'vue'
import VueRouter from 'vue-router'
import News from "../views/News";
import Main from "../views/Main";
import ReviewForm from "../views/ReviewForm";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/review-form',
    name: 'Form',
    component: ReviewForm
  },
  {
    path: '/news',
    name: 'News',
    component: News
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
