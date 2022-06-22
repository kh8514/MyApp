<template>
    <div>
        <p class="m-2">
            총 {{ application_count }} 개의 어플리케이션 중
            {{ applications.length}} 개가 보여집니다.
        </p>
        <hr/>
        <div class="row row-cols-1 row-cols-sm-3 g-2 m-0">
            <div class="col" v-for="data in applications" :key="data.id">
                <app-card :data="data" />
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import AppCard from './AppCard.vue';
import useAxios from '../modules/axios';

export default {
    name: 'Application',
    setup() {
        const store = useStore()
        const { axiosGet } = useAxios()
        const applications = computed(() => 
            store.getters["applications/applications"]()
        )

        const application_count = computed(() => 
            store.getters["applications/applications_count"]
        )

        onMounted(() => {
            if (!store.getters.application_count) {
                axiosGet('/db/applications', (data) => {
                    store.dispatch('applications/setApplications', data.data)
                })
            }
        })

        return {
            application_count,
            applications
        }

    },
    components: {
        AppCard
    }
}
</script>

<style>

</style>