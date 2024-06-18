import React from "react";
import "./Button.scss";
import classNames from "classnames";

type State = "primary" | "secondary" | "success" | "error" | "warning" | "link";
type Size = "sm" | "md" | "lg" | "xl" | "2xl";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  state?: State;
  size?: Size;
  children: JSX.Element | string;
}

const Button: React.FC<ButtonProps> = ({
  state = "primary",
  size = "md",
  children,
  ...rest
}) => {
  const className = classNames(
    "comp-button",
    state && `comp-button--${state}`,
    size && `comp-button--${size}`
  );

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
