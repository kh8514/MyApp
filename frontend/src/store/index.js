import { createStore } from 'vuex'
import { about_me } from './modules/about-me'
import { applications } from './modules/applications'

export const store = createStore({
    modules: {
        about_me,
        applications,
    },
})