import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';


//confused about passing playground info down as props to use in my form values
//state is only updating in name

const Form = () => {

  const [newPlayground, setNewPlayground] = useState({
    name: "",
    address: "",
    townName: ""
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
      body: JSON.stringify(newPlayground),
    })
      .then((r) => r.json())
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
  // value={playground.name}
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
  name="name"
  // value={playground.address}
  onChange={handlePlaygroundChange}
  />
</label>
</p>
<p>
<label>
  Town Name:
  <input 
  type="text"
  style={{width: '500px'}}
  name="name"
  // value={town.name}
  onChange={handlePlaygroundChange}
  />
</label>
</p>
    
    <Button type="submit" variant="contained" color="success">Add Playground</Button>
    </form>
   </section>
  )
}

export default Form
