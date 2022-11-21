import React from 'react'
import { Link } from 'react-router-dom'

const TownCard = ( {name, id} ) => {
  return (
    <div>
     <Link to={`/towns/${id}/${name}`}>{name}</Link> 
    
    </div>
  )
}

export default TownCard
