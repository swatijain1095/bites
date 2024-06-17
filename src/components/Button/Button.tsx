import React, { Children } from "react";
import "./Button.scss";
import classNames from "classnames";

type State = "primary" | "secondary" | "success" | "error" | "warning" | "link";
type Size = "sm" | "md" | "lg" | "xl" | "2xl";
type Disabled = boolean | undefined;

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  state?: State;
  size?: Size;
  disabled?: Disabled;
  children: JSX.Element | string;
}

const Button: React.FC<ButtonProps> = ({
  state = "primary",
  size = "md",
  children,
  disabled,
  ...props
}) => {
  const className = classNames(
    "comp-button",
    state && `comp-button--${state}`,
    size && `comp-button--${size}`,
    disabled && "comp-button--disabled"
  );

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
