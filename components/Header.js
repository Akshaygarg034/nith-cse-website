import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/header.module.css'
import { useSession } from 'next-auth/react'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

function Header() {
  const { data: session, status } = useSession()
  const Login_ = () => {
    if (status === 'authenticated') {
      return <Chip
        avatar={<Avatar alt="Natacha" src={session.user.image} />}
        label={session.user.name}
        variant="outlined"
        id='avatar'
      />
    }
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.overlay}></div>

        <video src="https://res.cloudinary.com/dz1vsgxm5/video/upload/v1729336941/nith-cse-website/bidaegjvqeggbtqp9xea.mp4" autoPlay loop muted className={styles.bgVideo} loading="lazy" preload="metadata" playsInline/>
        <Navbar />
        <div className={styles.content}>

          <Login_></Login_>
          <h1>This is NITH </h1>
          <p>A leading centre of computer science research and education in India.</p>
        </div>
      </div>
    </>
  )
}

export default Header
