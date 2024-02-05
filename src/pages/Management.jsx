import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../styles/management.scss'
// import StarsCanvas from '../components/canvas/StarsCanvas'

const Management = () => {
    const user = useSelector((state => state.auth.user));
    const navigate = useNavigate()
    
    useEffect(() => {
        if (user === null) 
            navigate('/signin')
        
    }, [user, navigate])
    return (
        <section className='management'>
            <div className='slogan'>
                <h1 className='gradient__text'>Taskify</h1>
                <p className='gradient__text'>Manage your tasks easily</p>
            </div>
            <div className='divider' />
            <aside className='content'>
                <div className='new'>

                </div>
                <div className='all'></div>
            </aside>
            {/* <StarsCanvas /> */}
        </section>
    )
}

export default Management
