import { useEffect, useState } from 'react'
import '../styles/sign_up.scss'
// import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import { useMediaQuery } from "@mui/material";
import lottie from '../assets/lotties/signup.json'
import InputText from "../components/InputText/InputText"
import { Link } from "react-router-dom";
import {Visibility, VisibilityOff } from '@mui/icons-material';
import { Typography } from '@mui/joy';

function SignUp() {
  // const page = useSelector((state => state.actualPage.value));

  const is_lg = useMediaQuery('(max-width: 990px)')
  // const is_lg_1 = useMediaQuery('(max-width: 700px)')

  // Bear password visibility
  function show() {
    return <Visibility style={{position:'absolute', right:'2%', bottom:'40%', color:"#47abcd", fontSize:"1.5rem", cursor:"pointer"}} onClick={() => toggle()}/>
  }

  function hide() {
      return <VisibilityOff style={{position:'absolute', right:'2%', bottom:'40%', color:"#47abcd", fontSize:"1.5rem", cursor:"pointer"}} onClick={() => toggle()} />
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

  const defaultOptions = {
      loop: true,
      speed:0.1,
      autoplay: true,
      animationData: lottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

  //   useEffect(() => {
  // }, [])

  return (
    <div className="sign-up">    
      <form className="form">
        <div className="holder">
            <section>
                <InputText label='First name' helper='Enter your first name' type="text"/>
                <InputText label='Last name' helper='Enter your last name' type="text"/>
                <InputText label='Email' helper='Enter your email' type="text"/>
                <InputText label="Password" identifier='password-text' helper="Enter your password" icon={icon} type="password"/>
            </section>

            <div className="action">
              <button class="btn">
                  Sign Up
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
          <Lottie options={defaultOptions}
            speed={0.5}
            height={is_lg ? 250 : 500}
            width={is_lg ? 250 :500}/>
        </div>
    </div>
  )
}

export default SignUp;  
