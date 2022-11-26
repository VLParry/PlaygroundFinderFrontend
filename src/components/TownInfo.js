import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import PlaygroundCard from './PlaygroundCard';
import PlaygroundForm from './PlaygroundForm';
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

 const editPlayground = (playground) => {
  const foundPlaygroundIndex = townPlaygrounds.findIndex((park) => {
    return park.id === playground.id
  })
  
  const newPlaygrounds = townPlaygrounds
  newPlaygrounds.splice(foundPlaygroundIndex, 1, playground)
  setTownPlaygrounds(newPlaygrounds)
 }
//splice takes the array we copied and it takes the index where we want to start splice and replaces the info with the new playground info


  const handleAddPlayground = (playground) => {
    const newPlayground = [...townPlaygrounds, playground]
    setTownPlaygrounds(newPlayground)
  }
console.log(townPlaygrounds)
  return (

    <div>
       
      <h1>Playgrounds in {townName}</h1>
      <ul>
        {townPlaygrounds.map(playground => {
            return <PlaygroundCard 
            name={playground.name} 
            address={playground.address} 
            handleDelete={handleDelete} 
            onEdit={editPlayground}
            playgroundId={playground.id}
            key={playground.id} />
        })}
      </ul>
      
      <PlaygroundForm  
      townId={id}
      handleAddPlayground={handleAddPlayground} 
      />
    </div>
  )
}

export default TownInfo
