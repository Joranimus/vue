<template>
    <div class="wrap">
        <div class="container _plr-15">
            <img src="../assets/contactico.png" alt="">
            <div class="subtitle">contact us</div>
            <div class="title"> Say <span>Hello !</span></div>
            <div class="_f _j-between">
                <div class="form__wrap">
                    <contactForm/>
                </div>

                <div class="map">Google Map</div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import contactForm from './contactForm.vue'
export default {
    components: {
        contactForm
    },
    setup() {
        
    },
}
</script>

<style lang="scss">
$main: #1abc9c;
.wrap{
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
.map{
    display: inline-block;
    height: 470px;
    width: 400px;
    background: rgb(255, 224, 167);
}

</style>