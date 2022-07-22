<script>
import { store } from '../store.js'

export default {
  data() {
    return {
      store,

      player1Name: '',
      player2Name: '',
      scoreToWin: 3,

      player1ValidationError: false,
      player2ValidationError: false
    }
  },
  methods: {
    validateForm() {
      let isFormValid = true;
      this.player1ValidationError = false;
      this.player2ValidationError = false;

      if (!this.player1Name) {
        this.player1ValidationError = true;
        isFormValid = false;
      }
      if (!this.player2Name) {
        this.player2ValidationError = true;
        isFormValid = false;
      }

      return isFormValid;
    },
    startGame() {
      if (this.validateForm()) {
        this.store.player1Name = this.player1Name;
        this.store.player2Name = this.player2Name;
        this.store.scoreToWin = this.scoreToWin;
        this.$router.push('/first-serve');
      }
    }
  }
}
</script>

<template>

  <div class="my-4">
    <h2>Creating new game</h2>
  </div>

  <form class="mb-4">
    <div class="row">
      <div class="col-12 col-md-6 mb-3">
        <label for="player1NameInput" class="form-label">First player's name</label>
        <input v-model="player1Name" type="text" class="form-control" id="player1NameInput">
        <div v-if="player1ValidationError" class="text-danger">
          Please, enter player's name
        </div>
      </div>

      <div class="col-12 col-md-6 mb-3">
        <label for="player2NameInput" class="form-label">Second player's name</label>
        <input v-model="player2Name" type="text" class="form-control" id="player2NameInput">
        <div v-if="player2ValidationError" class="text-danger">
          Please, enter player's name
        </div>
      </div>
    </div>

    <div class="form-label">Score to win</div>
    <div class="btn-group d-flex" role="group">
      <input v-model="scoreToWin" type="radio" class="btn-check" name="options" id="option1" value="3" checked>
      <label class="btn btn-outline-primary" for="option1">3</label>

      <input v-model="scoreToWin" type="radio" class="btn-check" name="options" id="option2" value="5">
      <label class="btn btn-outline-primary" for="option2">5</label>

      <input v-model="scoreToWin" type="radio" class="btn-check" name="options" id="option3" value="7">
      <label class="btn btn-outline-primary" for="option3">7</label>

      <input v-model="scoreToWin" type="radio" class="btn-check" name="options" id="option4" value="11">
      <label class="btn btn-outline-primary" for="option4">11</label>
    </div>
  </form>

  <a @click="startGame()" class="btn btn-success d-block fs-5 fw-bold mb-3">Start game</a>
  <RouterLink to="/">← Back to main page</RouterLink>

</template>
