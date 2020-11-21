<template>
  <div class="jumbotron">
    <h1 class="display-4">Stocking <small class="text-muted fs-6">(Subject to Change)</small></h1>
      <p class="lead">Want to step into the world of investing? We've got you covered</p>
      <hr class="my-4">
      <p>You can start by finding out your investing style.</p>
      <p class="lead">
        <router-link class="btn btn-primary btn-lg" :to="{name:'Survey'}" role="button">Start Now</router-link>
      </p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem;
}
</style>