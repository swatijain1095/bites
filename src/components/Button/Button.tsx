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
  disabled,
  ...rest
}) => {
  const className = classNames(
    "comp-button",
    state && `comp-button--${state}`,
    size && `comp-button--${size}`,
    disabled && "comp-button--disabled"
  );

  return (
    <button className={className} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
