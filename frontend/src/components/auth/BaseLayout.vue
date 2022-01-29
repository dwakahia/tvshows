<template>
  <div class="bg-gray-200 flex items-center min-h-screen">
    <div class="shadow-md rounded-md p-5 w-5/6  md:w-1/3 bg-white mx-auto ">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseLayout"
}
</script>

<style scoped>

</style>