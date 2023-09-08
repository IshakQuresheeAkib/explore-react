import { useState } from "react"

export default function Counter() {
    let [count,setCount] = useState(0);

    const handleAdd = () => {
        const newCount = ++count;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = --count;
        setCount(newCount)
    }

    return (
        <div style={{border:'2px solid aqua',width:'200px',margin:'20px auto'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add Count</button>
            <button style={{margin:'20px auto'}} onClick={handleReduce}>Reduce Count</button>
            <p/>
        </div>
    )
}