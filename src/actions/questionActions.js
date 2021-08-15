import actionTypes from "./actionTypes";
import dispatcher from "../dispatcher";

function loadQuestion(i) {
  const result = i;

  dispatcher.dispatch({
    type: actionTypes.GET_QUESTION_FROM_SESSION,
    data: result,
  });
}

export default loadQuestion;
