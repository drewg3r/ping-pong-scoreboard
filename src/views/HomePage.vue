<script>
import { store } from '../store.js'

export default {
  data() {
    return {
      store
    }
  },
  mounted() {
    this.store.player1Name = null;
    this.store.player2Name = null;
    this.store.scoreToWin = null;
    this.store.firstServePlayer = null;
    this.store.player1Score = null;
    this.store.winner = null;
  },
  unmounted() {
    this.store.showGameFinishedAlert = false;
  }
}
</script>

<template>

  <div v-if="store.showGameFinishedAlert" class="alert alert-primary" role="alert">
    You've finished your game. Now you can start a new one.
  </div>

  <div class="my-4">
    <span class="fs-5">Just another app to track ping-pong score during game.</span>
  </div>

  <RouterLink to="/setup" class="btn btn-success d-block fs-5 fw-bold">Start new game</RouterLink>

  <hr>
  <div class="text-end">
    <a href="https://github.com/drewg3r" class="text-decoration-none">drewg3r</a> |
    <a href="https://github.com/drewg3r/ping-pong-scoreboard" class="text-decoration-none">repo</a>
  </div>
</template>
