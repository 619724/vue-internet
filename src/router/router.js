import { createRouter,createWebHistory } from "vue-router";
const router=createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      name:'',
      redirect:'/innovate',
    },
    {
      path:'/innovate',
      name:'innovate',
      component: () =>import ('../pages/innovate.vue'),
      mata:{
        innovate:true,
      },
    },
    {
      path:'/question',
      name:'question',
      component: () =>import ('../pages/question.vue'),
      mata:{
        question:true,
      },
    },
    {
      path:'/like',
      name:'like',
      component: () =>import ('../pages/like.vue'),
      mata:{
        like:true,
      },
    },
    {
      path:'/my',
      name:'my',
      component: () =>import ('../pages/my.vue'),
      mata:{
        my:true,
      },
    },
  ]
});

export default router;