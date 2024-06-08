import React from 'react';
import './Button.scss';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({ label, onClick, ...props }) => {
  return (
    <button className="btn" onClick={onClick} {...props}>
      {label}
    </button>
  );
};

export default Button;
