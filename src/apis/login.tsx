import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../axios'

export const login = createAsyncThunk('login',async ()=>{
    const response = await axios.post('/auth/login',{
        email: "",
        password: ""
    })
    return response;
})