import { useState } from 'react';
import './App.css';

const Counter = (props)=>{
  return(
    <div>
    <button onClick={()=>{props.setCount(props.count +1)}}>+</button>
    <button onClick={()=>{props.setCount(props.count -1)}}>-</button>
    <div>{props.count}</div>
    </div>
  )
}


function App() {
  const [count,setCount] = useState(0);
console.log(count)
  return (
    <div className="App">
      <Counter count={count} setCount={setCount}></Counter>
     
    </div>


    
  );

}
export default App;
