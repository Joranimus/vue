<template>
    <div class="card">
        <div class="title">{{title}}</div>
        <div class="circle"><div>${{price}}</div></div>
        <div class="grey">Per month</div>
        <div class="options">
            <ul>
                <li>1111</li>
                <li>2222</li>
                <li>3333</li>
            </ul>
        </div>
        <div class="button card__button">Get Stsrted</div>
        <div class="grey">30 Day One User <br>Try Our Product Now </div>
        
    </div>
</template>

<script>
export default {
    name: 'card',
    
    props: ['title', 'price'],
}
</script>

<style lang="scss">
$main: #1abc9c;
.card{
    display: inline-block;
    background: #fff;
    width: 360px;
    padding: 45px 0;
    text-align: center;
    font-size: 16px;
    &__button{
        background: $main;
        margin-bottom: 30px;
    }
}
.title{
    text-transform: uppercase;
    font-size: 20px;

}.circle{
    height: 130px;
    width: 130px;
    border: 2px solid grey;
    border-radius: 50%;
    margin: 25px auto;
    font-size: 29px;
    padding: auto;
    display: flex;
    align-items: center;
    justify-content: center;
} 
li {
    list-style-type: none; /* Убираем маркеры */
}
ul {
    padding-left: 0; /* Сдвигаем список влево */
}

</style>