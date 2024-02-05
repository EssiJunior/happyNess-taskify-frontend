import { Component } from 'react'
import './splash_screen.scss'

import logo from "../assets/2.png"
import Loader from '../components/Loader/Loader'

const SplashContent = () => {
    return (
        <div className='splash'>
            <img src={logo} alt="logo" loading='lazy'/>
            <h2>Manage your tasks easily</h2>
            <Loader />
        </div>
    )
}

export default function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                // Put here your await requests/ API requests
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 6500)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return SplashContent();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}
