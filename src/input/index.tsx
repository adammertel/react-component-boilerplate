import React, { FunctionComponent } from "react";

type Props = {
  value: string;
  handleChange?: Function;
};

const Input: FunctionComponent<Props> = ({
  handleChange = () => {},
  ...props
}) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={e => handleChange(e.target.value)}
    ></input>
  );
};

Input.defaultProps = {
  value: "",
  handleChange: () => {}
};

export default Input;
