<template>
  <body>
  <video id="wish-vid" autoplay="true" src="../assets/video/5starwish-single.mp4"></video>
  </body>
</template>

<script>

export default {
  name: "Wish10",
  data() {
    return {
      pity: 0
    }
  },
  methods: {
    wishGenerator() {
      let video = document.getElementById('wish-vid');
      video.play();
    }
  }
}
</script>

<style scoped>

</style>