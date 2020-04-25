import { authActionTypes } from './auth.action.types';
import axios from 'axios';
import { setAlert } from '../alert/alert.action';

export const register = ({ name, email, password }) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({name, email, password});
    try {
        const res = await axios.post('/api/users', body, config)
        dispatch({
            type: authActionTypes.REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach( error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: authActionTypes.REGISTER_FAIL
        })
    }
}