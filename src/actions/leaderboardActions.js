import actionTypes from "./actionTypes";
import dispatcher from "../dispatcher";
import LEADERBOARD from "../mockdata/Leaderboard";

export function loadLeaderboard() {
  const result = LEADERBOARD;

  dispatcher.dispatch({
    type: actionTypes.GET_LEADERBOARD,
    data: result,
  });
}

export function saveResults(value) {
  dispatcher.dispatch({
    type: actionTypes.ADD_RESULTS,
    data: value,
  });
}
