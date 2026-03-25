import { useState } from "react"

// export default function UseState() {
    
//      function handleClick() {
//         return (
//           alert("Assalamu Alaikum") 
//         )
//     }
//     return(
//         <>
//         <p>Count: </p>
//         <button onClick={handleClick}>Add</button>
//         </>
//     )
// }

export default function UseState() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
       const newCount =  count + 1;
       setCount(newCount)
    }
    return (
        <div>
        <h3>Count: {count}</h3>
        <button className="btn-primary"  onClick={handleClick}>Add count</button>
        </div>
    )
}