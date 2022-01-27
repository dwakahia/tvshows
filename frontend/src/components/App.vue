<template>
<div>
  <h1>DEV TWO</h1>
  <img :src="getImgUrl('pic.jpeg')" alt="">
</div>
</template>

<script>
export default {
  name: "App",
  methods: {
    getImgUrl: imgName => {
      let urlName = imgName.replace(/\s/g, '')
      return require(`../assets/images/${urlName}`).default
    }
  }
}
</script>

<style scoped>

</style>