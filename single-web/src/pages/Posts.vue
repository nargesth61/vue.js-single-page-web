<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-3 g-3" v-for="post in posts" :key="post.id">
                <AppPost :post="post"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AppPost from '../components/PostsView.vue'
import { ref } from 'vue';
export default {
    name: 'PostsShow',
    components:{
        AppPost:AppPost
    },
    
    setup() {
        const posts = ref([]);

        function getUser() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                    // handle success
                    posts.value =response.data;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
        getUser();

        return {posts}
    }
}
</script>

<style></style>