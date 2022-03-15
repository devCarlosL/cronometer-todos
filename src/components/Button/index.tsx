/* eslint-disable react/button-has-type */
import React from 'react';
import style from './button.module.scss';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

function Button({ children, type = 'button', onClick }: ButtonProps) {
  return <button type={type} className={style.button} onClick={onClick}>{children}</button>;
}

export default Button;
