import React,{useState} from 'react';
import Aux from '../../HOC/Auxx/Auxx'
import Button from '../../Components/Button/Button';

const Numeric =()=> {
  const [count, setCount]=useState(0);
  
    return(
      <Aux>
        <Button label="(-)" click={()=>setCount(count - 1)}/>
        <div>{count}</div>
        <Button label="(+)" click={()=>setCount(count + 1)}/>
      </Aux>
    );
  
}

export default Numeric;
