import React from 'react'
import Loader from './Loader';

const PreLoader = ()=> {
    const preloaderStyle = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div className='preloader' style={preloaderStyle}>
            <Loader/>
        </div>
    )
}

export default PreLoader
