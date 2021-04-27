import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useAuthAction } from '../../../../actions/loginActions'
const AuthLogin = () => {
    const [authUser, setAuthUser] = useState('');
    const [authPass, setAuthPass] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const getAuthUser = () => dispatch(useAuthAction(authUser,authPass));
        getAuthUser();
    },[]);

    

};
export default AuthLogin;