import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/student_faculty.module.css'
import ScrollToTop from "react-scroll-to-top";
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Loader from '../components/Loader'
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const FacultyCard = dynamic(() => import('../components/facultycard'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

function faculty() {
    const { data: session, status } = useSession()
    const [isLoading, setIsLoading] = useState(true);

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

    const scrollStyle = {
        height: '65px',
        width: '65px',
        borderRadius: '50%',
    }
    const [facultyData, setFD] = useState([])

    useEffect(() => {
        const fetchFacultyData = async () => {
            try {
                const response = await fetch('/api/faculty');
                const data = await response.json();
                setFD(data);
            } catch (error) {
                console.error('Error fetching faculty data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchFacultyData();
    }, []);

    return (
        <>
            <Head>
                <title>Faculty - NITH CSE</title>
                <meta name="description" content="Meet the faculty members of the Computer Science and Engineering Department at NIT Hamirpur (NITH CSE)" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://nith-cse.vercel.app/faculty" />
                <link rel="icon" href="https://thumbsnap.com/i/CZmvhUcX.png" type="image/png" />
                {/* JSON-LD for structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "url": "https://nith-cse.vercel.app/faculty",
                            "name": "Faculty Members - NIT Hamirpur Computer Science and Engineering Department (NITH CSE)",
                            "description": "Meet the faculty members of NIT Hamirpur’s Computer Science Department, their research areas, and contact details."
                        }),
                    }}
                />
            </Head>

            <ScrollToTop smooth='true' width={30} height={30} style={scrollStyle} />
            <div className={styles.faculty}>
                <Navbar />
                <div className={styles.wideImage}>
                    <Login_></Login_>
                    <Image
                        src="https://res.cloudinary.com/dz1vsgxm5/image/upload/nith-cse-website/fpeajqzcabve34vkfd3q.jpg"
                        className="halfPagePics"
                        alt=""
                        sizes="62vw"
                        height="0"
                        width="0"
                    />
                    <h1>Faculty</h1>
                    <p>The curiosity and tenacity that drives our faculty’s research and creativity make their classrooms exciting places to be.</p>
                </div>
                <div className={styles.dummyFacultyHeader} style={{ height: '62vh' }}></div>
                <section className={styles.messageSection}>
                    <div className={styles.heading}>
                        <h1>Message from the Dean</h1>
                        <div></div>
                    </div>
                    <div className={styles.message}>

                        <p><img src="https://www.iima.ac.in/themes/iima/images/qoute-1.svg" alt="comma" />NITH's faculty come from diverse backgrounds and each individual is a sought-after specialist in his or her own area of expertise. Their personal experience as entrepreneurs, policy makers, researchers, theoreticians and consultants enlivens their teaching and gives it immediacy and relevance. Both as educators and researchers, they are continually learning. They are well aware that knowledge alone changes nothing; the power to affect and shape the future lies with the observing, reasoning, creative, curious mind.</p>
                        <p>IIMA faculty make a lasting impact on students because they challenge, inspire and truly care what happens to their students. Employing the very highest standards of teaching and mentoring, they mould students into innovators, entrepreneurs and leaders.</p>
                        <p>They are directly involved in every aspect of the Institute: teaching, governance and research and also work continuously with their industry peers.</p>
                        <p>Additionally, some experience in roles outside the academic world means that they have a realistic appreciation of the nitty-gritty of finance, markets, production, strategy and much more from the practice world. From their active involvement, comes the precious cross-fertilization of ideas and ensures that IIMA academic programmes are not just up to date but oriented to the future.<img className={styles.img2} src="https://www.iima.ac.in/themes/iima/images/qoute-2.svg" alt="comma" /></p>

                        <div>
                            <h4>Ram Naresh Sharma</h4>
                            <p>Dean (Faculty)</p>
                        </div>
                    </div>
                </section>

                <section className={styles.facultySection}>
                    <div className={styles.heading}>
                        <h1>Our Renowned Faculty</h1>
                        <div></div>
                    </div>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <div className={styles.cards}>
                            {facultyData && facultyData.map(user => {
                                return <FacultyCard key={user.id} user={user} />
                            })}
                        </div>
                    )}
                </section>

                <Footer />
            </div>
        </>
    )
}

export default faculty
