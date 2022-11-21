import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlaygroundCard from './PlaygroundCard';
//useParams returns the object of key value pairs of dynamic parameters from the current url

const TownInfo = () => {
    const [townPlaygrounds, setTownPlaygrounds] = useState([])
    
    const {id, townName}=useParams()


  useEffect(() => {
    
        fetch(`http://localhost:9292/towns/${id}`)
        .then((r) => r.json())
        .then((town) => {
         setTownPlaygrounds(town.playgrounds)
        });
  }, [])

  const handleDelete = (id) => {
const updatedPlaygrounds = townPlaygrounds.filter((deletedPlayground) => deletedPlayground.id !== id);
setTownPlaygrounds(updatedPlaygrounds)
  }
 
  return (

    <div>
       
      <h1>Playgrounds in {townName}</h1>
      <ul>
        {townPlaygrounds.map(playground => {
            return <PlaygroundCard 
            name={playground.name} 
            address={playground.address} 
            handleDelete={handleDelete} 
            playgroundId={playground.id}
            key={playground.id} />
        })}
      </ul>
    </div>
  )
}

export default TownInfo
