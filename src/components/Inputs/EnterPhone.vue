<template>
    <div class="enter">
        <label class="label-enter" for="input-phone">Телефон</label>
        <input type="number" class="input" id="input-phone"
               @focus="focusphone = !focusphone"
               :class="{ clicked :  focusphone}"
               @blur="focusphone = !focusphone"
               v-model="phone"
               @input="setphone">
    </div>
</template>

<script>
    export default {
        name: "Enterphone",
        data() {
            return {
                focusphone: false,
            }
        },
        props: {
            phone: String,
        },
        methods: {
            setphone() {
                this.$emit('setPhone', this.phone)
            }
        },
    }
</script>

