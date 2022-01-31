<template>
  <div class="container mx-auto mt-10 flex-grow">
    <bread-crumbs>
      <template v-slot:title>
        Tv Shows
      </template>
      <template v-slot:page>
        Tv Shows
      </template>
    </bread-crumbs>
    <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <ul class="flex justify-start p-3">
            <li class="mr-2">
              <button aria-current="page" @click="switchActiveCategory('popular')"
                      class="inline-block py-4 px-4 text-sm font-medium text-center   rounded-t-lg"
                      :class="[selectedCat === 'popular'? 'bg-gray-100' : '', selectedCat === 'popular'? 'text-blue-600' : 'text-gray-500']"
              >
                Popular
              </button>
            </li>
            <li class="mr-2">
              <button @click="switchActiveCategory('trending')"
                      class="inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg hover:text-gray-600
                 hover:bg-gray-50"
                      :class="[selectedCat === 'trending'? 'bg-gray-100' : '', selectedCat === 'trending'? 'text-blue-600' : 'text-gray-500']"
              >Trending
              </button>
            </li>
            <li class="mr-2">
              <button @click="switchActiveCategory('upcoming')"
                      class="inline-block py-4 px-4 text-sm font-medium text-center  rounded-t-lg
                 hover:text-gray-600 hover:bg-gray-50"
                      :class="[selectedCat === 'upcoming'? 'bg-gray-100' : '', selectedCat === 'upcoming'? 'text-blue-600' : 'text-gray-500']"
              >
                UpComing
              </button>
            </li>
          </ul>
          <keep-alive>
            <component :is="activeMovieCategory"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "../common/BreadCrumbs";
import PopularShows from "./PopularShows";
import TrendingShows from "./TrendingShows";
import UpcomingShows from "./UpcomingShows";


export default {
  name: "Shows",
  components: {
    BreadCrumbs,
    PopularShows,
    TrendingShows,
    UpcomingShows
  },
  data() {
    return {
      selectedCat: 'popular',
      active: {},
      inactive: {}
    }
  },
  computed: {
    activeMovieCategory() {
      return this.getMovieComponent();
    }
  },
  methods: {
    getMovieComponent() {
      switch (this.selectedCat) {
        case 'upcoming':
          return UpcomingShows;
        case 'trending':
          return TrendingShows;
        case 'popular':
          return PopularShows;
        default:
          return PopularShows;
      }
    },
    switchActiveCategory(category) {
      this.selectedCat = category;
    }
  }
}
</script>

<style scoped>

</style>