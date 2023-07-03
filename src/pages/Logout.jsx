import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {logout} from '../redux/auth/authSlice';
import {useNavigate} from "react-router-dom";

const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authUser = useSelector((state) => state.auth.user);

    useEffect(() => {
        dispatch(logout())
        // redirect to home if already logout in
        if (authUser == null) navigate('/');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default Logout;