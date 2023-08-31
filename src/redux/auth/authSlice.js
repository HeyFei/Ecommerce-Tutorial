import {createSlice, createAsyncThunk, createAction} from '@reduxjs/toolkit'
import authService from './authService'
import {extractErrorMessage} from '../../utils'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    token: null,
    isLoading: false,
}

export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
        try {
            return await authService.register(user)
        } catch (error) {
            return thunkAPI.rejectWithValue(extractErrorMessage(error))
        }
    }
)

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

export const logout = createAction('auth/logout', () => {
    authService.logout()
    return {}
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(register.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                if (action.payload.code == 0) {
                    state.user = action.payload.data.user_info;
                    state.token = action.payload.data.access_token;
                }
                state.isLoading = false;
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
            })
    },
})

export default authSlice;