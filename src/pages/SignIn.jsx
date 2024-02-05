import { useEffect, useState } from 'react'
import '../styles/sign_in.scss'
// import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import { useMediaQuery } from "@mui/material";
import lottie from '../assets/lotties/signin.json'
import InputText from "../components/InputText/InputText"
import { Link } from "react-router-dom";
import {Visibility, VisibilityOff } from '@mui/icons-material';
import { Typography } from '@mui/joy';

function SignIn() {
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
        <div className="sign-in">    
        <form className="form">
            <div className="holder">
                <section>
                    <InputText label='Email' helper='Enter your email' type="text"/>
                    <InputText label="Password" identifier='password-text' helper="Enter your password" icon={icon} type="password"/>
                </section>

                <div className="action">
                <button class="btn">
                    Sign In
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
            <Lottie options={defaultOptions}
                speed={0.5}
                height={is_lg ? 200 : 400}
                width={is_lg ? 200 :400}/>
            </div>
        </div>
    )
}

export default SignIn;  
