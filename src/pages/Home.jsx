import { useState } from 'react'
import '../styles/home.scss'
import withSplashScreen from '../hoc/withSplashScreen'
import { useMediaQuery } from "@mui/material";
import Lottie from 'react-lottie';
import lottie from '../assets/lotties/task1.json'
import Navbar from '../components/Navbar/Navbar';

function Home() {
  const is_lg = useMediaQuery('(max-width: 990px)')
  const [count, setCount] = useState(0)
  const defaultOptions = {
      loop: true,
      speed:0.1,
      autoplay: true,
      animationData: lottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="home">
        <div className="introduction">
          <div className='first'/>
          <h1 className='gradient__text'>Bienvenue sur<br /> Taskify.</h1>
          <p>Dans cette plateforme, tu vas renseigner tes informations personnels, qui serviront a mieux organiser l'eglise, et faciliter la recherche et le traitements des informations des membres</p>
          <div class="wrapper">
            <button class="btn">
                Start managing ...
            </button>
            <button class="btn">
                Sign In
            </button>
          </div>
        </div>
        <div className="illustration">
          <Lottie options={defaultOptions}
            speed={0.5}
            height={is_lg ? 250 : 500}
            width={is_lg ? 250 :500}/>
        </div>
      </div>
    </div>
  )
}

// Update this line, so that withSplashScreen gets Home as parameter
export default withSplashScreen(Home);  
