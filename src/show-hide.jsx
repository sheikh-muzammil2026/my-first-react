import { useState } from "react"

export default function ShowMessage() {
    const [show, setShow] = useState(false);

    const handle = () => {
        setShow(!show);
    }
    return(
        <div>
            
            <button className="btn-primary" onClick={handle}>{show ? "Hide" : "Show"}</button>
            {show && <p>Wait just 5 minutes</p>}
        </div>
    )
}