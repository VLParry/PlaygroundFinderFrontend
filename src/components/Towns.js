
import React, {useState, useEffect} from 'react'
import TownContainer from './TownContainer'

const Towns = () => {
    const [towns, setTowns] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:9292/towns")
          .then((r) => r.json())
          .then((data) => {
            setTowns(data);
          });
      }, []);
  
    return (
    <div>
        {towns.map(town => (
            <TownContainer key={town.id} name={town.name} />
        ))}
    </div>
  )
}

export default Towns