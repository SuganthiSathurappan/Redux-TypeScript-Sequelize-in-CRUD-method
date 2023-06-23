import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WithNavbar from './withNavbar';
import ViewEmpDetails from './employeeList'
import AddEmpDetails from './addEmpDetails';
import EditUserForm from './editEmpDetails';


export default function adminApp() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route element={<WithNavbar />}>
                        <Route path="/" element={<ViewEmpDetails />} />
                        <Route path="/addEmpDetails" element={<AddEmpDetails />} />
                        <Route path="/ViewEmpDetails" element={<ViewEmpDetails />} />
                        <Route path="/editEmpDetails" element={<EditUserForm />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}
