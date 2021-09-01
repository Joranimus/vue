<template>
<div>
    <div  class="card" :class="type">
        <div class="title">{{title}}</div>
        <div class="circle" :class="type"><div>${{price}}</div></div>
        <div class="description" :class="type">Per month</div>
        <div class="options">
            <ul :class="type">
                <li v-for="item in cardParams" :key="item.id">
                    <span class="card__title">{{item.title}}</span>
                    <span class="card__value"> {{item.value}}</span>
                </li>
            </ul>
        </div>
        <div class="button card__button" :class="type">Get Stsrted</div>
        <div class="description" :class="type">30 Day One User <br>Try Our Product Now </div>
    </div>
</div>

</template>

<script>

export default {
    name: 'card',

    data() {
        return {
            check: false,
        }
    },
    props: {
        cardParams: Array,
        fnColor: String,
        bgcolor: String,
        title: String,
        price: String,
        type: String
    },
}
</script>

<style lang="scss">
$main: #1abc9c;
.card{
    display: inline-block;
    width: 360px;
    padding: 40px 0;
    text-align: center;
    font-size: 16px;
    box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0);
    transition: box-shadow 0.3s;
    &.white{
        background: #fff;
    }
    &.green{
        background: $main;
    }
    &__button{
        margin-bottom: 30px;
        &.white{
            color: #fff;
            background: $main;
        }
        &.green{
            background: #fff;
            color: $main;
        }
    }
    &:hover{
        box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.2);
    }
    &__title{
        font-weight: bold;
    }
}
.title{
    text-transform: uppercase;
    font-size: 20px;

}.circle{
    height: 130px;
    position: relative;
    width: 130px;
    border: 2px solid grey;
    border-radius: 50%;
    margin: 20px auto;
    font-size: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before{
        content: "";
        position: absolute;
        left: 1px;
        top: 1px;
        width: calc(100% - 6px);
        height: calc(100% - 6px);
        border: 2px solid grey;
        border-radius: 50%;
    }
    &.white{
        background: #f8f9fb;
    }
    &.green{
        color: #fff;
        border-color: #fff;
        &:before{
           border-color: #fff; 
        }
    }
}
.description{
    line-height: 1.5em;
    &.white{
        color: #bebfc1;
    }
    &.green{
        color: #fff;
    }
}
li {
    list-style-type: none;
    margin-bottom: 20px;
}
ul {
    padding-left: 0;
    font-size: 16px;
    &.green{
        color: #fff;
    }
}

</style>