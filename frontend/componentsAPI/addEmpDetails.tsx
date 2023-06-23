import React, { FormEvent, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux'
import { createData } from '../features/crudApiSlice'

export default function AddEmpDetails() {
    const dispatch = useDispatch<any>()
    //  const alertMessage = useSelector(selectAlertMessage);

    const [form, setform] = useState({
        empid: 0,
        empname: '',
        email: '',
        error: ''
    })

    const inputHandler = (e: any) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (form.empid === 0 || form.empname === '' || form.email === '') {
            alert('Please fill all the fields')
        }
        else {
            const newItem = {
                ...form
            }
            dispatch(createData(newItem))
           // alert('Record added successfully!')
            setform({
                empid: 0,
                empname: '',
                email: '',
                error: ''
            })
        };

    }


    return (
        <div className="fullbody loginpadding">
            {/* {alertMessage && <div>{alertMessage}</div>} */}
            <form className='addContent' >
                <h3 className='head'>Add Employee Details</h3>
                <div className="container mt-3 mb-3 ">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Employee ID</label>
                        <input type="empid" name="empid" className="form-control" value={form.empid} placeholder="Enter Employee ID" required
                            onChange={inputHandler} id="exampleFormControlInput1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="empname" name="empname" className="form-control" value={form.empname}
                            placeholder="Enter Employee Name" required onChange={inputHandler} id="exampleFormControlInput1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" value={form.email} onChange={inputHandler} required
                            name="email" className="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com" />
                    </div>

                    <div className="mb-3 head">
                        <button type='submit' onClick={handleSubmit} className="btn btn-success addempstylebtn">Submit</button>
                        <button type='reset' className="btn btn-danger addempstylebtn">Clear</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


