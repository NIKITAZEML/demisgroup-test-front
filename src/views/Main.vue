<template>
    <main>
        <div class="container">
            <b-media right-align vertical-align="center">
                <h5 class="mt-0 mb-1">Media object</h5>
                <p class="mb-0">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                    nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </p>
            </b-media>
        </div>
    </main>
</template>

<script>
    import axios from "axios";

    export default {
        data(){
          return{
              news: [],
            }
        },
        beforeCreate() {
            axios.get(`http://127.0.0.1:8000/api/news?=&3/`, )
                .then(response => {
                    console.log(response.data)
                    this.news = response.data
                })
        }
    }
</script>

<style scoped>

</style>