import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../views/News";
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
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
