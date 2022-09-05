import React from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  if (href) {
    return (
      <a href={href} className={classes.button}>
        {children}
      </a>
    );
  }
  return <button className={classes.button}>{children}</button>;
};

export default Button;
