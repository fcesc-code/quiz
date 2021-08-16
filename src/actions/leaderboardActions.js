import actionTypes from "./actionTypes";
import dispatcher from "../dispatcher";
import LEADERBOARD from "../mockdata/Leaderboard";

export function loadLeaderboard() {
  const result = LEADERBOARD;

  dispatcher.dispatch({
    type: actionTypes.LEADERBOARD.GET_LEADERBOARD,
    data: result,
  });
}

export function saveResults(value) {
  dispatcher.dispatch({
    type: actionTypes.LEADERBOARD.ADD_RESULTS,
    data: value,
  });
}
