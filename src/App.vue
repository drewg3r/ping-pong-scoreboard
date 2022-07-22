<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="container p-3" style="max-width: 700px">
    <div class="text-center">
      <RouterLink to="/" class="fs-1 text-decoration-none text-dark">Ping-Pong Scoreboard</RouterLink>
  </div>
    <hr>

    <RouterView />

  </div>
</template>
