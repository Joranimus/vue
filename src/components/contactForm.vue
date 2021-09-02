<template>
    <div>
        <div class="_f _j-between">
            <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                <input class="form__input" v-model.trim="$v.name.$model" placeholder="Your Name"/>
                <div class="error" v-if="$v.name.$invalid && $v.name.$dirty">Field is required</div>
                <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
            </div>
        
            <div class="form-group" :class="{ 'form-group--error': $v.form.name.$error }">
                <input class="form__input" v-model.trim="$v.form.name.$model" type="text" name="name" placeholder="Your Name">
                <div class="error" v-if="!$v.form.name.required">Field is required</div>
                <div class="error" v-if="!$v.form.name.minLength">Name must have at least {{$v.form.name.$params.minLength.min}} letters.</div>
            </div>


            <div class="form-group" :class="{ 'form-group--error': $v.mail.$error }">
                <input class="form__input" v-model.trim="$v.mail.$model" type="email" name="mail" placeholder="Email">
                <div class="error" v-if="!$v.mail.required">Field is required</div>
                <div class="error" v-if="!$v.mail.email">Incorrect format.</div>
            </div>
            
        </div>
        
        
        <select name="select" v-model="$v.country.$model" :class="{ 'select--error': $v.country.$error }">
            <option disabled selected >Choose country</option>
            <option v-for="country in countries" :key="country.value" :value="country.value" >{{country.name}}</option>
        </select>
        
        <textarea v-model="$v.text.$model" name="text" cols="80" rows="10" :class="{ 'text--error': $v.text.$error }"></textarea>
        <div class="_mb-15">Do you like our service ?</div>
        
        <div class="form-group " :class="{ 'form-group--error': $v.like.$error }">
                <label class="radio">
                    YES
                    <input type="radio" name="like" value="yes" v-model="like">
                    <span></span>
                </label>
                <label class="radio">
                    NO
                    <input type="radio" name="like" value="no" v-model="like">
                    <span></span>
                </label>
                <div class="error" v-if="!$v.like.required">Field is required</div>
        </div>
        


        <div class="button" @click="submit" :disabled="submitStatus === 'PENDING'">Submit!</div>
        <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>

    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email} from 'vuelidate/lib/validators'
export default {
    mixins:[validationMixin],
    data(){
        return{
            name: '',
            mail: '',
            country: 'Choose country',
            text: '',
            like: '',
            submitStatus: null,
            form:{
                asd: {
                        asdasdd: {
                            asd: 'asd'
                        }
                },
                name: '',
                mail: '',
                country: '',
                text: '',
                like: '',

            },
            countries:[
                {name: 'Ukraine', value: 'ua'},
                {name: 'Poland', value: 'pl'},
                {name: 'Germany', value: 'de'},
                {name: 'Russia', value: 'ru'},
                {name: 'Belarus', value: 'by'},
            ]
        }
    },
    validations: {
        form: {
            name: {
                required,
                minLength: minLength(4),
            },
        },
        name: {
                required,
                minLength: minLength(4),
        },
        mail: {
                required,
                email,
        },
        country: {
            required
        },
        text: {
            required
        },
        like: {
            required
        },
    },
    mounted(){
console.log(this)
    },
    methods: {
        // sendRequest(){
            // axios.post('/mock/example.json',{
            //     name: this.name,
            //     email: this.email
            // })
            //         .then(response => {
            //             this.data = response.data
            //             }) 

            //         .catch(function (error) {
            //             // handle error
            //             console.log(error);
            //         })
            //         .then(function () {
            //             // always executed
            //         });
        // },
              // status(validation) {
        //     return {
        //     error: validation.$error,
        //     dirty: validation.$dirty
        //     }
        // },
        submit() {
            console.log(this)
            this.$v.$touch()
            // if (this.$v.$invalid) {
               
            // } else {
            // //  this.sendRequest();         
            // }
        }
    }
}
</script>

<style lang="scss">
$main: #1abc9c;
form{
    font-family: 'Ubuntu', sans-serif;
    height: 470px;
    width: 620px;
    input{
        height: 50px;
        width: 295px;
        border: 1px solid #ccc;
        padding: 0 12px;
        &.long{
            width: 100%;
        }
    }
    select{
        width: 100%;
        margin-bottom: 15px;
        &.select--error{
            background: rgba(255, 0, 0, 0.486);
        }
    }
    textarea{
        resize: none;
        padding: 10px;
        margin-bottom: 15px;
        &.text--error{
            background: rgba(255, 0, 0, 0.486);
        }
    }
    input[type=radio]{
        // display: none;
        width: 18px;
        height: 18px;
    }
    .button{
        background: $main;
        padding: 0;
        color: #fff;
        font-size: 20px;
        height: 50px;
        width: 295px;
    }
    
}
.form-group{
    margin-bottom: 15px;
    text-align: left;
    &--error{
        .form__input{
            border-color: red;
        }
    }
}
.error{
    margin-top: 5px;
    color: red;
}
.radio{
    display: inline-block;
    width: 49%;
    cursor: pointer;
    position: relative;
    input:checked + span{
        background-color : #000;
    }
    span{
        border-radius: 50%;
        border: 1px solid #ccc;
        width: 18px;
        height: 18px;
        position: absolute;
        left: 0;
        background: #fff;
        transition: background-color 0.3s, border 0.1s;
    }
}


</style>