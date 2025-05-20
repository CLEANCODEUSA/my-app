import React, { useState } from 'react'

const Counter1 = () => {
  let initialVal = 0;
  // const arr = useState(initialVal);

  // let count = arr[0];
  // let setCount = arr[1];

  let [count, setCount] = useState(initialVal); // destructuring

  function handleAdd() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div className='box'>
      <p>Count: {count}</p>
      <button className='button add' onClick={handleAdd}>Increment</button>
    </div>
  )
}

export default Counter1