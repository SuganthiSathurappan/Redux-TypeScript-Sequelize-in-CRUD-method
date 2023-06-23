import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import http from '../http-common'
import { AxiosResponse } from 'axios'
import { error } from 'console'


interface employeeTypeApi {
    empid: number
    empname: string
    email: string
    error: string | null
}
interface EmployeeStateApi {
    employeesApi: employeeTypeApi[]
    selectedEmployeeApi: employeeTypeApi | null;
}
const initialState: EmployeeStateApi = {
    employeesApi: [],
    selectedEmployeeApi: null
}

const crudApiSlice = createSlice({
    name: 'crudItemsApi',
    initialState,
    reducers: {
        selectEmplist: (state, action) => {

            state.employeesApi = action.payload;
            console.log(state.employeesApi)
        },
        addItem: (state, action: PayloadAction<employeeTypeApi>) => {
            state.employeesApi.push(action.payload)
            //alert('Record added successfully!')
        },
        selectOneEmplist: (state, action: PayloadAction<number>) => {
            state.selectedEmployeeApi = state.employeesApi.find(
                (emp) => emp.empid === action.payload
            ) || null;
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            state.employeesApi = state.employeesApi.filter((emp) => emp.empid !== action.payload);
            alert("One Record as been deleted")
        },

    },
})

export const fetchAllData = () => async (dispatch: any) => {
    try {
        const response: AxiosResponse<employeeTypeApi[]> = await http.get<employeeTypeApi[]>('/api/data');
        console.log("fetchAllData Response:" + response)
        dispatch(selectEmplist(response.data));
    } catch (error) {
        console.log(error)
    }
};

export const createData = (employeesApi: employeeTypeApi) => async (dispatch: any) => {
    try {
        const resCreate = await http.post('/api/insert', employeesApi);
        const resMessage = resCreate.data.message;
        console.log("createData API Response:" + resCreate.data)
        // if (resCreate.status !== 200) {          
        //     console.log("createData API Response:" + resMessage)
        //     alert(resMessage)
        // }
        if (resMessage === "true") {
            console.log("createData API Response:" + resCreate.data)
            dispatch(addItem(resCreate.data[0]));
            alert("New employee created successfully")
        }
        else {
            alert(resMessage)
        }
    } catch (error) {
        console.log(error)
    }
};

// export const fetchOneData = (id: number, oneempid: number) => async (dispatch: any) => {
//     console.log("fetcftcv")
//     try {
//         const resOne: AxiosResponse<employeeTypeApi[]> = await http.get<employeeTypeApi[]>(`/api/selectone/${id}`);
//         console.log("OneData Response:" + resOne.data)
//         //  dispatch(selectOneEmplist(resOne));
//     } catch (error) {
//         console.log("fetchOneData error : " + error)
//     }
// };

export const updateData = (employeesApi: employeeTypeApi, id: number) => async (dispatch: any) => {
    try {
        const getid = id
        const responseUpadte: AxiosResponse<employeeTypeApi[]> = await http.put<employeeTypeApi[]>(`/api/update/${getid}`, employeesApi);
        console.log("updateData Response:" + responseUpadte)
    } catch (error) {
        console.log(error)
    }
};

export const deleteData = (id: number, oneempid: number) => async (dispatch: any) => {
    console.log(id + ":" + oneempid)
    try {
        const responseDelete: AxiosResponse<employeeTypeApi[]> = await http.delete<employeeTypeApi[]>(`/api/delete/${id}`);
        console.log("deleteData Response:" + responseDelete.data)
        dispatch(deleteItem(oneempid));
    } catch (error) {
        console.log("deleteData error : " + error)
    }
};

export const { selectEmplist, selectOneEmplist, addItem, deleteItem } = crudApiSlice.actions
export default crudApiSlice.reducer


