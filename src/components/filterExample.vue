<template>
    <div>
        <!-- <input type="number" v-model="test"> -->
        <!-- <div>result: {{result}}</div> -->
        <div v-for="item in result" :key="item">{{item}}</div>
        <slot name="afterList"></slot>
        <input type="text" v-model="searchStr">
        <slot name="afterField"></slot>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // test: 0,
            data: [
                '1','2','3','4','5','6','7','8','9','10','232','5135','67','234','123'
                ],
            searchStr: ''
            // result: null
        }
    },
    // watch: {
    //     searchStr: function (val) {
    //         this.data = this.data.filter(a => a.includes(val));
    //     },
    // },
    computed: {
        result: function(){
            if (this.searchStr.length){
                  return  this.data.filter(a => a.includes(this.searchStr))
            } else {
                return this.data
            }
        }
    }
}
</script>