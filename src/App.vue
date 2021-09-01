<template>
  <div id="app"> 
    
    <BestDeal/>
  
  </div>
</template>


<script>
import BestDeal from './components/BestDeal.vue'

export default {
  name: 'App',
  components: {
    BestDeal
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');

$main: #1abc9c;
body{
  margin: 0;
}
.button{
  padding: 20px 40px;
  display: inline-block;
  cursor: pointer;
  &:hover{
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);
  }
}
.container{
  width: 1120px;
  margin: 0 auto;
}
#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a{
  text-decoration: none;
  color: $main;
}
</style>
