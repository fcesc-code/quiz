import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _themesList = [];
let _topThemesList = [];
let _sessionSet = [];
let _index;

class GameStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /* eslint-disable */
  getThemes() {
    return _themesList;
  }

  getTopThemes() {
    return _topThemesList;
  }

  getSessionSet() {
    return _sessionSet;
  }

  getQuestion(index) {
    return _sessionSet[index];
  }
  /* eslint-enable */
}

const gameStore = new GameStore();

export default gameStore;

dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.GET_THEMES:
      _themesList = action.data;
      gameStore.emitChange(_themesList);
      break;
    case actionTypes.GET_TOP_THEMES:
      _topThemesList = action.data;
      gameStore.emitChange(_topThemesList);
      break;
    case actionTypes.GET_sessionSet:
      _sessionSet = action.data;
      gameStore.emitChange(_sessionSet);
      break;
    case actionTypes.GET_QUESTION_FROM_SESSION:
      _index = action.data;
      gameStore.emitChange(_index);
      break;
    default:
      break;
  }
});
