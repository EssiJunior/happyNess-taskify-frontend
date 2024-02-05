import { useEffect, useState } from 'react'
import '../styles/sign_in.scss'
// import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import { Alert, useMediaQuery } from "@mui/material";
import lottie from '../assets/lotties/signin.json'
import InputText from "../components/InputText/InputText"
import { Link, useNavigate } from "react-router-dom";
import {Visibility, VisibilityOff } from '@mui/icons-material';
import { Typography } from '@mui/joy';
import serverURL, { defaultOptions, isValidEmail } from '../utiils';
import Loader from '../components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';

function SignIn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const page = useSelector((state => state.actualPage.value));

    const is_lg = useMediaQuery('(max-width: 990px)')
    // const is_lg_1 = useMediaQuery('(max-width: 700px)')
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    
  // States for checking when loading
  const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

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

    //   useEffect(() => {
    // }, [])

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
