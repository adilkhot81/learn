import React from 'react';
import classes from './Button.module.css';

const Button = () =>{
  return(
    <button className={classes.DemoButton} data-testid='demoBtn'>Take me to Demo</button>
  );
}

export default Button;