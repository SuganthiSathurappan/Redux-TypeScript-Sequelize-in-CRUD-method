import { createSlice, PayloadAction } from '@reduxjs/toolkit'



interface employeeType {
    empid: number
    name: string
    email: string
    dept: string

}
interface EmployeeState {
    employees: employeeType[]
    selectedEmployee: employeeType | null;
}
const initialState: EmployeeState = {
    employees: [{ empid: 1, name: 'Saran', email: 'saran@gmail.com', dept: 'IT' },
    { empid: 2, name: 'Balaji', email: 'balaji@gmail.com', dept: 'Management' },
    { empid: 3, name: 'Kiran', email: 'kiran@gmail.com', dept: 'Sales' },],
    selectedEmployee: null
}

const crudSlice = createSlice({
    name: 'crudItems',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<employeeType>) => {
            state.employees.push(action.payload)
        },

        editEmployee: (state, action: PayloadAction<employeeType>) => {
            const { empid, name, email, dept } = action.payload;
            const employee = state.employees.find((emp) => emp.empid === empid);
            if (employee) {
                employee.empid = empid;
                employee.name = name;
                employee.email = email;
                employee.dept = dept;
                //state.employees.push(action.payload)
            }
        },
        selectEmployee: (state, action: PayloadAction<number>) => {
            state.selectedEmployee = state.employees.find(
                (emp) => emp.empid === action.payload
            ) || null;
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            state.employees = state.employees.filter((emp) => emp.empid !== action.payload);
        },

    },
})

export const { addItem, editEmployee, deleteItem, selectEmployee } = crudSlice.actions
export default crudSlice.reducer


