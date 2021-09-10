<template>
  <div id="app"> 
    
    <BestDeal/>
    <contactUs/>
    <filterExample>
        <template v-slot:afterField>
        <h1>Зде страницы</h1>
      </template>
       <template v-slot:afterList>
         <BestDeal/>
      </template>

    </filterExample>
  
  </div>
</template>


<script>
import BestDeal from './components/BestDeal.vue'
import contactUs from './components/contactUs.vue'
import filterExample from './components/filterExample.vue'

export default {
  name: 'App',
  components: {
    BestDeal,
    contactUs,
    filterExample
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');
@import "vue-select/src/scss/vue-select.scss";

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


// helpers
._f {
  display: flex;
}

._f-column {
  display: flex;
  flex-direction: column;
}

._f-wrap {
  flex-wrap: wrap;
}

._f-grow {
  flex-grow: 1;
}

._i-start {
  align-items: flex-start;
}

._i-center {
  align-items: center;
}

._i-end {
  align-items: flex-end;
}

._i-base {
  align-items: baseline;
}

._j-around {
  justify-content: space-around;
}

._j-between {
  justify-content: space-between;
}

._j-center {
  justify-content: center;
}

._j-end {
  justify-content: flex-end;
}

._no-shrink {
  flex-shrink: 0;
}

._hidden {
  display: none!important;
}

._overflow-wrap {
  overflow-y: hidden;
  overflow-x: auto;
}

._trans-c {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

._clearfix:before, ._clearfix:after {
  content: " ";
  display: table;
}

._clearfix:after {
  clear: both;
}

._text-c {
  text-align: center;
}

._text-l {
  text-align: left;
}

._text-r {
  text-align: right;
}

._tdn {
  text-decoration: none;
}

._fw-n {
  font-weight: 400;
}

._fw-m {
  font-weight: 500;
}

._fw-b {
  font-weight: 700;
}

._fz-8 {
  font-size: 8px;
}

._fz-11 {
  font-size: 11px;
}

._fz-12 {
  font-size: 12px;
}

._fz-14 {
  font-size: 14px;
}

._fz-16 {
  font-size: 16px;
}

._fz-18 {
  font-size: 18px;
}

._fz-20 {
  font-size: 20px;
}

._fz-22 {
  font-size: 22px;
}

._mtb-auto {
  margin-top: auto;
  margin-bottom: auto;
}

._mlr-auto {
  margin-left: auto;
  margin-right: auto;
}

._ml-auto {
  margin-left: auto;
}
._ml-15 {
  margin-left: 15px;
}

._mr-auto {
  margin-right: auto;
}

._m-none {
  margin: 0;
}

._mb-0 {
  margin-bottom: 0!important;
}

._mb-15 {
  margin-bottom: 15px;
}

._plr-15 {
  padding-left: 5px;
  padding-right: 5px;
}

._mb-20 {
  margin-bottom: 20px;
}

._mb-25 {
  margin-bottom: 25px;
}

._p-rel {
  position: relative;
}
._bg-w {
  background-color: #fff;
}

.object-fit {
  background-size: cover;
  background-position: center center;
  &.compat-object-fit {
    &>img {
      opacity:0;
    }
  }
  &>img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

._p-none {
  pointer-events: none;
}
* {
  font-family: 'Ubuntu', sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1;
  vertical-align: baseline;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
  &::before,&::after {
    box-sizing: border-box;
  }
}
</style>
