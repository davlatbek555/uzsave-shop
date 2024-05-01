import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../api";
import { resgisterUrl } from "../../utils/urls";


export const register = createAsyncThunk('register', async (data) =>{
    let response = await Axios.post(resgisterUrl, data)
    return response.data
})