import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import EditCompany from './views/editCompany.vue';
import ViewCompany from './views/viewCompany.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/editCompany:company',
      name: 'EditCompany',
      component: EditCompany,
      props: true,
    },
    {
      path: '/viewCompany:company',
      name: 'ViewCompany',
      component: ViewCompany,
      props: true,
    },
  ],
});
