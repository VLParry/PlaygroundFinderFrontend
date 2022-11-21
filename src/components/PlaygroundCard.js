import React from 'react'
import { Link } from 'react-router-dom'

const PlaygroundCard = ( { name, address, handleDelete}) => {
  //delete fetch
  // function handleDeleteClick(){
  //   fetch(`http://localhost:9292/playgrounds/${playgrounds.id}`, {
  //     method: "DELETE",
  //   })
  //   .then((r) => r.json())
  //   .then((deletedPlayground) => handleDelete(deletedPlayground));
   
  // }

  return (
    <li>
      <h3>
        {name}
      </h3>
      <address>
        {address}
      </address>
      <br></br>
      {/* <button onClick={handleDeleteClick}>Delete Playground</button> */}
      {/* <Link to={`/towns/`}>Back</Link>  */}
    </li>
  )
}

export default PlaygroundCard
