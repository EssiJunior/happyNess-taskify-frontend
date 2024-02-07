// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

// REACT IMPORTS
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

// MATERIAL UI
import { useMediaQuery } from "@mui/material";

// COMPONENTS AND UTILITIES
import withSplashScreen from '../hoc/withSplashScreen'
import { defaultOptions } from '../utiils';

// STYLE
import '../styles/home.scss'

// ASSETS
import lottie from '../assets/lotties/task1.json'

function Home() {

  const is_lg = useMediaQuery('(max-width: 990px)')
  

  return (
    <div>
      <div className="home">
        <div className="introduction">
          <div className='first'/>
          <h1 className='gradient__text'>Welcome on<br /><code>Taskify</code></h1>
          <div className="divider"></div>
          <p>In this plateform, you will manage your tasks very easily. This stuff of recording some important tasks indeed has all its importance, for that we offer you a great user experience.</p>
          <div class="wrapper">
            <Link class="btn" to='/management'>
                Start managing ...
            </Link>
            <Link class="btn" to='/signin'>
                Sign In
            </Link>
          </div>
        </div>
        <div className="illustration">
          <Lottie options={defaultOptions(lottie)}
            speed={0.5}
            height={is_lg ? 250 : 500}
            width={is_lg ? 250 :500}/>
        </div>
      </div>
    </div>
  )
}

export default withSplashScreen(Home);  
