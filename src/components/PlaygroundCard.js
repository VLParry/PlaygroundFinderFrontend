import {useState} from 'react'
import Button from '@mui/material/Button';


const PlaygroundCard = ( {playgroundId, name, address, handleDelete}) => {
  // delete fetch
  function handleDeleteClick(){
    fetch(`http://localhost:9292/playgrounds/${playgroundId}`, {
      method: "DELETE",
    })
    handleDelete(playgroundId);
   
  }

//   const [newPlayground, setNewPlayground] = useState({
//     name: "",
//     address: "",
//     townName: ""
//    })



//   const handlePlaygroundChange = (e) => {
//     const { name, value } = e.target
//     setNewPlayground((previousData) => ({
//       ...previousData,
//       [name] : value,
//     }));
//   }


// function handleSubmitPlayground(e) {
//   e.preventDefault();
//   fetch("http://localhost:9292/playgrounds", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newPlayground)
//       })
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
      <Button onClick={handleDeleteClick} variant="contained" color="success" size="small">Delete Playground</Button>
   
    </li>
    
  )
}

export default PlaygroundCard
