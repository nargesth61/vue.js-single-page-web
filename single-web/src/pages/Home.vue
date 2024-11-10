<template>
  <div class="col-md-6 m-3">
  <b-card title="test text " sub-title="Card subtitle">
    <b-card-text>
      Some quick example text to build on the <em>text test</em> and make up the bulk of the card's
      content.
      Some quick example text to build on the and make up the bulk of the card's
      content.
      Some quick example text to build on the  and make up the bulk of the card's
      content.
    </b-card-text>


    <div class="col-md-4">
      <router-link :to="{name:'CreatePost'}">create post</router-link>
    </div>
  </b-card>

</div>
</template>

<script>
export default {
   name :'AppHome',
}
</script>

<style>

</style>