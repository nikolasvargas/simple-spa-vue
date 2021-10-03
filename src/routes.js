import Home from './components/home/Home.vue';
import Register from './components/register/Register.vue';

export const routes = [
  { path: '/', name: 'Home', component: Home},
  { path: '/cadastro', name: 'Cadastro', component: Register}
];
