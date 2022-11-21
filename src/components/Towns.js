
import React, {useState, useEffect} from 'react'
import TownCard from './TownCard'
import { Link } from 'react-router-dom'

// import PlaygroundCard from './PlaygroundCard'

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
            <TownCard key={town.id} name={town.name} id={town.id} />
        ))}


    </div>
  )
}

export default Towns