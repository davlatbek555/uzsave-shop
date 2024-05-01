import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    user: {
        email: '',
        password: '',
        name: '',
        surname: '',
        address: '',
        phone: '',
    },
    isAuth: JSON.parse(localStorage.getItem('user'))?.email || false,
    loading: false
}

function setUserWithLocale(user){
    localStorage.setItem('user', JSON.stringify(user))
    return user
}

const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setIsAuth: (state, {payload}) => {
            state.isAuth = payload
        },
        setUser: (state, {payload}) => {
            state.user = setUserWithLocale ({...state.user, ...payload});
        }
    }
})

export const {setIsAuth, setUser} = UserSlice.actions

export default UserSlice.reducer