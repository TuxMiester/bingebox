import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../axios'

export const login = createAsyncThunk('User/login',async (credentials:any)=>{
    const response = await axios.post('/auth/login',{
        email: credentials.email,
        password: credentials.password
    },
    {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).then((response:any)=>{
       localStorage.setItem("token", response.data.access_token);
        return response.data;
    })
    return response;
})

export const signup = createAsyncThunk('User/signup',async (credentials:any)=>{
  console.log("credentials", credentials)
  const response = await axios.post('/auth/signup',{
    name: credentials.name,
    email: credentials.email,
    mobile_number: credentials.mobile,
    password: credentials.password,
    confirmPassword: credentials.confirmPassword
  },
  {
      headers: {
          'Access-Control-Allow-Origin': '*'
      }
  }).then((response:any)=>{
     localStorage.setItem("token", response.data.access_token);
      return credentials;
  })
  return response;
})

const initialData = {}

export const UserSlice = createSlice({
    name:'User',
    initialState: {
        User:initialData,
        loading:'idle',
        error:''
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
          if (state.loading === 'idle') {
            state.loading = 'pending'
          }
        })
        builder.addCase(login.fulfilled, (state, action) => {
          if (state.loading === 'pending') {
            state.User = action.payload
            state.loading = 'idle'
          }
        })
        builder.addCase(login.rejected, (state, action) => {
          if (state.loading === 'pending') {
            state.loading = 'idle'
            state.error = 'Error occured'
          }
        })
        builder.addCase(signup.pending, (state, action) => {
          if (state.loading === 'idle') {
            state.loading = 'pending'
          }
        })
        builder.addCase(signup.fulfilled, (state, action) => {
          if (state.loading === 'pending') {
            state.User = action.payload
            state.loading = 'idle'
          }
        })
        builder.addCase(signup.rejected, (state, action) => {
          if (state.loading === 'pending') {
            state.loading = 'idle'
            state.error = 'Error occured'
          }
        })
      },
})

export const getUser = (state:any) => state.User.User;

export default UserSlice.reducer;