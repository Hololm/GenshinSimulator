<template>
  <body>
  <div>
    <button @click="count++">{{ count }}</button>
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