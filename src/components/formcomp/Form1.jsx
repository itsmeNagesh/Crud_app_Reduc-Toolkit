
import React, { useState } from 'react'
import { CButton, CContainer, CForm, CFormInput, CFormLabel, CRow, CCol } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import './form.css'
import { addStudent, UpdateStudent, increment } from '../../services/Feature/LogicSlice';
import { useDispatch } from 'react-redux';
import DisplayData from '../showData/DisplayData';
import Home from '../Home'

function Form1() {
  const dispatch = useDispatch();
  const [Name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  function validate(val) {
    return val.length === 0;
  }

  const studata = {
    name: Name,
    age: age,
    email: email
  }
  const isvalidEmail=(email)=>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // if (!values.username) {
    //   errors.username = "Username is required!";
    // }
    if (!email) {
        return true;
    } else if (!regex.test(email)) {
            return true;
    }
    return false
  }

  const validation = (studata) => {
    if (validate(studata.name) || validate(studata.age) || isvalidEmail(studata.email)) {
      setError(true);
      return false;
    }
    return true;
  };

  const takedatachild = (cname, cage, cemail) => {
    setName(cname);
    setAge(cage);
    setEmail(cemail);
  }

  const handleSubmit = () => {
    if (validation(studata)) {
      dispatch(increment());
      dispatch(addStudent(studata));
      setName('');
      setAge('');
      setEmail('');
      setError(false)
    } else {
      setError(true);
    }
  }

  return (
    <>
      <CRow>
        <CCol>
          <CContainer>
            <div className="cont">
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1" style={{ fontWeight: "bold" }}>First Name</CFormLabel>
                  <CFormInput type="text" id="exampleFormControlInput1"
                    value={Name} onChange={(e) => setName(e.target.value)}
                    placeholder="name..." />
                  {error && validate(Name) && <level style={{ color: "red" }}>Name can't be empty</level>}
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1" style={{ fontWeight: "bold" }}>Age</CFormLabel>
                  <CFormInput type="number" id="exampleFormControlInput1" onChange={(e) => setAge(e.target.value)}
                    value={age}
                    placeholder="Age" />
                  {error && validate(age) && <level style={{ color: "red" }}>Age can't be empty</level>}
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1" style={{ fontWeight: "bold" }}>@Email_Id</CFormLabel>
                  <CFormInput type="email" id="exampleFormControlInput1" onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="@Email.com" />
                  {error && validate(email) && <level style={{ color: "red" }}>Email can't be empty</level>}
                </div>
                <div className="btnform">
                  <CButton className='but1' onClick={() => (dispatch(UpdateStudent(studata), setName(''), setAge(''), setEmail('')))}>Update</CButton>
                  <CButton className='but2' onClick={handleSubmit}>Submit</CButton>
                </div>
              </CForm>
            </div>
          </CContainer>
          <DisplayData parentfntwoargu={takedatachild} />
        </CCol>
        <CCol>
          <div className="cont">
            <Home />
          </div>
        </CCol>
      </CRow>
    </>
  )
}

export default Form1;
