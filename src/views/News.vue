<template>
    <main>
        <h2 class="heading__news-page">
            Новости
        </h2>
        <div class="container">
            <b-media class="element__news" right-align vertical-align="center" v-for="elem in news" :key="elem.id">
                <div class="heading">
                    <h5 class="mt-0 mb-1">{{ elem.heading }}</h5>
                    <div class="date__element__news">
                        {{ elem.date }}
                    </div>
                </div>
                <p class="mb-0">
                    {{ elem.text }}
                </p>
            </b-media>
        </div>
    </main>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                news: [],
            }
        },
        beforeCreate() {
            axios.get(`http://127.0.0.1:8000/api/news?=&3/`,)
                .then(response => {
                    console.log(response.data)
                    this.news = response.data
                })
        }
    }
</script>

<style scoped>
    .heading__news-page{
        text-align: center;
        margin-top: 1vw;
    }
    
    .heading {
        display: flex;
        justify-content: space-between;
    }

    .element__news{
        margin-top: 3vw;
    }
</style>