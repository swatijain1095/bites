import React, { Children } from 'react';
import './Button.scss';
import classNames from 'classnames';

type State = 'primary' | 'secondary' | 'success' | 'error' | 'warning';
type Variant = 'link' | 'left-icon' | 'right-icon' | 'only-icon';
type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  state?: State;
  variant?: Variant;
  size?: Size;
  children: JSX.Element | string;
}

const Button: React.FC<ButtonProps> = ({ state = 'primary', size = 'md', variant, children, ...props }) => {

  const className = classNames(
    'comp-button',
    state && `comp-button--${state}`,
    variant && `comp-button--${variant}`,
    size && `comp-button--${size}`
  )

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
