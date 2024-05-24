import React from 'react'
import {useDispatch} from 'react-redux'
import { increment } from '../services/Feature/LogicSlice'
import './incre.css'
function Incre() {
    const  dispatch=useDispatch()
  return (
    <>
             <h2>Increase Value</h2>
    <button className='Btn' onClick={()=>dispatch(increment())}>Click Here</button> 
    </>

  )
}

export default Incre