<template>
  <div class="container mx-auto mt-10 flex-grow">
    <div class="grid gap-4 lg:grid-cols-3">
      <div class="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
        <div class="p-3 bg-indigo-600 rounded">
          <i class="fa fa-users text-white"></i>
        </div>
        <div class="mx-4">
          <h4 class="text-2xl font-semibold text-gray-700">100</h4>
          <div class="text-gray-500">Users</div>
        </div>
      </div>
      <div class="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
        <div class="p-3 bg-indigo-600 rounded">
          <i class="fa fa-video text-white"></i>
        </div>
        <div class="mx-4">
          <h4 class="text-2xl font-semibold text-gray-700">30</h4>
          <div class="text-gray-500">Tv Shows</div>
        </div>
      </div>
      <div class="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
        <div class="p-3 bg-indigo-600 rounded">
          <i class="fa fa-traffic-light text-white"></i>
        </div>
        <div class="mx-4">
          <h4 class="text-2xl font-semibold text-gray-700">1000</h4>
          <div class="text-gray-500">Visits</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>