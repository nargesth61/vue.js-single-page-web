<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-3 g-3" v-for="user in users" :key="user.id">
                <AppUsers :user="user"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AppUsers from '../components/Users.vue'
import { ref } from 'vue';
export default {
    name: 'IndexUser',
    components:{
        AppUsers:AppUsers
    },
    
    setup() {
        const users = ref([]);

        function getUser() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    // handle success
                    users.value =response.data;
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

        return {users}
    }
}
</script>

<style></style>