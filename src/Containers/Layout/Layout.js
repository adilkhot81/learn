import React,{Component} from 'react';
import Aux from '../../HOC/Auxx/Auxx';
import Navbar from '../Navigation/Navigation'
import Button from '../../Components/Button/Button';

class Layout extends Component{

  render(){
    return(<Aux>
      <Navbar/>
    <div>
      <Button/>
      <h1>App navigator</h1>
      <h1>Content</h1>
    </div>
    <h1>Footer</h1>
    </Aux>);    
  }
}

export default Layout;