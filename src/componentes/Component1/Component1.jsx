import React, {createContext, useState} from 'react'
import Component2 from '../Component2/Component2'


export const userContext = createContext()


const Component1 = () => {
const [user, setUser] = useState({
  name: 'Alberto',
  lastName: 'Rivera'
})



  return (
    <div>
      <userContext.Provider value={user}>
      <h1>{`Hello ${user.name}!`}</h1>
        <Component2/>
      </userContext.Provider>
      
    </div>
  )
}

export default Component1