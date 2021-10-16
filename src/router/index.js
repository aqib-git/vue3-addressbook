import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import CreateContact from '@/views/CreateContact.vue';
import EditContact from '@/views/EditContact.vue';

const routes = [
  {
    path: '/',
    name: 'listContacts',
    component: Home,
  },
  {
    path: '/create-contact',
    name: 'createContact',
    component: CreateContact,
  },
  {
    path: '/edit-contact/:id',
    name: 'editContact',
    component: EditContact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
