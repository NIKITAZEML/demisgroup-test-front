<template>
    <div class="enter">
        <label class="label-enter" for="input-email">email</label>
        <input type="text" class="input" id="input-email"
               @focus="focusEmail = !focusEmail"
               :class="{ clicked :  focusEmail}"
                @blur="focusEmail = !focusEmail"
                v-model="email"
                @input="setEmail">
    </div>
</template>

<script>
export default {
    name: "InputEmail",
    data () {
        return{
            focusEmail: false,
        }
    },
    methods:{
        setEmail(){
            this.$emit('setLogin', this.email)
        }
    },
    props:{
        email: String,
    }
}
</script>
