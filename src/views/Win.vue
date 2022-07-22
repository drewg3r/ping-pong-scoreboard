<script>
import { store } from '../store.js'
import confetti from 'canvas-confetti'

export default {
  data() {
    return {
      store
    }
  },
  methods: {
    getWinner() {
      if (this.store.winner == 1) return this.store.player1Name;
      else return this.store.player2Name;
    }
  },
  mounted() {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }
}
</script>

<template>

  <div class="row">
    <div class="col-6">
      <div class="card text-bg-primary mb-3">
        <div class="card-body text-center">
          <span class="fs-1">{{ store.player1Score }}</span>
        </div>
        <div class="card-footer bg-transparent text-center">{{ store.player1Name }}</div>
      </div>

    </div>

    <div class="col-6">
      <div class="card text-bg-danger mb-3">
        <div class="card-body text-center">
          <span class="fs-1">{{ store.player2Score }}</span>
        </div>
        <div class="card-footer bg-transparent text-center">{{ store.player2Name }}</div>
      </div>
    </div>

  </div>

  <hr>

  <h1 class="text-center my-4">Congratulations!</h1>

  <div class="text-center mt-3 mb-5">
    <span v-if="store.winner==1" class="fs-3"><span class="badge bg-primary">{{ getWinner() }}</span> won this game!</span>
    <span v-if="store.winner==2" class="fs-3"><span class="badge bg-danger">{{ getWinner() }}</span> won this game!</span>
  </div>

  <div class="row mb-3">
    <div class="col-6">
      <RouterLink to="/setup" class="btn btn-secondary d-block fs-5 fw-bold">Start new game</RouterLink>
    </div>

    <div class="col-6">
      <RouterLink to="/first-serve" class="btn btn-warning d-block fs-5 fw-bold">Rematch!</RouterLink>
    </div>
  </div>

  <RouterLink to="/">← Back to main page</RouterLink>
</template>
