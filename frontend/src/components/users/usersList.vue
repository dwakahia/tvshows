<template>
  <div class="container mx-auto mt-10 flex-grow">
    <bread-crumbs>
      <template v-slot:title>
        Users
      </template>
      <template v-slot:page>
        Users
      </template>
    </bread-crumbs>
    <div class="flex flex-col mt-8">

    </div>
  </div>
</template>

<script>
import BreadCrumbs from "../common/BreadCrumbs";

export default {
  name: "usersList",
  components: {
    BreadCrumbs
  }
}
</script>

<style scoped>

</style>