<template>
    <div class="enter">
        <label class="label-enter" for="input-address">Адрес</label>
        <input type="text" class="input" id="input-address"
               @focus="focusAddress = !focusAddress"
               :class="{ clicked :  focusAddress}"
               @blur="focusAddress = !focusAddress"
               v-model="address"
               @input="setAddress">
    </div>
</template>

<script>
    export default {
        name: "InputAddress",
        data() {
            return {
                focusAddress: false,
            }
        },
        methods: {
            setAddress() {
                this.$emit('setAddress', this.address)
            }
        },
        props: {
            address: String,
        }
    }
</script>

<style scoped>

</style>