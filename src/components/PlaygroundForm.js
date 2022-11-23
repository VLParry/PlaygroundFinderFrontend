import React, {useState} from 'react'
import Button from '@mui/material/Button';


//confused about passing handleAddPlayGround  down to use in my post fetch
//state is only updating in name

const PlaygroundForm = ( {handleAddPlayGround} ) => {

  const [newPlayground, setNewPlayground] = useState({
    name: "",
    address: "",
    // townName: ""
   })



  const handlePlaygroundChange = (e) => {
    const { name, value } = e.target
    setNewPlayground((previousData) => ({
      ...previousData,
      [name] : value,
    }));
  }


function handleSubmitPlayground(e) {
  e.preventDefault();
  fetch("http://localhost:9292/playgrounds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // townName: ,
        // name: name,
        // address: address,
      }),
      })
      .then((r) => r.json())
      .then((addedPlayground) => {
        handleAddPlayGround(addedPlayground);
        newPlayground("");
      })
}

  return (
  
  <section>
    <h1>Add a playground</h1>
    <form onSubmit={handleSubmitPlayground}>
   
    <p>
<label>
  Playground Name:
  <input 
  type="text"
  style={{width: '500px'}}
  name="name"
  value={newPlayground.name}
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
  value={newPlayground.address}
  onChange={handlePlaygroundChange}
  />
</label>
</p>

    
    <Button type="submit" variant="contained" color="success">Add Playground</Button>
    </form>
   </section>
  )
}

export default PlaygroundForm
