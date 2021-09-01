<template>

    <div class="wrap">
        <div class="container">
            <img src="../assets/ico.png" alt="">
            <div class="subtitle">PRODUCT PACKAGES</div>
            <div class="title"> Select your <span>best deal !</span></div>
            <div class="card__wrap">
                
                <card
                    v-for="item in data"
                    :key="item.title"
                    :title="item.title" :price="item.price" :cardParams="item.cardParams" :type="item.type"
                />
            </div>
            <div class="pin">Want to know more ? <a href="#">read article,</a> check <a href="#">FAQ</a>, or <a href="#">contact us</a></div>
        </div>
        
    </div>
    
</template>

<script>
import card from './offerCard.vue'
const axios = require('axios');

export default {
    name: "BestDeal",
    components: {
        card
    },
    data() {
        return{
            data:[],
        }
        
    }, 
    //props:['data'],
    created(){
        axios.get('/mock/example.json')
        .then(response => {
            this.data = response.data
            }) 

        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }
}

</script>

<style lang="scss" scoped>
$main: #1abc9c;
.wrap{
    background: #f8f9fb;
    padding: 150px 0 100px;
    text-align: center;
}
.subtitle{
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 5px;
    color: #a5a5a5;
    margin: 40px 0 20px;
    font-weight: bold;
}
.title{
    font-size: 61px;
    margin-bottom: 60px;
}
span{
    color: $main;
}
.card__wrap{
    display: flex;
    justify-content: space-between;
}
.pin{
    font-size: 15px;
    color: #a5a5a5;
    margin-top: 15px;
    font-weight: 300;
}
</style>