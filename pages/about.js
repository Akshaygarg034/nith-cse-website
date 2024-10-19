import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/student_faculty.module.css'
import ScrollToTop from "react-scroll-to-top";
import { useSession } from 'next-auth/react'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { TiArrowRightThick } from "react-icons/ti";
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

function About() {
    const scrollStyle = {
        height: '65px',
        width: '65px',
        borderRadius: '50%',
    }

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
            <Head>
                <title>About - NITH CSE</title>
                <meta name="description" content="Learn about the Computer Science and Engineering Department at NIT Hamirpur (NITH CSE), its vision, mission, and academic goals." />
                <link rel="canonical" href="https://nith-cse.vercel.app/about" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="https://thumbsnap.com/i/CZmvhUcX.png" type="image/png" />

                {/* JSON-LD for structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            "url": "https://nith-cse.vercel.app/about",
                            "name": "About NIT Hamirpur - CSE Department",
                            "description": "Learn about the CSE Department at NIT Hamirpur, its history, vision, and mission."
                        }),
                    }}
                />
            </Head>

            <ScrollToTop smooth='true' width={30} height={30} style={scrollStyle} />

            <section className='about'>
                <Login_></Login_>
                <div className={styles.studentHeader}>
                    <Image
                        src="https://res.cloudinary.com/dz1vsgxm5/image/upload/nith-cse-website/j4ulev7i0qe5offuvcyu.jpg"
                        className="fullPagePics"
                        alt=""
                        sizes='100vw'
                        height="0"
                        width="0"
                    />
                    <div className={styles.overlay}></div>
                    <Navbar />
                    <div className={styles.headerText} style={{ height: '100%' }}>
                        <h1>Computer Science and Engineering</h1>
                    </div>
                </div>
                <div className={styles.dummyHeader}></div>

                <section className={styles.messageSection}>
                    <div className={styles.message}>

                        <p><img src="https://www.iima.ac.in/themes/iima/images/qoute-1.svg" alt="comma" />Located in Hamirpur district of Himachal Pradesh, NIT Hamirpur enjoys a really scenic environment and pleasant weather. Established in the year 1986, as REC Hamirpur, NIT Hamirpur has been declared as the Institute of National Importance under the Act of Parliament, 2007. Established in 1989 as the Department of Computer Science & Engineering, we have an excellent & rich history and an outstanding record of contributions to the profession and community. The Department is well recognized for excellence in facilities and teaching.<img className={styles.img2} src="https://www.iima.ac.in/themes/iima/images/qoute-2.svg" alt="comma" /></p>
                    </div>
                </section>

                <div className={styles.allDetails}>
                    <div className={styles.detail}>
                        <div className={styles.heading}>
                            <h1 style={{ marginLeft: '-1%' }}>Academic Programmes</h1>
                        </div>
                        <div className={styles.data}>
                            <p><span><TiArrowRightThick /></span> B.Tech. in Computer Science & Engineering (Four Years)</p>
                            <p><span><TiArrowRightThick /></span> Dual Degree in Computer Science & Engineering [B.Tech. + M.Tech.] (Five Years)</p>
                            <p><span><TiArrowRightThick /></span> M.Tech. in Computer Science & Engineering (Two Years)</p>
                            <p><span><TiArrowRightThick /></span> M.Tech. in Computer Science & Engineering (Artificial Intelligence) (Two Years)</p>
                            <p><span><TiArrowRightThick /></span> Ph.D. in Computer Science & Engineering</p>
                        </div>
                    </div>
                </div>

                <section className={styles.messageSection} style={{ padding: '2% 0' }}>
                    <div className={styles.message}>

                        <p><img src="https://www.iima.ac.in/themes/iima/images/qoute-1.svg" alt="comma" />The aim of these programmes is to enable students to acquire specialized knowledge for various subjects in computer science & information technology, as well as to enrich the students personal, social and cognitive development to meet challenges of today and tomorrow. The Department is well equipped with high end computers, latest software & state-of-the-art IT infrastructure and all these computing resources are inter-connected with high speed intranet. Our students are exposed to up-to-date curriculum, technology and techniques. The Department has well experienced & dedicated faculty members with different specializations. Our curriculum is modified, enhanced and updated regularly as we introduce new courses to reflect current topics in this fast-changing discipline. Our faculty is involved in cutting-edge research areas, including computer networks, mobile computing, mobile ad hoc networks, wireless sensor networks, security, image processing, data mining, artificial intelligence, computer architecture and reconfigurable computing. The Department prides itself on good career opportunities for students. Our students graduate with more than 100% placement through campus. Many companies of repute show their interest to visit our Institute for campus recruitment.<img className={styles.img2} src="https://www.iima.ac.in/themes/iima/images/qoute-2.svg" alt="comma" /></p>
                    </div>
                </section>
                <Footer />
            </section>
        </>
    )
}

export default About
