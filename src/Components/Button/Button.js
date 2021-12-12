import React from 'react';
import classes from './Button.module.css';

const Button = (props) =>{
  return(
    <button className={classes.DemoButton} data-testid='demoBtn' onClick={props.click}>{props.label}</button>
  );
}

export default Button;