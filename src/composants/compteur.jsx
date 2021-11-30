import React, { useEffect, useState } from 'react'

function Compteur(props) {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = 'Vous avec cliqué '+count+' fois'
    }, [count])
    return (
        <div className='compteur'>
            <p>vous avez cliqué {count} fois</p>
            <button onClick={()=> setCount(count +1)}>Cliquez ici !</button>
            <button onClick={()=>{
                if (count < 1){
                    setCount(0)
                }
                else{
                    setCount(count -1)
                }
            }}>Cliquez là !</button>
            <button onClick={()=> setCount(0)}>RAZ</button>
        </div>
    )
}

export default Compteur