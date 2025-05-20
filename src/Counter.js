import React from 'react'

const Counter = () => {
  let count = 0;

  function handleAdd() {
    count = count + 1;
    console.log(count);
    return count;
  }

  return (
    <div className='box'>
      <p>Count: {count}</p>
      <button className='button add' onClick={handleAdd}>Increment</button>
    </div>
  )
}

export default Counter