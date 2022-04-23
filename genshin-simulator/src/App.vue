<template>
  <body>
  <div>
    <div class="bannerName">
      <el-button @click="bannerChange()">{{ banner[counter] }}</el-button>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      banner: ['Hu-Tao', 'Ganyu', 'Venti', 'Kamisato Ayato', 'Kamisato Ayaka', 'Sangonomiya Kokomi', 'Kaedehara Kazuha', 'Raiden Shogun'],
      counter: 0,
    }
  },
  methods: {
    bannerChange() {
      this.counter++
      if (this.counter >= this.banner.length) {
        this.counter = 0;
      }
      return this.banner[this.counter];
    }
      },
}
</script>
<style>
</style>