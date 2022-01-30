<template>
  <div class="relative flex min-h-screen">
    <side-bar/>
    <div class="w-full px-4 py-2 bg-gray-200 lg:w-full flex flex-col">
      <TopNav/>
      <router-view></router-view>
      <bottom/>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar";
import Bottom from "./Bottom";
import TopNav from "./TopNav";

export default {
  name: "AdminLayout",
  components: {
    SideBar,
    Bottom,
    TopNav
  }
}
</script>

<style scoped>

</style>