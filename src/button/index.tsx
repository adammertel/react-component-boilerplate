import React, { FunctionComponent } from "react";

type Props = {
  label: string;
  handleClick?: Function;
};

const Button: FunctionComponent<Props> = ({
  handleClick = () => {},
  ...props
}) => {
  return (
    <button onClick={() => handleClick()}>
      {props.label.substring(0, 1).toUpperCase() + props.label.substring(1)}
    </button>
  );
};

Button.defaultProps = {
  label: "",
  handleClick: () => {}
};

export default Button;
