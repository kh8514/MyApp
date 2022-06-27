<template>
  <div>
    <Toast />
    <NavBar />
    <div id="notification" />
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, provide } from '@vue/runtime-core';
import NavBar from './components/NavBar.vue'
import Toast from './components/Toast.vue'

export default {
  name: 'App',
  components: {
    NavBar, 
    Toast
  },
  setup() {
    const toast = ref('')
    provide('toast', toast)
  }
}
</script>
