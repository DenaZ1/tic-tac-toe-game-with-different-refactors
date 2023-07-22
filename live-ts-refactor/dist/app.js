import Store from "./store.js";
import View from "./view.js";
const players = [
    {
        id: 1,
        name: "Player 1",
        iconClass: "fa-x",
        colorClass: "turquoise",
    },
    {
        id: 2,
        name: "Player 2",
        iconClass: "fa-o",
        colorClass: "yellow",
    },
];
function init() {
    const view = new View();
    const store = new Store('live-t3-storage-key', players);
    /*  function initView() {
        view.closeAll();
        view.clearMoves();
        view.setTurnIndicator(store.game.currentPlayer);
        view.UpdateScoreboard(store.stats.playerWithStats[0].wins,
          store.stats.playerWithStats[1].wins, store.stats.ties);
        view.initializeMoves(store.game.moves);
          
      }*/
    store.addEventListener("statechange", () => {
        view.render(store.game, store.stats);
    });
    window.addEventListener("storage", () => {
        console.log("State changed from another tab");
        view.render(store.game, store.stats);
    });
    view.render(store.game, store.stats);
    view.bindGameResetEvent((event) => {
        store.reset();
    });
    view.bindNewRoundEvent((event) => {
        store.newRound();
        store.reset();
    });
    view.bindPlayerMoveEvent((square) => {
        const existingMove = store.game.moves.find((move) => move.squareId === +square.id);
        if (existingMove) {
            return;
        }
        //view.handlePlayerMove(square, store.game.currentPlayer);
        store.playerMove(+square.id);
    });
}
window.addEventListener("load", init);
