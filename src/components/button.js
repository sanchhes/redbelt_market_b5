import React,{useState} from 'react';

const Button =()=>{
  const [count,setCount] = useState(false)
  const addCount=()=>{
    setCount(count+1)
  }
  return(
    <button onClick={addCount}>
      Sumar {count}
    </button>
  )
}

export default Button
