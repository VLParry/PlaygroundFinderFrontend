
import React, {useState, useEffect} from 'react'
import TownCard from './TownCard'
import Button from '@mui/material/Button';
// import {  useNavigate } from 'react-router-dom';

// import { Link } from 'react-router-dom'


const Towns = () => {
    const [towns, setTowns] = useState([])
    const [newTown, setNewTown] = useState({name: ""})
    
    // const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:9292/towns")
          .then((r) => r.json())
          .then((data) => {
            setTowns(data);
          });
      }, []);

      const handleTownChange = (e) => {
        const { name, value } = e.target
        setNewTown((previousData) => ({
          ...previousData,
          [name] : value,
        }));
      }

       const postTown = (town) => {
         const newTownArr = [...towns, town]
        setTowns(newTownArr)
      setNewTown({name: ""})
      }

      function handleSubmitTown(e) {
        e.preventDefault();
        fetch("http://localhost:9292/towns", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          body: JSON.stringify({
            name: newTown.name,
          })
          })
          .then((r) => r.json())
          .then((addedTown) => {
              postTown(addedTown)
           })
      }
   
  
    return (
    <div>

<h1>List of Towns</h1>
        {towns.map(town => (
            <TownCard key={town.id} name={town.name} id={town.id} />
        ))}

<h3>Add a Town</h3>
    <form onSubmit={handleSubmitTown}>
    <p>
<label>
   Name:
  <input 
  type="text"
  style={{width: '500px'}}
  name="name"
  value={newTown.name}
  onChange={handleTownChange}
  />
</label>
</p>
<Button type="submit" variant="contained" color="success">Add town</Button>
</form>

    </div>
  )
}

export default Towns