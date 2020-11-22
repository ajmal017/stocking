<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Stocking</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/survey"
              >Survey</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/broker"
              >Broker</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container pt-4 pb-2 px-4 text-white">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    document.title = "Stocking";
  },
};
</script>
<style lang="scss">
html {
  height: 100%;
}

body {
  min-height: 100%;
  background-repeat: no-repeat;
  // background: rgb(68,6,170);
  background: linear-gradient(rgba(68, 6, 170, 1) 41%, rgb(23, 53, 143) 80%);
  background-attachment: fixed;
}
</style>
