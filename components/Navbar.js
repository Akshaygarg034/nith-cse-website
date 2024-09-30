import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css'
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [isOpen]);

  const Login_ = () => {
    if (status === 'unauthenticated') {
      return <Link onClick={() => signIn('google')} href="/" id="student">Sign In</Link>
    }
    if (session) {
      return (

        <Link onClick={() => signOut()} href="/" id="student">Sign Out</Link>
      )

    }
  }
  return (

    <div className={styles.Navbar}>
      <img onClick={()=>{location.push('/')}} src="https://thumbsnap.com/i/CZmvhUcX.png" alt="logo" className={styles.logo} />
      <div className={`${styles.navItems} ${isOpen && styles.open}`}>
        <Login_></Login_>
        <Link className={`${styles.navLinks} ${location.pathname === '/' ? styles.active : ''}`} href="/" id="home">Home</Link>
        <Link className={`${styles.navLinks} ${location.pathname === '/about' ? styles.active : ''}`} href="/about" id="about">About</Link>
        <Link className={`${styles.navLinks} ${location.pathname === '/faculty' ? styles.active : ''}`} href="/faculty" id="faculty">Faculty</Link>
        <Link className={`${styles.navLinks} ${location.pathname === '/student' ? styles.active : ''}`} href="/student" id="student">Students</Link>
        <Link className={styles.navLinks} href="https://nith.ac.in/computer-science-engineering" id="moreDetails" target="_blank">More Details</Link>
      </div>

      <div className={`${styles.navToggle} ${isOpen && styles.open}`}
        onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};

export default Navbar;
