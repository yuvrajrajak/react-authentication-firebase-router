import React from 'react'
import { useState } from 'react/cjs/react.production.min'

const State = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>+</button>
        </div>
    )
}

export default State