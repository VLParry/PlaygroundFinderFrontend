import React, { useEffect, useRef } from 'react'
import {  useParams } from 'react-router-dom'
import PlaygroundCard from './PlaygroundCard';
import PlaygroundForm from './PlaygroundForm';
//useParams returns the object of key value pairs of dynamic parameters from the current url

const TownInfo = ({allTowns, townPlaygrounds, setTownPlaygrounds, setTowns}) => {
const {id}=useParams()

let singleTown= useRef({});

useEffect(()=>
  {singleTown.current = allTowns.find((oneTown) => oneTown.id == id)
  setTownPlaygrounds(singleTown.current?.playgrounds)
},[allTowns, id, setTownPlaygrounds])

const handleDelete = (id) => {
  const updatedPlaygrounds = townPlaygrounds.filter((deletedPlayground) =>    deletedPlayground.id !== id);
    const updatedTown = {...singleTown.current, playgrounds: updatedPlaygrounds}
    const updatedTowns = allTowns.map((town) => town.id === updatedTown.id ? updatedTown : town)
    setTownPlaygrounds(updatedPlaygrounds)
    setTowns(updatedTowns)
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

  const handleAddPlayground = (playground, id) => {

    const newPlaygrounds = [...townPlaygrounds, playground]
    const updatedTown = {...singleTown.current, playgrounds: newPlaygrounds}
    const updatedTowns = allTowns.map((town) => town.id === updatedTown.id ? updatedTown : town)
    setTowns(updatedTowns)
    setTownPlaygrounds(newPlaygrounds)
  }

  return (
    <div>
      <ul>
        {townPlaygrounds?.map(playground => {
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
