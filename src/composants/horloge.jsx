import React, { useEffect, useState } from 'react';

function Horloge(props) {
    const [heure, setDate] = useState(new Date);
    const [numInt, setnumInt] = useState(0);

    useEffect(() => {
        let n
        setInterval(()=>{
            setDate(new Date)
        }, 1000)
        setnumInt(n)
        return () => {
            clearInterval(numInt)
            setnumInt(0)    
        };
    },[]);

    return (
        <div>
            <p>il est {heure.toLocaleTimeString()}</p>
        </div>
    )
}

export default Horloge