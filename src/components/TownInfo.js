import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlaygroundCard from './PlaygroundCard';
//returns the object of key value pairs of dynamic parameters from the current url
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

//   const handleDelete = (id) => {
//     const
//   }
  //function to take in id to find the id inside of town playgrounds and then delete it using settownplagrs array.splice
  
//   const nameMe = (id) => {
  //const index = townPlaygrounds.findIndex((townPlayground) => townPlayground.id === id)

//   const newPlaygrounds = [...townPlaygrounds].splice(index, 1);
//   setTownPlaygrounds(newPlaygrounds);

// }
//pass this to playground card 
  return (

    <div>
       
      <h1>Playgrounds in {townName}</h1>
      <ul>
        {townPlaygrounds.map(playground => {
            return <PlaygroundCard name={playground.name} address={playground.address} key={playground.id} />
        })}
      </ul>
    </div>
  )
}

export default TownInfo
