import Profile from '../components/Profile.vue'
import Application from '../components/Application.vue'
import Home from '../components/Home.vue';
import Admin from '../components/Admin.vue';

import { defineComponent  } from 'vue';

const NotFound = defineComponent({
    template: '<div>Not Found</div>'
})

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', name: 'Home', component: Home},
    {path: '/admin', name: 'admin', component: Admin},
    {path: '/profile', name: 'profile', component: Profile},
    {path: '/application', name: 'application', component: Application },
    {path: '/resume/:year(\\d)', name: 'Profile', component: Profile },
    {path: '/:catchAll(.*)+', component: NotFound},
]

export default routes