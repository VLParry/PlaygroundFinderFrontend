import {useState} from 'react'
import Button from '@mui/material/Button';


const PlaygroundCard = ( {playgroundId, name, address, handleDelete, onEdit}) => {
const [playgroundInfo,setPlaygroundInfo] = useState({name, address})
//{name, address} is the same as {name: name, address: address}
//props passes in name and address and were setting that into state which we then pass into our input value

const [isEditing, setIsEditing] = useState(false)

  function handleDeleteClick(){
    fetch(`http://localhost:9292/playgrounds/${playgroundId}`, {
      method: "DELETE",
    })
    handleDelete(playgroundId);
  }

  const handlePlaygroundChange = (e) => {
    const { name, value } = e.target
    setPlaygroundInfo((previousData) => ({
      ...previousData,
      [name] : value,
    }));
  }

  function handlePlaygroundUpdate(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/playgrounds/${playgroundId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: playgroundInfo.address,
        name: playgroundInfo.name,
      }),
    })
      .then((r) => r.json())
      .then((updatedPlayground) => {onEdit(updatedPlayground)
        console.log(updatedPlayground)
      setIsEditing(false)
      });
  }


  return (
    <li>
      {isEditing &&<form onSubmit={handlePlaygroundUpdate}>
   
   <p>
<label>
 Playground Name:
 <input 
 type="text"
 style={{width: '500px'}}
 name="name"
 value={playgroundInfo.name}
 onChange={handlePlaygroundChange}
 />
</label>
</p>

<p>
<label>
 Playground Address:
 <input 
 type="text"
 style={{width: '500px'}}
 name="address"
 value={playgroundInfo.address}
 onChange={handlePlaygroundChange}
 />
</label>
</p>

   
   <Button type="submit" variant="contained" color="success">Save Playground</Button>
   </form>}
      {!isEditing && <><h3>
        {/* //react fragment <> so it could be on the same level as the other buttons not inside a div, for styling*/}
        {playgroundInfo.name}
      </h3>
      <address>
        {playgroundInfo.address}
      </address>
      <br></br>
      <Button type="button" variant="contained" color="success" size="small" onClick={()  => {setIsEditing(true)}}>Edit Playground</Button></>}
      <br></br>
      <br></br>
      <Button onClick={handleDeleteClick} variant="outlined" color="secondary" size="small">Delete Playground</Button>
   
    </li>
    
  )
}

export default PlaygroundCard
