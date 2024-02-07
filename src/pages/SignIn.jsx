// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

// REACT IMPORTS
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import Lottie from 'react-lottie';
import { Link, useNavigate } from "react-router-dom";

// MATERIAL UI
import { Alert, useMediaQuery } from "@mui/material";
import {Visibility, VisibilityOff } from '@mui/icons-material';
import { Typography } from '@mui/joy';

// COMPONENTS AND UTILITIES
import Loader from '../components/Loader/Loader';
import InputText from "../components/InputText/InputText"
import { login } from '../redux/slices/authSlice';
import serverURL, { defaultOptions, isValidEmail } from '../utiils';

// STYLE
import '../styles/sign_in.scss'

// ASSETS
import lottie from '../assets/lotties/signin.json'

function SignIn() {

    // REACT HOOKS
    const is_lg = useMediaQuery('(max-width: 990px)')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // STATES
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    
    // Handles form data change
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)

        console.log(values)
        if ( values.email === '' || values.password === '') {
            if (values.email === ""){
                setIsLoading(false)
                setErrorMessage('Please enter your email.')
            } 
            else if (values.password === ""){
                setIsLoading(false)
                setErrorMessage('Please enter your password.')
            } 
            else {
            setErrorMessage('')
            }
        }
        else if (!isValidEmail(values.email)) {
            setIsLoading(false)
            setErrorMessage('Please enter a valid email address.')
        } else {
            setErrorMessage('')
            return signIn()
        }
    };

    const signIn = () =>  {
        serverURL.post('/signin', values).then((response) => {
            setIsLoading(false);
            dispatch(login(response.data))
            navigate("/management")
        })
        .catch((error) => {
            setIsLoading(false);
            setErrorMessage('There was an error please try later.')
        });
    }

    // Bear password visibility
    function show() {
        return <Visibility style={{position:'absolute', right:'5%', bottom:'40%', color:"#47abcd", fontSize:"1.5rem", cursor:"pointer"}} onClick={() => toggle()}/>
    }

    function hide() {
        return <VisibilityOff style={{position:'absolute', right:'5%', bottom:'40%', color:"#47abcd", fontSize:"1.5rem", cursor:"pointer"}} onClick={() => toggle()} />
    }
    const [icon, setIcon] = useState(show());

    // Toggling password
    function toggle() {
        const x = document.getElementById('password-text');
        if (x.type === 'password') {
            x.type = 'text';
            setIcon(hide())
        } else {
            x.type = 'password';
            setIcon(show())
        }
    }

    return (
        <div className="sign-in">    
        <form className="form">
            <div className="holder">
                <section>
                    <InputText label='Email' helper='Enter your email' type="text" name='email' value={values.email} handler={(e) => handleChange(e) } />
                    <InputText label="Password" identifier='password-text' helper="Enter your password" icon={icon} type="password" name='password' value={values.password} handler={(e) => handleChange(e) } />
                </section>

                {
                    errorMessage !== '' && 
                    <div className="alert" onClick={() => setErrorMessage('')}>
                    <Alert severity="error">{errorMessage}</Alert>
                    </div>
                }

                <div className="action">
                    <button class="btn" onClick={(e) => handleSubmit(e)}>
                        
                    {isLoading? <Loader size='40px' marginTop='0' bg='#fff'/> : 'Sign In'}
                    </button>
                    <div className="alt">
                        <Typography>No account yet ?</Typography>
                        <Link class="btn" to='/signup'>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </form>

        <div className="illustration">
            <Lottie options={defaultOptions(lottie)}
                speed={0.5}
                height={is_lg ? 200 : 400}
                width={is_lg ? 200 :400}/>
            </div>
        </div>
    )

}

export default SignIn;  
