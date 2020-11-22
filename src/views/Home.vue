<template>
  <div class="jumbotron text-center text-dark">
    <img src="../assets/img/money.png" class="mx-auto d-block img-fluid" />
    <h1>Want to step into the world of investment?</h1>
    <p class="lead">But not sure where to start?</p>
    <hr class="my-4" />
    <p class="lead">We've got you covered.</p>
    <p>Let's start by exploring your investing style.</p>
    <div class="text-center">
      <router-link
        class="btn btn-success"
        :to="{ name: 'Survey' }"
        role="button"
        >Start Now</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
}

img {
  max-width: 200px;
}
</style>