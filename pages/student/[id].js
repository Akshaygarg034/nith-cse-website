import Head from 'next/head'
import Image from 'next/image';
import { Image as AntdImage } from 'antd';
import styles from '../../styles/student_faculty.module.css'
import ScrollToTop from "react-scroll-to-top";
import { useState, useEffect } from 'react';
import * as FaIcons from "react-icons/fa";
import Jump from 'react-reveal/Jump';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import dynamic from 'next/dynamic';
import { signIn, useSession } from "next-auth/react";

const Navbar = dynamic(() => import('../../components/Navbar'), { ssr: false });

function IdPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            fetchData();
        }
    }, [router.isReady]);

    async function fetchData() {
        const { id } = router.query;
        const response = await fetch(`/api/fetchStudentById?id=${id}`);

        if (response.ok) {
            const data = await response.json();
            setData(data);
        } else {
            console.error('Failed to fetch data:', response.status);
        }
        setLoading(false);
    }

    const scrollStyle = {
        height: '65px',
        width: '65px',
        borderRadius: '50%',
    }
    const { data: session, status, update } = useSession()

    const EditFunction = () => {
        let s = "Edit";
        if (status === 'unauthenticated') {
            s = 'SignIn to edit'
        }
        if (status === 'authenticated') {
            const { id } = router.query
            const rollNo = session.user.email.split('@')[0];
            if (rollNo.toLowerCase() === id.toLowerCase())
                return <Button href="/form" type="default" shape="round" icon={<EditOutlined />} size='large' style={{ marginTop: '2%' }}> {s}</Button>
        }

        else {
            return <Button onClick={() => signIn('google')} type="default" shape="round" icon={<EditOutlined />} size='large' style={{ marginTop: '2%' }}> {s}</Button>
        }
    }

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

    const Check_loading = () => {
        if (!loading && data) {
            return <>
                <Head>
                    <title>Students - NITH CSE</title>
                    <meta name="description" content="Student's Portfolio page of Computer Science and Engineering Department of NIT Hamirpur (NITH CSE)" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="https://thumbsnap.com/i/CZmvhUcX.png" type="image/png" />
                </Head>
                <ScrollToTop smooth='true' width={30} height={30} style={scrollStyle} />
                <section className={styles.facultyDetails}>
                    <Login_></Login_>
                    <div className={styles.studentHeader}>
                        <div> <Image
                            src="https://res.cloudinary.com/dz1vsgxm5/image/upload/nith-cse-website/cwvtkddwckfmwxzq9vzf.jpg"
                            className="fullPagePics"
                            alt=""
                            sizes="100vw"
                            height="0"
                            width="0"
                        /></div>

                        <div className={styles.overlay} style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
                        <Navbar />
                        <div className={styles.headerBox}>
                            <div className={styles.studentImage}>
                                <AntdImage width={150} height={150} src={data.image} />
                            </div>

                            <div className={styles.headerText}>
                                <h1>{data.name}</h1>
                                <p>{data.rollno}</p>
                                <Jump>
                                    <div className={styles.icons}>
                                        <a href={data.github ? data.github : "#"} target="_blank" className="fab"><FaIcons.FaGithub />
                                        </a>
                                        <a href={data.linkedin ? data.linkedin : "#"} target="_blank" className="fab"><FaIcons.FaLinkedin />
                                        </a>
                                    </div>
                                </Jump>
                                <EditFunction />
                            </div>
                        </div>
                    </div>
                    <div className={styles.dummyHeader}></div>
                    <div className={styles.allDetails}>

                        <div className={styles.detail}>
                            <div className={styles.heading}>
                                <h1>Personal Details</h1>
                                <div></div>
                            </div>
                            <div className={styles.data}>
                                <div><p>Father's Name:</p><span>{data.fathers_name}</span></div>
                                <div><p>About:</p><span>{data.about ? data.about : "Not added"}</span></div>
                                <div>
                                    <p>Portfolio:</p>
                                    {data.portfolio ? (
                                        <a href={data.portfolio} target="_blank" style={{ color: "#9e4646" }}>Personal Website</a>
                                    ) : (
                                        <span>Not added</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={styles.detail}>
                            <div className={styles.heading}>
                                <h1 style={{ marginLeft: '-1%' }}>Academic Details</h1>
                                <div style={{ marginLeft: '-46%' }}></div>
                            </div>
                            <div className={styles.data}>
                                <div><p>Batch:</p><span>{data.batch}</span></div>
                                <div><p>CGPA:</p><span>{data.cgpi}</span></div>
                            </div>
                        </div>

                        <div className={styles.detail}>
                            <div className={styles.heading}>
                                <h1>Contact</h1>
                                <div></div>
                            </div>
                            <div className={styles.data}>
                                <div><p>Email:</p><span>{data.email}</span></div>
                                <div><p>Phone:</p><span>{data.phone ? data.phone : "Not added"}</span></div>
                            </div>
                        </div>

                        <div className={styles.detail}>
                            <div className={styles.heading}>
                                <h1>Education</h1>
                                <div></div>
                            </div>
                            <div className={styles.data}>
                                <div><p>10th:</p><span>{data.education10 ? data.education10 : "Not added"}</span></div>
                                <div><p>12th:</p><span>{data.education12 ? data.education12 : "Not added"}</span></div>
                            </div>
                        </div>

                        <div className={styles.detail}>
                            <div className={styles.heading}>
                                <h1>Address</h1>
                                <div></div>
                            </div>
                            <div className={styles.data}>
                                <p>{data.address ? data.address : "Not added"}</p>
                            </div>
                        </div>

                        <div className={styles.detail}>
                            <div className={styles.heading}>
                                <h1>Skills</h1>
                                <div></div>
                            </div>
                            <div className={`${styles.data} ${styles.skills}`}>
                                {data.skills.map((skill, index) => {
                                    return <div key={index}><p>{skill ? skill : "Not added"}</p></div>
                                })}
                            </div>
                        </div>
                    </div>
                </section>

            </>
        }
        else {
            return <></>
        }

    }


    return (
        <Check_loading />

    )
}

export default IdPage
