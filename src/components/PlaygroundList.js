import {useState, useEffect} from 'react'

const PlaygroundList = () => {
const [playgroundList, setPlaygroundList] = useState([])

useEffect(() => {
    fetch("http://localhost:9292/playgrounds")
      .then((r) => r.json())
      .then((data) => {
        setPlaygroundList(data);
      });
  }, []);

  return (
    <div>
     <h1>Full List of Playgrounds</h1> 
     {playgroundList.map(playground => {
            return <li key={`playground-${playground.id}`}>{playground.name}</li>
          })}
    </div>
  )
}

export default PlaygroundList
