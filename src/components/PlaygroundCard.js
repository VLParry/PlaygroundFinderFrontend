import React from 'react'

const PlaygroundCard = ( {id, name, address}) => {
  //delete fetch
  //call the nameMe function 
  return (
    <li>
      {/* //button to show delete */}
      <h3>
        {name}
      </h3>
      <address>
        {address}
      </address>
    </li>
  )
}

export default PlaygroundCard
