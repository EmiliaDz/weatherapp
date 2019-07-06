import React from "react";

const Form = props => (
  <form className="form-container" onSubmit={props.onSubmit}>
    {props.children}
  </form>
);

export default Form;
