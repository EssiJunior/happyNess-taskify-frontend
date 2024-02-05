import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Management = () => {
    const user = useSelector((state => state.auth.user));
    const navigate = useNavigate()
    
    useEffect(() => {
        if (user === null) 
            navigate('/signin')
        
    }, [user, navigate])
    return (
    <div>
        Management
    </div>
    )
}

export default Management
