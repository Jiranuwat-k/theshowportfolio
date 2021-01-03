<template>
  <div id="page1">
    <h1>page1</h1>
    <button @click="click">click Me</button>
    <img :src="img" v>
  </div>
</template>

<script>
export default {
  name: "page1",
  data() {
    return {
      img:"https://yt3.ggpht.com/yti/ANoDKi5e7RiVpxAFwB4YN6EF4ylA-NeC7ADnponjUXUr=s88-c-k-c0x00ffffff-no-rj-mo"
    };
  },
  methods: {
    click() {
      alert("hi");
    },
  },
};
</script>

<style></style>
