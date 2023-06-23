import React, { useEffect } from 'react'
import '../css/style.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, fetchAllData, selectOneEmplist } from '../features/crudApiSlice'
import { useNavigate } from 'react-router-dom'


function EmployeeList() {

    const dispatch = useDispatch<any>()
    const navigate = useNavigate()
    const items = useSelector((state: any) => {
        console.log(state)
        return state.crudItemsApi.employeesApi
    })

    useEffect(() => {
        dispatch(fetchAllData());
    }, [dispatch]);

    if (!Array.isArray(items)) {
        return <div>Loading...</div>; // or display a loading indicator while the data is being fetched
    }

    const handleEdit = (id: number, empid: number) => {
        console.log("ID:empid " + id, ":" + empid)
        dispatch(selectOneEmplist(empid));
        navigate(`/editEmpDetails`)
    };

    const handleDelete = (id: number, empid: number) => {
        console.log("ID:empid " + id, ":" + empid)
        dispatch(deleteData(id, empid));
    }


    return (
        <div className='fullbody'>
            <div className='container my-4 p-5 getdetailsdiv'>
                <h3>View Employee Details</h3>

                <div className='padding-top:50px'>
                    <table className="table text-white ">
                        <thead className="table-dark">
                            <tr>
                                <th>EmpoyeeId</th>
                                <th>Name</th>
                                <th>Email</th>

                                <th>Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item: any) => (
                                <tr key={item.empid}>
                                    <td>{item.empid}</td>
                                    <td>{item.empname}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button onClick={() => handleEdit(item.id, item.empid)}
                                            className="button muted-button btn bg-success text-white ms-1">
                                            Edit
                                        </button>
                                        &nbsp;
                                        <button onClick={() => handleDelete(item.id, item.empid)}
                                            className="button muted-button btn bg-danger text-white ms-1">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList

function dispatch(arg0: any) {
    throw new Error('Function not implemented.')
}
