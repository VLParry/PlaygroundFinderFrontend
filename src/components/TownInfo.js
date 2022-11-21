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
//this function matches the playground to delete by id, makes a copy, and then splice removes it based off id and only deletes the one playground. Then pass the new playgrounds into state to update 
  const handleDelete = (id) => {
    const index = townPlaygrounds.findIndex((townPlayground) => townPlayground.id === id)
    const newPlaygroundList = [...townPlaygrounds].splice(index, 1);
    setTownPlaygrounds(newPlaygroundList)
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
            id={playground.id}
            key={playground.id} />
        })}
      </ul>
    </div>
  )
}

export default TownInfo
