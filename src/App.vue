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

.button{
  padding: 20px 40px;
  display: inline-block;
}
.container{
  width: 1120px;
  margin: 0 auto;
}
#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
}
.grey{
    color: #bebfc1;
}
</style>
