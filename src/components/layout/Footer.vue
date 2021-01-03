<template>
  <div id="Footer">
      <span class="Footer"><p>{{copyright}}</p></span>
  </div>
</template>

<script>
export default {
    name:"Footer",
    mounted(){
        setInterval(()=>{
            this.$emit("onclock", Date())
        },100)
    },
    props:[
       "copyright"
    ]
}
</script>

<style scoped>
#Footer{
    width: 100%;
    height: 40px;
    background-color: #222;

}
span{
    color: #ccc;
} 
p{
    padding-top: 10px;
    padding-left: 10px;
}
</style>