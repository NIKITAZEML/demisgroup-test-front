<template>
    <div class="enter">
        <label class="label-enter" for="input-login">ФИО</label>
        <input type="text" class="input" id="input-login"
               @focus="focusLogin = !focusLogin"
               :class="{ clicked :  focusLogin}"
                @blur="focusLogin = !focusLogin"
                v-model="login"
                @input="setLogin">
    </div>
</template>

<script>
export default {
    name: "InputLogin",
    data () {
        return{
            focusLogin: false,
        }
    },
    methods:{
        setLogin(){
            this.$emit('setLogin', this.login)
        }
    },
    props:{
        login: String,
    }
}
</script>

