<template>
  <div class="bg-white p-4 rounded-md flex justify-between md:justify-end">
    <div class="flex items-center mobile-menu-btn md:hidden" @click="toggleSideBar">
      <i class="fa fa-bars fa-2x"></i>
    </div>
    <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider">
      <div class="flex items-center">
        <div class="flex-shrink-0 w-10 h-10">
          <img class="w-10 h-10 rounded-full"
               src="https://source.unsplash.com/user/erondu"
               alt="admin dashboard ui">
        </div>

        <div class="ml-4">
          <div class="text-sm font-medium leading-5 text-gray-900">
            {{ user.name }}
          </div>
        </div>
      </div>
    </button>

    <!-- Dropdown menu -->
    <div id="dropdownDivider" class="hidden z-10 py-2 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
      <ul class="py-1" aria-labelledby="dropdownDividerButton">
        <li>
          <p class="text-center text-sm">{{ user.email }}</p>
        </li>
      </ul>
      <div class="py-1 flex justify-center">
        <button @click="logout"
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
          Logout
          <i class="fa fa-power-off ml-2"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import {Event_bus} from "../../event_bus";
import {TDropdown} from "vue-tailwind/dist/components";

export default {
  name: "TopNav",
  components: {
    TDropdown
  },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem('user')).user;
    }
  },
  methods: {
    toggleSideBar() {
      Event_bus.$emit('toggle_sidebar');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style scoped>

</style>