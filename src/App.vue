<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Stocking <small class="text-muted fs-6">(Subject to Change)</small></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/survey">Survey</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/broker">Broker</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <div class="container-lg pt-2">
  <router-view/>
  </div>
</template>
<script>
export default {
   created () {
    document.title = 'Stocking'
  }
}
</script>
<style>
</style>
