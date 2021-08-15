import React from "react";
import PropTypes from "prop-types";
import "../css/answer.scss";

function Answer(props) {
  return (
    <>
      <div className="answer_container">
        <p>{props.answer}</p>
      </div>
    </>
  );
}

Answer.propTypes = {
  answer: PropTypes.object,
};

export default Answer;
