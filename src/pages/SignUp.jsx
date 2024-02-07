// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

// REACT IMPORTS
import { useState } from 'react'
import Lottie from 'react-lottie';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

// MATERIAL UI
import { Alert, useMediaQuery } from "@mui/material";
import {Visibility, VisibilityOff } from '@mui/icons-material';
import { Typography } from '@mui/joy';

// COMPONENTS AND UTILITIES
import InputText from "../components/InputText/InputText"
import Loader from '../components/Loader/Loader';
import { login } from '../redux/slices/authSlice';
import serverURL, { defaultOptions, isValidEmail } from '../utiils';

// STYLE
import '../styles/sign_up.scss'

// ASSETS
import lottie from '../assets/lotties/signup.json'

function SignUp() {

  // REACT HOOKS
  const is_lg = useMediaQuery('(max-width: 990px)')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // State for registration
    const [values, setValues] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
  })

  // States for checking when loading
  const [isLoading, setIsLoading] = useState(false)

  const [errorMessage, setErrorMessage] = useState('')
  
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

  // Handling changes
    const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value })
  }

    // Handling the form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true)

      console.log(values)
      if ( values.firstName === '' || values.lastName === '' || values.email === '' || values.password === '') {

        if (values.firstName === ""){
            setIsLoading(false)
            setErrorMessage('Please enter your first name(s).')
        } 
        else if (values.lastName === ""){
            setIsLoading(false)
            // return generateError(t("EmailError1"))
            setErrorMessage('Please enter your last name(s).')
        } 
        else if (values.email === ""){
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
        return signUp()
      }
  };

  const signUp = () =>  {
    serverURL.post('/signup', values).then((response) => {
        setIsLoading(false);
        dispatch(login(response.data))
        navigate("/management")
    })
    .catch((error) => {
        setIsLoading(false);
        setErrorMessage('There was an error please try later.')
    });
}

  return (
    <div className="sign-up">    
      <form className="form">
        <div className="holder">
            <section>
                <InputText label='First name' helper='Enter your first name' type="text"   name='firstName' value={values.firstName} handler={(e) => handleChange(e) }/>
                <InputText label='Last name' helper='Enter your last name' type="text" name='lastName' value={values.lastName} handler={(e) => handleChange(e) }/>
                <InputText label='Email' helper='Enter your email' type="text" name='email' value={values.email} handler={(e) => handleChange(e) }/>
                <InputText label="Password" identifier='password-text' helper="Enter your password" icon={icon} type="password" name='password' value={values.password} handler={(e) => handleChange(e) }/>
            </section>

            {
                errorMessage !== '' && 
                <div className="alert" onClick={() => setErrorMessage('')}>
                <Alert severity="error">{errorMessage}</Alert>
                </div>
            }

            <div className="action">
              <button class="btn" onClick={(e) => handleSubmit(e)}>
                {isLoading? <Loader size='40px' marginTop='0' bg='#fff'/> : 'Sign Up'}
              </button>
              <div className="alt">
                <Typography>Already have an account ?</Typography>
                <Link class="btn" to='/signin'>
                    Sign In
                </Link>
              </div>
            </div>
        </div>
      </form>

      <div className="illustration">
          <Lottie options={defaultOptions(lottie)}
            speed={0.5}
            height={is_lg ? 250 : 500}
            width={is_lg ? 250 :500}/>
        </div>
    </div>
  )
}

export default SignUp;  
