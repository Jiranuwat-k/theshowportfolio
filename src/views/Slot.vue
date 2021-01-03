<template>
  <div id="Slot">
      <clock>
          เวลาปัจจุบัน :
      </clock>
  </div>
</template>

<script>
import clock from '@/components/clock.vue'
export default {
    name:"slot",
    components:{
        clock
    }
}
</script>

<style>

</style>