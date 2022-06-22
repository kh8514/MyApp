import Profile from '../components/Profile.vue'
import Application from '../components/Application.vue'
import Home from '../components/Home.vue';

import { defineComponent  } from 'vue';

const NotFound = defineComponent({
    template: '<div>Not Found</div>'
})

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/profile', name: 'profile', component: Profile},
    {path: '/application', name: 'application', component: Application },
    {path: '/resume/:year(\\d)', name: 'Profile', component: Profile },
    {path: '/:catchAll(.*)+', component: NotFound},
]

export default routes