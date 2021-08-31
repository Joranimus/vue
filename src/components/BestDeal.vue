<template>

    <div class="wrap">
        <div class="container">
            <img src="../assets/ico.png" alt="">
            <div class="subtitle">PRODUCT PACKAGES</div>
            <div class="title"> Select your <span>best deal !</span></div>
            <div class="card__wrap">

                <card title="basic" price="56" :style="{background: activeColor}"></card>
                <card title="premium" price="99"></card>
                <card title="ultimate" price="149"></card>

            </div>
        </div>
    </div>
    
</template>

<script>
import card from './offerCard.vue'

export default {
    name: "BestDeal",
    components: {
        card
    },
    props: {
        activeColor: 'red',
        activColor: 'red'
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
</style>