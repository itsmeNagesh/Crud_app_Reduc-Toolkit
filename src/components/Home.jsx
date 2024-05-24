import React from 'react'
import Incre from './Incre'
import Decre from './Decre'
import {useSelector} from 'react-redux'
import Form1 from './formcomp/Form1'
function Home() {
   const value=useSelector(state=>state.value)
  return (
    <>
    <Incre/>
     <h1>Count :{value}</h1>
     <Decre/>
     
                  
    </>


  )
}

export default Home