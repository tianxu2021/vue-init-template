<template>
  <div>
    <a-button @click="demo">测试</a-button>
  </div>
</template>

<script>
export default {
  name: "start",
  data() {
    return {};
  },
  methods: {
    demo() {
      console.log(this.$store.state.user);
    },
  },
};
</script>

<style></style>
