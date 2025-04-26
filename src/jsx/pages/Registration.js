import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux';
import logo from '../../images/logo-full.png'
import {
    loadingToggleAction,
    signupAction,
} from '../../store/actions/AuthActions';
function Register(props) {
    const [email, setEmail] = useState('');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const nav = useNavigate()
    function onSignUp(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }
        setErrors(errorObj);
        if (error) return;
        dispatch(loadingToggleAction(true));

        dispatch(signupAction(email, password, nav));
    }

    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='fix-wrapper'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-5 col-md-6'>
                    <div className='card mb-0 h-auto'>
                        <div className='card-body'>
                            <div className='text-center mb-3'>
                                <Link to={"/dashboard"}><img src={logo} alt="" className='logo-auth'/></Link>
                            </div>
                            <h4 className='text-center mb-4 '>Sign up your account</h4>
                            {props.errorMessage && (
                                <div className='text-danger p-1 my-2'>
                                    {props.errorMessage}
                                </div>
                            )}
                            {props.successMessage && (
                                <div className='text-danger p-1 my-2'>
                                    {props.successMessage}
                                </div>
                            )}
                            <form onSubmit={onSignUp}>
                                <div className='form-group mb-4'>
                                    <label className='form-label'>Username</label>
                                    <input type='text' className='form-control' placeholder='username' name='name' />
                                </div>
                                <div className='form-group mb-4'>
                                    <label className='form-label'>Email</label>
                                    <input type="email" className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='hello@example.com'
                                    />
                                    {errors.email && <div className="text-danger fs-12 mt-1">{errors.email}</div>}
                                </div>
                                <div className='form-group mb-sm-4 mb-3'>
                                    <label className='form-label'>Password</label>
                                    <div className="position-relative">
                                        <input 
                                            // type="password" 
                                            type={`${showPassword ? "text" : "password"}`}
                                            className="form-control"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />                                        
                                        <span className={`show-pass eye ${showPassword ? 'active' : ''}`} 
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
											<i className="fa fa-eye-slash" />
											<i className="fa fa-eye" />
										</span>
                                    </div>
                                    {errors.password && <div className="text-danger fs-12 mt-1">{errors.password}</div>}
                                </div>
                                <div className='text-center'>
                                    <button type='submit' className='btn btn-primary btn-block'>Sign up</button>
                                </div>
                            </form>
                            <div className='new-account mt-3 '>
                                <p>
                                    Already have an account?{' '}
                                    <Link className='text-primary' to='/login'>
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};

export default connect(mapStateToProps)(Register);
