import React from 'react'
import Button from '@mui/material/Button';


const PlaygroundCard = ( {playgroundId, name, address, handleDelete}) => {
  // delete fetch
  //it doesnt know where ID is -  'id' is not defined
  function handleDeleteClick(){
    fetch(`http://localhost:9292/playgrounds/${playgroundId}`, {
      method: "DELETE",
    })
    handleDelete(playgroundId);
   
  }

  return (
    <li>
      <h3>
        {name}
      </h3>
      <address>
        {address}
      </address>
      <br></br>
      <Button type="submit" variant="contained" color="success" size="small">Edit Playground</Button>
      <br></br>
      <br></br>
      <Button onClick={handleDeleteClick} variant="contained" color="success" size="small">Delete Playground</Button>
   
    </li>
  )
}

export default PlaygroundCard
