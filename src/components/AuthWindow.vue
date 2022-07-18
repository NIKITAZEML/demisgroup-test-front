<template>
    <div class="window-auth borr-10">
        <div class="auth__entrance-heading">
            Форма отзывов
        </div>
        <form @submit.prevent="sendData">
            <div class="areas-line__window-auth">
                <enter-login :login="login" @setLogin="setLogin"></enter-login>
                <enter-addresss :address="address" @setAddress="setAddress"></enter-addresss>
            </div>
            <div class="areas-line__window-auth">
                <enter-phone :phone="phone" @setphone="setphone"></enter-phone>
                <enter-email :email="email" @setEmail="setEmail"></enter-email>
            </div>
            <div class="main-area__window-auth">
                <enter-review :review="review" @setReview="setReview"></enter-review>
                <button class="entry-btn" type="submit" >
                    Отправить
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import EnterLogin from './Inputs/EnterLogin';
import EnterPhone from './Inputs/EnterPhone';
import EnterReview from "./Inputs/EnterReview";
import EnterEmail from "./Inputs/EnterEmail";
import EnterAddresss from "./Inputs/EnterAddress";
import axios from "axios";

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
      }
    },
    methods:{
        setLogin(newLogin){
            this.login = newLogin;
        },
        setphone(newphone){
            this.phone = newphone;
        },
        setReview(newReview){
            this.review = newReview;
        },
        setEmail(newEmail){
            this.email = newEmail;
        },
        setAddress(newAddress){
            this.email = newAddress;
        },
        sendData(){
            axios.post(`http://127.0.0.1:8000/api/review/`, {
                name: this.login, phone: this.phone, review: this.review
            })
            .then( response => {
                console.log(response)
            })
        }
    },
    components:{
        EnterReview,
        EnterLogin,
        EnterPhone,
        EnterEmail,
        EnterAddresss
    }
}
</script>

<style scoped>
    .window-auth{
        width: 60.417vw;
        height: 33vw;
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
        background-color: #1390E5;
        border: 0;
        transition: .2s;
    }

    .entry-btn:hover{
        background-color: #ffffff;
        color: black;
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

    @media screen and (max-width: 768px) {
        .window-auth{
            width: 66.406vw;
            height: 90.708vw;
        }

        .auth__entrance-heading{
            margin-bottom: 2.604vw;
            font-size: 2.344vw;
        }

        .entry-btn{
            font-size: 2.604vw;
            border-radius: .651vw;
            width: 22.917vw;
            height: 6.771vw;
        }

        .areas-line__window-auth{
            flex-direction: column;
        }

        .main-area__window-auth{
            align-items: flex-start;
        }
    }

    @media screen and (max-width: 320px) {
        .window-auth{
            margin-top: 20vw;
            width: 95vw;
            height: 262vw;
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
        }
    }
</style>

