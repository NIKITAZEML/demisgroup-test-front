<template>
    <div class="window-auth borr-10">
        <div class="auth__entrance-heading">
            Форма обратной связи
        </div>
        <form @submit.prevent="sendData">
            <div class="areas-line__window-auth">
                <div class="input-group">
                     <enter-login :login="login" @setLogin="setLogin"></enter-login>
                    <div class="errors" v-if="$v.login.$dirty">
                        <div class="error" v-if="!$v.login.required">Поле обязательно</div>
                        <div class="error" v-if="!$v.login.minLength">Минимальная длина поля - 4 символа</div>
                    </div> 
                </div>
            
                <div class="input-group">
                    <enter-address :address="address" @setAddress="setAddress"></enter-address>
                    <div class="errors" v-if="$v.address.$dirty">
                        <div class="error" v-if="!$v.address.required">Поле обязательно</div>
                        <div class="error" v-if="!$v.address.minLength">Минимальная длина поля 10 символов</div>
                        <div class="error" v-if="!$v.address.maxLength">Максимальная длина поля 50 символов</div>
                    </div> 
                </div>   
            </div>
            <div class="areas-line__window-auth">
                <div class="input-group">
                    <enter-phone :phone="phone" @setPhone="setPhone"></enter-phone>
                     <div class="errors" v-if="$v.phone.$dirty">
                        <div class="error" v-if="!$v.phone.required">Поле обязательно</div>
                        <div class="error" v-if="!$v.phone.minLength">Минимальная длина поля 11 символов</div>
                        <div class="error" v-if="!$v.phone.maxLength">Максимальная длина поля 13 символов</div>
                    </div> 
                </div>

                <div class="input-group">
                    <enter-email :email="email" @setEmail="setEmail"></enter-email>
                    <div class="errors" v-if="$v.email.$dirty">
                        <div class="error" v-if="!$v.email.required">Поле обязательно</div>
                        <div class="error" v-if="!$v.email.minLength">Минимальная длина поля 4 символа</div>
                        <div class="error" v-if="!$v.email.email">Введите корректный email</div>
                    </div> 
                </div>
                
            </div>
            <div class="main-area__window-auth">
                <enter-review :review="review" @setReview="setReview"></enter-review>
                 <div class="errors" v-if="$v.review.$dirty">
                        <div class="error" v-if="!$v.review.required">Поле обязательно</div>
                        <div class="error" v-if="!$v.review.maxLength">Максимальная длина поля - 300 символов</div>
                    </div> 
                <button class="entry-btn" type="submit" >
                    Отправить
                </button>
                <div class="successfully__form" v-if="isSuccessfully">
                    Данные успешно отправлены
                </div>
                <div class="unsuccessfully__form"  v-if="isUnsuccessfully">
                    Введенные данные некорректны
                </div>
            </div>
        </form>
        
    </div>
</template>

<script>
import EnterLogin from './Inputs/EnterLogin';
import EnterPhone from './Inputs/EnterPhone';
import EnterReview from "./Inputs/EnterReview";
import EnterEmail from "./Inputs/EnterEmail";
import EnterAddress from "./Inputs/EnterAddress";
import axios from "axios";
import { required, minLength, maxLength, email} from 'vuelidate/lib/validators'

export default {
    name: "AuthWindow",
    data(){
      return{
          login: '',
          phone: '',
          review: '',
          email: '',
          address: '',
          errors: [],
          isSuccessfully: false,
          isUnsuccessfully: false,
      }
    },
    validations: {
        login: {
            required,
            minLength: minLength(4)
        },
        phone: {    
            required,
            minLength: minLength(11),
            maxLength: maxLength(13)
        },
        email: {
            minLength: minLength(4),
            required,
            email
        }, 
        address: {
            required,
            minLength: minLength(10),
            maxLength: maxLength(50)
        },
        review: {
            required,
            maxLength: maxLength(300)
        }
    },    
    methods:{
        setLogin(newLogin){
            this.login = newLogin;
            this.$v.login.$touch()
        },
        setPhone(newphone){
            this.phone = newphone;
            this.$v.phone.$touch()
        },
        setReview(newReview){
            this.review = newReview;
            this.$v.review.$touch()
        },
        setEmail(newEmail){
            this.email = newEmail;
            this.$v.email.$touch()
        },
        setAddress(newAddress){
            this.address = newAddress;
            this.$v.address.$touch()
        },
        sendData(){
            if(!this.$v.$invalid) {
                axios.post(`http://127.0.0.1:8000/api/review/`, {
                    name: this.login, address: this.address, phone: this.phone, email: this.email, review: this.review
                })
                    .then(response => {
                        console.log(response)
                    })
                this.isSuccessfully = !this.isSuccessfully;
                setTimeout(()=>{
                    this.isSuccessfully = !this.isSuccessfully;
                }, 3000)

            } else{
                this.isUnsuccessfully = !this.isUnsuccessfully;
                setTimeout(()=>{
                    this.isUnsuccessfully = !this.isUnsuccessfully;
                }, 3000)
            }
        }
    },
    components:{
        EnterReview,
        EnterLogin,
        EnterPhone,
        EnterEmail,
        EnterAddress
    }
}
</script>

<style scoped>
    .window-auth{
        width: 60.417vw;
        height: 35vw;
        border: .1vw rgba(39, 39, 39, .1) solid;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
    }

    .auth__entrance-heading{
        margin-bottom: 1.389vw;
        margin-top:1.389vw; ;
        font-weight: 500;
        font-size: 1.25vw;
    }
    
    .entry-btn{
        color: #fff;
        border-radius: .347vw;
        width: 12.222vw;
        height: 3.611vw;
        background-color: #BA1735;
        border: 0;
        transition: .2s;
    }

    .entry-btn:hover{
        background-color: #ffffff;
        color: #BA1735;
        border: #BA1735 .1vw solid;
    }

    .areas-line__window-auth{
        display: flex;
        width: 50vw;
        justify-content: space-between;
    }

    .main-area__window-auth{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .errors{
        color: red;
        font-size: 1vw;
    }

    .input-group{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .successfully__form{
        color: #16c416;
    }

    .unsuccessfully__form{
        color: red;
    }

    .successfully__form, .unsuccessfully__form{
        font-size: 1.5vw;
    }

    @media screen and (max-width: 768px) {
        .window-auth{
            width: 99vw;
            height: 100vh;
            justify-content: center;
            align-items: center;
        }

        .auth__entrance-heading{
            margin-top: 5vw;
            margin-bottom: 5vw;
            font-size: 2.344vw;
        }

        .entry-btn{
            align-self: center;
            font-size: 2.604vw;
            border-radius: .651vw;
            width: 22.917vw;
            height: 6.771vw;
        }

        .areas-line__window-auth{
            flex-direction: column;
        }

        .main-area__window-auth{
            align-items: center;
        }

        .errors{
            font-size: 2vw;
        }
    }

    @media screen and (max-width: 320px) {
        .window-auth{
            width: 95vw;
            height: 100vh;
            position: static;
            top: 0;
            left: 0;
            margin-right: 2.5%;
            transform: none;
        }


        .auth__entrance-heading{
            margin-top: 15vw;
            margin-bottom: 6.25vw;
            font-size: 5.625vw;
        }

        .entry-btn{
            border-radius: 1.563vw;
            font-size: 6.25vw;
            width: 55vw;
            height: 16.25vw;
            align-self: center;
        }

        .errors{
            font-size: 4vw;
            text-align: center;
        }

        .input-group{
            width: 100%;
            margin-left: 20vw;
        }
    }
</style>

