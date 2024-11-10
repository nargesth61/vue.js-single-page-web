<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-3 g-3">
                <AppPost :post="post"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AppPost from '../components/PostsView.vue'
import { ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
    name: 'ShowPost',
    components:{
        AppPost:AppPost
    },
    
    setup() {
        const post = ref([]);
        const route = useRoute();

        function getUser() {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
                .then(function (response) {
                    // handle success
                    post.value =response.data;
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

        return {post}
    }
}
</script>

<style></style>