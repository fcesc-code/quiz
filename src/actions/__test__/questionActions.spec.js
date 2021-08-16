import loadQuestion from "../questionActions";
import { loadSessionSet } from "../gameActions";
import * as GAME_PARAMS from "../../config/gameParameters";
import gameStore from "../../stores/gameStore";

describe("Test set for action loadQuestion", () => {
  test("Test that a given index is sent to the store", () => {
    const mockIndex = 2;
    const themeId = 11;
    loadSessionSet(
      themeId,
      GAME_PARAMS.DIFFICULTY,
      GAME_PARAMS.TYPE,
      GAME_PARAMS.ENCODING,
      GAME_PARAMS.SESSION_QUESTIONS_NUMBER
    );
    loadQuestion(mockIndex);
    const expected = gameStore.getQuestion(mockIndex);
    const result = gameStore.getSessionSet()[mockIndex];

    expect(expected).toBe(result);
  });
});
