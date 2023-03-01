import React, { createContext, useContext } from 'react'
import { userContext } from '../Component1/Component1'
import Component4 from '../Component4/Component4'

export const themeContext = createContext()

const Component3 = () => {

const userLastName = useContext(userContext)
const theme = 'Dark'
  return (
    <div>
        <themeContext.Provider value={theme}>
            {userLastName.lastName}
            <Component4 />
        </themeContext.Provider>
       
    </div>
  )
}

export default Component3