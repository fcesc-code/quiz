import actionTypes from "./actionTypes";
import dispatcher from "../dispatcher";
import THEMES_LIST from "../mockdata/THEMES_LIST";
import getApiData from "../getApiData";

export function loadThemes() {
  const result = THEMES_LIST;

  dispatcher.dispatch({
    type: actionTypes.GAME.GET_THEMES,
    data: result,
  });
}

export function loadTopThemes() {
  const result = THEMES_LIST.slice(0, 5);

  dispatcher.dispatch({
    type: actionTypes.GAME.GET_TOP_THEMES,
    data: result,
  });
}

export async function loadSessionSet(
  category,
  difficulty,
  type,
  encode,
  amount
) {
  const result = await getApiData(category, difficulty, type, encode, amount);

  dispatcher.dispatch({
    type: actionTypes.SESSION.GET_SESSION_SET,
    data: await result,
  });
}
