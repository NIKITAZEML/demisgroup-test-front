<template>
    <main>
        <h2 class="heading__page">
            Главная
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
                    {{ elem.text }}...
                </p>
            </b-media>
            <div class="main-links">
                <router-link class="main-link" to="/news">
                    Все новости
                </router-link>
                <router-link class="main-link" to="/review-form">
                    Обратная связь
                </router-link>
            </div>
        </div>
    </main>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Main",
        data() {
            return {
                news: [],
            }
        },
        beforeCreate() {
            axios.get(`http://127.0.0.1:8000/api/news?=&3/`,)
                .then(response => {
                    let res = response.data;

                    res = res.slice(0, 3);

                    res.forEach(elem => {
                        elem.text = elem.text.substr(0, 170);
                    })

                    this.news = res;
                })

        }
    }
</script>

<style scoped>
    .main-links {
        margin-top: 2vw;
        display: flex;
        flex-direction: column;
    }

    .main-link {
        margin-bottom: .7vw;
    }
</style>