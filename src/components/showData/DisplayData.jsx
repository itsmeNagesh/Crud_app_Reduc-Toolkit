
import React, { useState } from 'react';
import { CTable, CTableRow, CTableBody, CTableHead,  CTableHeaderCell, CTableDataCell, CContainer, CFormInput, CButton } from '@coreui/react';
import { useSelector,useDispatch } from 'react-redux';
 import {RemoveStudent} from '../../services/Feature/LogicSlice'
import './display.css';
import { FaSearch } from 'react-icons/fa';

import { MdDelete } from "react-icons/md";

function DisplayData({ parentfntwoargu }) {
            const dispatch=useDispatch()
            const studentdata = useSelector(state => state.studentData);
            const value = useSelector(state => state.value);
            
            const [name, setName] = useState('');
            const studentdataG={
                name:'',
                age:'',
                email:''
            }
    const handleSearch = () => {
        const filteredStudent = studentdata.find(item => item.name === name);
        if (filteredStudent) {
            studentdataG.name=filteredStudent.name;
            studentdataG.age=filteredStudent.age;
            studentdataG.email=filteredStudent.email;

        } else {
       
            setName('')
        }
        parentfntwoargu(studentdataG.name, studentdataG.age,studentdataG.email);
    }

    return (
        <>
            <CContainer>
                <div className="cont">
                    <div className='ss'>
                        <CFormInput type="text" style={{ width: "90%" }} placeholder='Search by Name ...' id="exampleFormControlInput1" onChange={(e) =>
                         setName(e.target.value)} />
                        <button className='bt'  type="submit" onClick={handleSearch}><FaSearch className='kk' /></button>
                    </div>
                    <CTable>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Age</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Email_Id</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Marks</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {studentdata.map((item) => (
                                <CTableRow key={item.name}>
                                    <CTableDataCell>{item.name}</CTableDataCell>
                                    <CTableDataCell>{item.age}</CTableDataCell>
                                    <CTableDataCell>{item.email}</CTableDataCell>
                                    <CTableDataCell>{value}</CTableDataCell>
                                    <CTableDataCell><button className='bb' onClick={() => dispatch(RemoveStudent({ name: item.name }))}><MdDelete className='delicon'/></button>
                                    </CTableDataCell>

                                </CTableRow>
                            ))}
                        </CTableBody>
                    </CTable>
                </div>
            </CContainer>
        </>
    )
}

export default DisplayData;
