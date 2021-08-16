import React from "react";
import PropTypes from "prop-types";
import "../css/option.scss";

function Option(props) {
  return (
    <>
      <li className="answer__item" onClick={props.answer}>
        {" "}
        {props.option}{" "}
      </li>
    </>
  );
}

Option.propTypes = {
  answer: PropTypes.func,
  option: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

export default Option;
