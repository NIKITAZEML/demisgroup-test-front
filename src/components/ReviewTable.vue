<template>
    <div class="review-table">
        <div>
            <b-table striped hover :items="items"></b-table>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ReviewTable",
        data() {
        },
        props: {
            items: Array,
        }
    }
</script>

<style scoped>
    .review-table {
        position: inherit;
        top: 40vw;
        font-size: .9vw;
    }

    @media screen and (max-width: 768px) {
        .review-table {
            top: 230vw;
            font-size: 2vw;
        }
    }

    @media screen and (max-width: 320px) {
        .review-table {
            display: none;
        }
    }

</style>