<template>
  <div id="nav">
    <li><router-link to="/">Home</router-link></li>
    <li v-for="(item) in name" :key="item"><router-link :to=item>{{item}}</router-link></li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:[
        'page1',
        'about',
        'demo_Form',
        'slot',
        'loop'
      ]
    }
  }
}
</script>

<style scoped>
li{
  /* display: none; */
  display: inline;
  
  margin: 4px;  
}
a{
  text-decoration: none;
}
</style>