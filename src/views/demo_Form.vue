<template>
  <div id="form">
      <form @submit.prevent="click">
          <div>
              <label for="first_name">Firstname</label>
              <input type="text" v-model.trim="access.first_name" name="first_name" id="first_name">
          </div>
          <div>
              <label for="last_name">lastname</label>
              <input type="text" v-model.trim="access.last_name" name="first_name" id="first_name">
          </div>
          <button type="submit" @click="access = ''">submit</button>
      </form>
      <div>#spy {{JSON.stringify(access)}}</div>
  </div>
</template>

<script>
export default {
    name:"_Form",
    data() {
        return {
            access:{
                first_name:"",
                last_name:""
            }
        }
    },
    methods: {
        click(){
            // event.preventDefault();
        }
    },
}
</script>

<style>

</style>