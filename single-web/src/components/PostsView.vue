<template>
  <div>
    <b-card no-body style="max-width: 20rem;">
      <template #header>
        <h4 class="mb-0"><router-link :to="{ name: 'ShowPost', params: { id: post.id } }">{{ post.userId
            }}</router-link>
        </h4>
      </template>
      <b-list-group flush>
        <b-list-group-item>title: {{ post.title }}</b-list-group-item>
        <b-list-group-item>body: {{ post.body }}</b-list-group-item>
      </b-list-group>
      <div class="col-3 m-2">
        <router-link :to="{ name: 'EditPost', params: { id: post.id } }">edit</router-link>
      </div>
      <div class="col-3 m-2">
        <b-button @click="deletepost" variant="danger">delete</b-button>
      </div>
    </b-card>
  </div>

</template>

<script>

import Swal from 'sweetalert2'
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
  name: 'AppPost',
  props: {
    post: Object
  },
  setup() {
    const route = useRoute();
    function deletepost() {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function () {
          Swal.fire({
            title: 'thanks',
            text: 'post delete successfully',
            icon: 'warning',
            confirmButtonText: 'ok'
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
   

    return {deletepost}
  }
}
</script>

<style></style>