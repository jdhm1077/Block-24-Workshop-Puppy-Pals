
import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppies)
  const [featPupId, setFeatPupId] = useState(null)

  return (
    <>
      <div>
      {puppies.map((puppy) => {
     return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
     {()=>{console.log("puppy id: ", puppy.id)}}
   }) }
   {featPupId && <p>{featPupId}</p>}
      </div>
     
    </>
  )
}

export default App
