<template>
  <base-layout>
    <form id="regForm" @submit.prevent="register">
      <p class="text-center text-indigo-600 font-semibold my-2 text-lg">Users List</p>
      <hr>
      <p class="text-center text-indigo-600 font-semibold my-2 text-sm">Please Register</p>
      <div class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
           v-if="serverError" role="alert">
        <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"></path>
        </svg>
        <div>
          {{ serverError }}
        </div>
      </div>
      <div class="mb-4">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
        <div class="flex">
          <input type="text" id="name"  v-model="form.name" class="rounded-none rounded-l-lg bg-gray-50 border
             border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0
             w-full text-sm border-gray-300 p-2.5" placeholder="Name">
          <span
              class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-l-0 border-gray-300 ">
              <i class="fa fa-user"></i>
          </span>
        </div>
        <p id="nameError" class="mt-2 text-sm text-red-600 dark:text-red-500" v-if="errors.name">{{ errors.name }}</p>
      </div>
      <div class="mb-4">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
        <div class="flex">
          <input type="email" id="email"  v-model="form.email" class="rounded-none rounded-l-lg bg-gray-50 border
             border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0
             w-full text-sm border-gray-300 p-2.5" placeholder="Email">
          <span
              class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-l-0 border-gray-300 ">
              <i class="fa fa-envelope"></i>
          </span>
        </div>
        <p class="mt-2 text-sm text-red-600 dark:text-red-500" v-if="errors.email">{{ errors.email }}</p>
      </div>
      <div class="mb-4">
        <label for="password"
               class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
        <div class="flex">
          <input :type="isPasswordVisible ? 'text': 'password'" id="password"  v-model="form.password" class="rounded-none rounded-l-lg bg-gray-50 border
             border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0
             w-full text-sm border-gray-300 p-2.5" placeholder="Password">
          <span @click="togglePasswordVisibility"
                class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-l-0 border-gray-300 ">
              <i :class="isPasswordVisible ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
          </span>
        </div>
        <p class="mt-2 text-sm text-red-600 dark:text-red-500" v-if="errors.password">{{ errors.password }}</p>
      </div>
      <div class="mb-4">
        <label for="confirm_password"
               class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm Password</label>
        <div class="flex">
          <input :type="isPasswordVisible ? 'text': 'password'" id="confirm_password"
                 v-model="form.password_confirmation" class="rounded-none rounded-l-lg bg-gray-50 border
             border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0
             w-full text-sm border-gray-300 p-2.5" placeholder="Password">
          <span @click="togglePasswordVisibility"
                class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-l-0 border-gray-300 ">
              <i :class="isPasswordVisible ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
          </span>
        </div>
        <p class="mt-2 text-sm text-red-600 dark:text-red-500" v-if="errors.password_confirmation">
          {{ errors.password_confirmation }}</p>
      </div>
      <button id="regBtn" class="bg-indigo-500 rounded-md text-white p-2 w-full my-2" type="submit" :disabled="isLoading">
        {{ isLoading ? 'please wait ...' : 'Register' }}
      </button>
    </form>
    <div class="text-center md:text-right my-3">
      <router-link class="cursor-pointer" :to="{name:'login'}">Already Have an Account ?</router-link>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "./BaseLayout";
import axios from "axios";
import http from "../../utils/http";

export default {
  name: "register",
  components: {
    BaseLayout
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      isLoading: false,
      isPasswordVisible: false,
      errors: {},
      serverError: null
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    register() {
      this.serverError = null;
      this.errors = {};
      if (!this.form.name) {
        this.errors.name = 'please check name';
        console.log(this.errors.name)
        return;
      }

      if (!this.validateEmail(this.form.email)) {
        this.errors.email = 'please check email'
        return;
      }

      if (!this.form.password) {
        this.errors.password = 'password is required';
        return;
      }

      if (this.form.password !== this.form.password_confirmation) {
        this.errors.password_confirmation = 'password do not match';
        return;
      }
      this.isLoading = true;
      http.post('/users/register', this.form).then((response) => {
        this.isLoading = false;
        this.$router.push({name: 'login'});
      }).catch((error) => {
        this.isLoading = false;
        this.serverError = error.response.data.message;
      })
    },
    validateEmail(email) {
      return email.toLowerCase().match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    }
  }
}
</script>

<style scoped>

</style>