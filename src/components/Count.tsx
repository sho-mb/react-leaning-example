import React, { useState } from 'react'
import Button from './Button/Button'

function Count() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>
        Count up
      </Button>

      <p>Count : {count}</p>
    </>
  )
}

export default Count