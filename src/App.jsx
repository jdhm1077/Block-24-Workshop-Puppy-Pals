
import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'
import './path-to-css.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppies)
  const [featPupId, setFeatPupId] = useState(null)

  return (
    <>
      <div>
      {puppies.map((puppy) => {
        const featuredPup = puppies.find((pup)=> pup.id === featPupId)
        console.log(featuredPup)
     return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
     {()=>{console.log("puppy id: ", puppy.id)}}
   }) }
   {featPupId &&  <div>
    <h2>{featuredPup.name}</h2>
    <ul>
      <li>Age: {featuredPup.age}</li>
      <li>Email: {featuredPup.email}</li>
    </ul>
     </div>}
      </div>
     
    </>
  )
}

export default App
