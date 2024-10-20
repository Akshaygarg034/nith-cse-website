import Head from 'next/head'
import Image from 'next/image';
import styles from '../../styles/student_faculty.module.css'
import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState, useRef, useCallback } from 'react';
import { useSession } from 'next-auth/react'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Fade from 'react-reveal/Fade';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../../components/Loader'
import dynamic from 'next/dynamic';

const UserCard = dynamic(() => import('@/components/usercard'), { ssr: false });
const StudentGrid = dynamic(() => import('@/components/StudentGrid'), { ssr: false });
const SearchBar = dynamic(() => import('@/components/SearchBar'), { ssr: false });
const Navbar = dynamic(() => import('../../components/Navbar'), { ssr: false });
const Footer = dynamic(() => import('../../components/Footer'), { ssr: false });


function student() {
    const { data: session, status } = useSession()
    const [studentDataState, setStudentDataState] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const searchTermRef = useRef("");
    const initialLoadDone = useRef(false);

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

    const fetchStudents = useCallback((reset = false) => {
        if (isLoading || !hasMore) return;  // Prevent duplicate calls if already loading
        setIsLoading(true);

        const currentPage = reset ? 1 : page;

        fetch(`/api/fetchAllStudents?page=${currentPage}&limit=12&search=${searchTermRef.current}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log("data", data);
                if (reset) {
                    setStudentDataState(data.students);
                } else {
                    setStudentDataState((prevStudents) => [...prevStudents, ...data.students]);
                }

                setPage(currentPage + 1);
                if (data.students.length < 12) {
                    setHasMore(false);
                }
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, [isLoading, hasMore, page]);

    useEffect(() => {
        if (!initialLoadDone.current) {
            fetchStudents(true);
            initialLoadDone.current = true;
        }
    }, [fetchStudents]);

    const handleSearch = (newSearchTerm) => {
        searchTermRef.current = newSearchTerm;
        setPage(1);
        setHasMore(true);
        setStudentDataState([]);
        fetchStudents(true);
    };

    return (
        <>
            <Head>
                <title>Students - NITH CSE</title>
                <link rel="icon" href="/favicon.png" type="image/png" />
                <meta name="description" content="Find student resources, academic guides, and achievements from the Computer Science and Engineering Department of NIT Hamirpur (NITH CSE)." />
                <link rel="canonical" href="https://nith-cse.vercel.app/student" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* JSON-LD for structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "url": "https://nith-cse.vercel.app/student",
                            "name": "Student Resources - NIT Hamirpur CSE Department",
                            "description": "Find information regarding student guides, research papers, and student achievements."
                        }),
                    }}
                />
            </Head>

            <ScrollToTop smooth='true' width={30} height={30} style={scrollStyle} />
            <div className={styles.faculty}>
                <Navbar />
                <div className={styles.wideImage} style={{ height: '100vh' }}>
                    <Login_></Login_>
                    <Image
                        src="https://res.cloudinary.com/dz1vsgxm5/image/upload/nith-cse-website/mt9mdxioboq4pvlm2ehw.jpg"
                        className="fullPagePics"
                        alt=""
                        sizes="100vw"
                        height="0"
                        width="0"
                        priority={true}
                    />
                    <div className={styles.overlay}></div>
                    <h1>Students</h1>
                    <p>The curiosity and tenacity that drives our faculty’s research and creativity make their classrooms exciting places to be.</p>
                </div>

                <div className={styles.dummyHeader}></div>

                <StudentGrid />

                <section className={styles.facultySection}>
                    <Fade left>
                        <div className={styles.heading}>
                            <h1>Our Students</h1>
                        </div>
                    </Fade>

                    <SearchBar handleSearch={handleSearch} />
                    <InfiniteScroll
                        dataLength={studentDataState.length}
                        next={fetchStudents}
                        hasMore={hasMore}
                        loader={Loader}
                    >
                        <div className={styles.cards}>
                            {studentDataState && studentDataState.map(user => {
                                return <UserCard key={user._id} user={user} />
                            })}
                        </div>
                    </InfiniteScroll>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default student
