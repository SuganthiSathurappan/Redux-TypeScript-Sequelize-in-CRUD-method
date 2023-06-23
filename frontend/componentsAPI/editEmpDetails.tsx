import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { updateData, selectEmplist } from '../features/crudApiSlice'
import { useDispatch, useSelector } from 'react-redux';

function EditUserForm() {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate()

    const items = useSelector((state: any) => {
        console.log("Update State:" + state)
        return state.crudItemsApi.selectedEmployeeApi
    })
    const [user, setUser] = useState({
        id: items?.id || 0,
        empid: items?.empid || 0,
        empname: items?.empname || '',
        email: items?.email || '',
        error: null,
    })
    console.log("User :" + user.empid)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (user.empid === 0 || user.empname === '' || user.email === '') {
            alert('Please fill all the fields')
        }
        else {

            if (items) {
                console.log("user : " + user)
                dispatch(updateData({ ...user },user.id));
                alert('Updated successfully!')
                navigate('/ViewEmpDetails')

            }
        };

    }

    const Cancelbtn = () => {
        navigate('/ViewEmpDetails')
    }

    return (
        <div className="fullbody loginpadding">
            <form onSubmit={handleSubmit} className='addContent'>
                <div>
                    <h3 className='head'>Edit Employee Details</h3>
                </div>

                <div className="col mt-4">
                    <input type="text" onChange={e => setUser({ ...user, empid: parseInt(e.target.value) })}
                        value={user.empid} required
                        name="empid" className="form-control" placeholder="Employee ID" />
                    {/* {<p className="text-danger">{errorMsg.empid}</p>} */}
                </div >
                <div className="col mt-4">
                    <input type="text" onChange={e => setUser({ ...user, empname: e.target.value })}
                        value={user.empname} required
                        name="name" className="form-control" placeholder="Employee Name" />
                    {/* {<p class="text-danger">{errorMsg.name}</p>} */}
                </div >
                <div className="col mt-4">
                    <input type="email" onChange={e => setUser({ ...user, email: e.target.value })}
                        value={user.email} required
                        name="email" className="form-control" placeholder="Email Address" />
                </div>

                <div className='mt-4 head'>
                    <button onClick={handleSubmit} className='btn bg-primary ms-1'>Update user</button>
                    <button onClick={Cancelbtn}
                        className="button muted-button btn bg-primary ms-1">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditUserForm


