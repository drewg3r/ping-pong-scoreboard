<script>
import { store } from '../store.js'

export default {
  data() {
    return {
      store
    }
  },
  methods: {
    startGame(firstPlayer) {
      this.store.firstServePlayer = firstPlayer;
      this.$router.push('/game');
    }
  }
}
</script>

<template>
  <div class="my-4">
    <h2 class="text-center">Who serves first?</h2>
  </div>

  <div class="row mb-3">
    <div class="col-12 col-md-4">
      <a @click="startGame(1)" class="btn btn-outline-primary fs-3 d-block">{{ store.player1Name }}</a>
    </div>

    <div class="col-12 col-md-4">
      <h3 class="text-center fs-3 my-3">OR</h3>
    </div>

    <div class="col-12 col-md-4">
      <a @click="startGame(2)" class="btn btn-outline-danger fs-3 d-block">{{ store.player2Name }}</a>
    </div>
  </div>

  <RouterLink to="/">← Back to main page</RouterLink>
</template>
