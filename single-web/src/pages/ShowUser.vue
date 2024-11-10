<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-3 g-3">
                <AppUsers :user="user"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AppUsers from '../components/Users.vue'
import { ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
    name: 'ShowUser',
    components:{
        AppUsers:AppUsers
    },
    
    setup() {
        const user = ref([]);
        const route = useRoute();

        function getUser() {
            axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
                .then(function (response) {
                    // handle success
                    user.value =response.data;
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

        return {user}
    }
}
</script>

<style></style>