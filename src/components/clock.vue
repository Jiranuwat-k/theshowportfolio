<template>
  <div id="clock">
      <slot></slot>{{time}}
  </div>
</template>

<script>
import moment from 'moment'
export default {
    name:"clock",
    data() {
        return {
            time:""
        }
    },
    mounted(){
        setInterval(()=>{
            this.time = moment(Date()).format('MM/DD/YYYY hh:mm:ss')
        },100)
    }
}
</script>

<style>

</style>