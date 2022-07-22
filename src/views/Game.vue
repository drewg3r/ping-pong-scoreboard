<script>
import { store } from '../store.js'

export default {
  data() {
    return {
      store,

      player1Score: 0,
      player2Score: 0,

      servesCount: 0,
      servingPlayer: null,

      lastPlayer: -1,
      undoData: []
    }
  },
  methods: {
    checkForWin() {
      if (this.player1Score >= this.store.scoreToWin) {
        if (this.player1Score > this.player2Score + 1) return 1;
      }
      if (this.player2Score >= this.store.scoreToWin) {
        if (this.player2Score > this.player1Score + 1) return 2;
      }

      return -1;
    },
    turn(player) {
      this.undoData = [this.player1Score, this.player2Score, this.servesCount, this.servingPlayer];
      if (player == 1) this.player1Score++;
      else this.player2Score++;

      if (this.servingPlayer != player) {
        this.servingPlayer = player;
        this.servesCount = 0;
      } else {
        this.servesCount++;
      }

      this.lastPlayer = player;

      let win = this.checkForWin();

      if (win != -1) {
        this.store.winner = win;
        this.store.player1Score = this.player1Score;
        this.store.player2Score = this.player2Score;
        this.$router.push('/win');
      }
    },
    scoreUndo() {
      this.player1Score = this.undoData[0];
      this.player2Score = this.undoData[1];
      this.servesCount = this.undoData[2];
      this.servingPlayer = this.undoData[3];
      this.undoData = [];
    },
    endGame() {
      if (confirm('Are you sure want to end this game?')) {
        this.store.showGameFinishedAlert = true;
        this.$router.push('/');
      }
    }
  },
  computed: {
    servingPlayerName() {
      if (this.servesCount == 2) {
        this.servesCount = 0;
        if (this.servingPlayer == 1) this.servingPlayer = 2;
        else this.servingPlayer = 1;
      }
      if (this.servingPlayer == 1) return this.store.player1Name;
      else return this.store.player2Name;
    }
  },
  mounted() {
    this.servingPlayer = this.store.firstServePlayer;
  }
}
</script>

<template>
  <div class="row">
    <div class="col-6">
      <div class="card text-bg-primary mb-3">
        <div class="card-body text-center">
          <span class="fs-1">{{ player1Score }}</span>
        </div>
        <div class="card-footer bg-transparent text-center">{{ store.player1Name }}</div>
      </div>

    </div>

    <div class="col-6">
      <div class="card text-bg-danger mb-3">
        <div class="card-body text-center">
          <span class="fs-1">{{ player2Score }}</span>
        </div>
        <div class="card-footer bg-transparent text-center">{{ store.player2Name }}</div>
      </div>
    </div>

  </div>

  <hr>

  <div class="text-center mt-2 mb-3">
    <span class="fs-2">{{ servingPlayerName }} serves!</span>
    <span v-if="(player1Score >= this.store.scoreToWin) || (player2Score >= this.store.scoreToWin)"><br>Additional serves</span>
  </div>
  <div class="text-center">
  </div>

  <div class="row mb-4">
    <div class="col-6">
      <a class="btn btn-outline-primary d-block" @click="turn(2);">{{ store.player1Name }} lost</a>
    </div>

    <div class="col-6">
      <a class="btn btn-outline-danger d-block" @click="turn(1);">{{ store.player2Name }} lost</a>
    </div>
  </div>

  <hr>

  <div class="row">
    <div class="col-6">
      <span class="fs-4">Score to win: {{ store.scoreToWin }}</span>
    </div>

    <div class="col-6 text-end">
      <div class="btn-group" role="group">
        <button @click="scoreUndo()" type="button" class="btn btn-secondary" :disabled="undoData.length==0">Undo</button>
        <button @click="endGame()" class="btn btn-danger">End game</button>
      </div>
    </div>
  </div>

</template>
