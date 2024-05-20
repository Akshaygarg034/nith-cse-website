import React from 'react'

function Loader() {
    const preloaderStyle = {
        backgroundImage: `url(https://res.cloudinary.com/dz1vsgxm5/image/upload/v1716225340/nith-cse-website/ezz1rotolxihcfnebg4o.gif)`,
        height: '100vh',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'36%'
    }

    return (
        <div style={{ background: 'white' }}>
            <div className='preloader' style={preloaderStyle}> 
            </div>
        </div>

    )
}

export default Loader
