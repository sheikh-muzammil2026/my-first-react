import { useState } from "react";

export default function GetRuns() {
    const [runs, setRuns] = useState(0);

    const handleSingle = () => {
        const singleRun = runs +1;
        setRuns(singleRun);
    };

      const handleFour = () => {
        const fourRun = runs + 4;
        setRuns(fourRun);
    };

      const handleSix = () => {
        const sixRun = runs +6;
        setRuns(sixRun);
    };

        const handleClear = () => {
       
        setRuns(0);
    };

    return(
        <>
        <p>Player: Sakibul hasan</p>
        <p>Runs: {runs} </p>
        <div>
        <button className="btn-primary" onClick={handleSingle}>Single</button>
        <button className="btn-primary" onClick={handleFour}>Four</button>
        <button className="btn-primary" onClick={handleSix}>Six</button>
        <button className="btn-primary" onClick={handleClear}>clear</button>
        </div>
        </>
    );
}