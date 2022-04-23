<template>
  <body>
  <div>
    <div>
      <button @click="count++">{{ count }}</button>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0
    }
  },
  methods: {

  }
}
</script>
<style>

</style>