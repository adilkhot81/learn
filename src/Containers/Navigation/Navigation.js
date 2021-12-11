import React,{Component} from 'react';
import classes from './Navigation.module.css';
import NavElement from './NavElement/NavElement';
import logo from '../../images/logo.png';

class Navigation extends Component{
  state={
    elements:['Home','About Us','Product','Our Team','Contact']
  }

 onNavItemClick=()=>{
   console.log('clicked');
 }

  render(){
    var items= this.state.elements.map(element=>{return <NavElement value={element} click={this.onNavItemClick}/>})
    return(
      <div className={classes.Navbar}>
        <img width="80px" src={logo} alt="logo"/><p>{process.env.REACT_APP_DEV_ENVIRONMENT}</p>
        <div className={classes.NavContainer}>
        {items}
        </div>
                
      </div>
    )
  }
}

export default Navigation;