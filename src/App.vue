<template>
  <div>
    <!-- <Navbar/> -->
    <router-view></router-view>
    <span>{{time}}</span>
    <Footer @onclock="onclock" copyright="&copy; copyright 2020 by theshowportfolio"/>
    
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import moment from 'moment'
export default {
  name: "app",
  components:{
    Navbar,
    Footer
  },
  data() {
    return {
      time:"",
    }
  },
  methods:{
    onclock(value){
      this.time = moment(value).format('MM/DD/YYYY hh:mm:ss')
    }
  },
};
</script>

<style>
*{
  margin: 0;
}
</style>
