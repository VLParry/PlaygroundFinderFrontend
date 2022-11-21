import React, {useState, useEffect} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Form = () => {
  const [newTown, setNewTown] = useState({name: ""})
  const [newPlayground, setNewPlayground] = useState({
    name: "",
    address: ""
   })

  return (
   <section>

<h1>Add a Town</h1>
    <form>
    <p>
<label>
   Name:
  <input 
  type="text"
  style={{width: '500px'}}
  name="name"
  // value={playground.name}
  // onChange={handleChange}
  />
</label>
</p>
<Button type="submit" variant="contained" color="success">Add town</Button>




    </form>
    <h1>Add a playground</h1>
    <form>
    <p>
<label>
  Playground Name:
  <input 
  type="text"
  style={{width: '500px'}}
  name="name"
  // value={playground.name}
  // onChange={handleChange}
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
  // onChange={handleChange}
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
  // onChange={handleChange}
  />
</label>
</p>
    </form>
    <Button type="submit" variant="contained" color="success">Add Playground</Button>

   </section>
  )
}

export default Form
