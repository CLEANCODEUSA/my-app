import React, { useState } from 'react'

const Counter2 = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const handleChange = (event) => {
    // console.log(event);
    setText(event.target.value);
    setCount(0);
  }

  return (
    <div className='box'>
      <input type="text" autoFocus="autofocus" onChange={handleChange} />
      <p>{text} clicked: {count} times!!</p>
      <button className='add' onClick={handleClick}>Click count</button>
    </div>
  )
}

export default Counter2