import React from "react";
import renderer from "react-test-renderer";
import Option from "../Option.jsx";
import QUESTION_SESSION from "../../mockdata/QUESTION_SESSION";

describe("Option snapshot", () => {
  const tree = renderer
    .create(<Option option={QUESTION_SESSION.results[0].correct_answer} />)
    .toJSON();

  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
