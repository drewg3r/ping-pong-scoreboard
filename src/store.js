import { reactive } from 'vue'

export const store = reactive({
  player1Name: null,
  player2Name: null,
  scoreToWin: null,
  firstServePlayer: null,

  player1Score: null,
  player2Score: null,

  winner: null,

  showGameFinishedAlert: false
})
