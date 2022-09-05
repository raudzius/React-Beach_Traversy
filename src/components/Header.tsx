import React from 'react';
import Button from './Button';
import classes from './Header.module.scss'

const Header: React.FC = () => (
  <header className={classes.header}>
    <h1>Welcome To The Beach</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
      accusantium deleniti aperiam tempora ratione consequuntur.
    </p>
    <Button href='#'>Read More</Button>
  </header>
);

export default Header;
