import {useState} from 'react'
import Button from '@mui/material/Button';


const PlaygroundCard = ( {playgroundId, name, address, handleDelete}) => {
const [playgroundInfo,setPlaygroundInfo] = useState({})

  // delete fetch
  function handleDeleteClick(){
    fetch(`http://localhost:9292/playgrounds/${playgroundId}`, {
      method: "DELETE",
    })
    handleDelete(playgroundId);
  }

  // function handlePlaygroundUpdate(e) {
  //   e.preventDefault();
  //   fetch(`http://localhost:9292/playgrounds/${playgroundId}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       body: messageBody,
  //     }),
  //   })
  //     .then((r) => r.json())
  //     // .then((updatedMessage) => onUpdateMessage(updatedMessage));
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
      <Button type="submit" variant="contained" color="success" size="small">Edit Playground</Button>
      <br></br>
      <br></br>
      <Button onClick={handleDeleteClick} variant="outlined" color="secondary" size="small">Delete Playground</Button>
   
    </li>
    
  )
}

export default PlaygroundCard
