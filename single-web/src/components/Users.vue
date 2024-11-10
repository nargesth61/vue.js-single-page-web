<template>
  <div>
  <b-card
    no-body
    style="max-width: 20rem;"
  >
    <template #header>
      <h4 class="mb-0"><router-link :to="{ name:'ShowUser' , params:{id : user.id}} "> {{ user.name }} </router-link></h4>
    </template>
    <b-list-group flush>
      <b-list-group-item>username: {{ user.username }}</b-list-group-item>
      <b-list-group-item>email: {{ user.email }}</b-list-group-item>
      <b-list-group-item>phone: {{ user.phone }}</b-list-group-item>
    </b-list-group>
  </b-card>
</div>

</template>

<script>
export default {
    name: 'AppUsers',
    props:{
        user:Object
    }
}
</script>

<style>

</style>