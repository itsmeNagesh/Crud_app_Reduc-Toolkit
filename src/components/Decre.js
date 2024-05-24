import React from 'react'
import {useDispatch } from 'react-redux'
import { decrement} from '../services/Feature/LogicSlice'
import './Decr.css'
function Decre() {
    const dispatch=useDispatch();
  return (
  <>
      <h2>Decrease the Value</h2>
    <button  className='Btn' onClick={()=>dispatch(decrement())}>Click here</button>
  </>
  )
}

export default Decre