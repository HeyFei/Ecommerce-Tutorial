import {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/auth/authSlice';

const Login = () => {
    const authUser = useSelector((state) => state.auth.user);
    const isLoading = useSelector((state) => state.auth);


    console.log(authUser);

    useEffect(() => {
        // redirect to home if already logged in
        if (authUser) navigate('/');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().email().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = {resolver: yupResolver(validationSchema)};

    // get functions to build form with useForm() hook
    const {register, handleSubmit, formState} = useForm(formOptions);
    const {errors, isSubmitting} = formState;

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function onSubmit({username, password}) {
        const userData = {
            'email': username,
            'password': password
        }
        dispatch(login(userData))
            .unwrap()
            .then((user) => {
                console.log(user);
                toast.success(`Logged in as ${user.username}`)
                navigate('/')
            })
            .catch(toast.error)
    }

    if (isLoading) {
        // return <h2>Loading...</h2>
    }

    return (
        <section>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active">Login</li>
                                <li className="breadcrumb-item"><Link to='../register'>Rigister</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-box-main">
                <div className="container">
                    <div className="row new-account-login">
                        <div className="col-sm-6 col-lg-6 mb-3">
                            <div className="title-left">
                                <h3>Account Login</h3>
                            </div>
                            {/* <h5><a data-toggle="collapse" href="#formLogin" role="button" aria-expanded="false">Click here to Login</a></h5> */}
                            <form onSubmit={handleSubmit(onSubmit)} className="mt-3 collapse review-form-box show"
                                  id="formLogin">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="InputEmail" className="mb-0">Email Address</label>
                                        <input defaultValue="imfee@126.com" name="username"
                                               type="text" {...register('username')}
                                               className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                               id="InputEmail" placeholder="Enter Email"/>
                                        <div className="invalid-feedback">{errors.username?.message}</div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="InputPassword" className="mb-0">Password</label>
                                        <input defaultValue="aaaaaa" name="passoword"
                                               type="password" {...register('password')}
                                               className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                               id="InputPassword" placeholder="Password"/>
                                        <div className="invalid-feedback">{errors.password?.message}</div>
                                    </div>
                                </div>
                                <button type="submit" className="btn hvr-hover">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;