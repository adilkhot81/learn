import React from 'react';
import classes from './NavElement.module.css';

const NavElement=(props)=>{
  return(
      <div className={classes.NavItems} onClick={props.click}>{props.value}</div>
  );
}

export default NavElement;