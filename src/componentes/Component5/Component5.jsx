import React from 'react'
import { useContext } from "react";
import { userContext } from '../Component1/Component1';
import { themeContext } from '../Component3/Component3';



const Component5 = () => {

const userInfo = useContext(userContext)
const themeInfo = useContext(themeContext)


  return (
    <div>Component5
        <h3>{themeInfo}</h3>
        <h2>{`Hello ${userInfo.name} again!`}</h2>
    </div>
  )
}

export default Component5