<template>
  <div
      :class="{'-translate-x-full': showSideBar}" class="sidebar px-4 py-2 bg-gray-200 bg-indigo-600 w-64  absolute inset-y-0
       left-0 transform   md:relative md:translate-x-0 transition duration-200 ease-in-out z-10"
      >
    <div class="px-3 mt-6 mb-6 flex justify-between items-center">
      <h1 class="text-2xl  text-white mr-2">Users List</h1>
      <i class="fa fa-times fa-2x text-gray-300 hover:text-white md:hidden" @click="toggleSideBar"></i>
    </div>
    <ul>
      <li class="mb-2 rounded hover:shadow hover:bg-gray-800" @click="toggleSideBar">
        <router-link :to="{name: 'home'}"  class="inline-block w-full h-full px-3 py-2 font-bold text-white">
          <i class="fa fa-home px-2"></i>
          Home
        </router-link>
      </li>
      <li class="mb-2 rounded hover:shadow hover:bg-gray-800" @click="toggleSideBar">
        <router-link :to="{name: 'users'}"  class="inline-block w-full h-full px-3 py-2 font-bold text-white">
          <i class="fa fa-users px-2"></i>
          Users
        </router-link>
      </li>
      <li class="mb-2 rounded hover:shadow hover:bg-gray-800" @click="toggleSideBar">
        <router-link :to="{name: 'movies'}"  class="inline-block w-full h-full px-3 py-2 font-bold text-white">
          <i class="fa fa-video px-2"></i>
          Movies
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {Event_bus} from "../../event_bus";

export default {
  name: "SideBar",
  data() {
    return {
      showSideBar: true
    }
  },
  created() {
    Event_bus.$on('toggle_sidebar', this.toggleSideBar);
  },
  methods: {
    toggleSideBar() {
      console.log('clicked')
      this.showSideBar = !this.showSideBar
    }
  }
}
</script>

<style scoped>

</style>