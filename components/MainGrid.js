import React from 'react'
import styles from '@/styles/maingrid.module.css'
import Fade from 'react-reveal/Fade';

function MainGrid() {
    return (
        <>
            <Fade bottom>
                <section className={styles.gridSection}>
                    <div className={styles.container}>
                        <div className={styles.box1}>
                            <div className={styles.overlay}></div>
                            <Fade bottom>
                                <h1>Diverse Communities</h1>
                                <p>Our Department unites students from diverse backgrounds, fostering innovation and collaboration in technology.</p>
                            </Fade>
                        </div>
                        <div className={styles.box2}>
                            <div className={styles.inner1}>
                                <div className={styles.inner1Data}>
                                    <Fade bottom>
                                        <h1> Sports</h1>
                                        <p>We promotes holistic student growth with excellent sports facilities that build teamwork and leadership.</p>
                                    </Fade>
                                </div>
                            </div>
                            <div className={styles.inner2}>
                                <h1>Life at NITH</h1>
                                <p>Enjoy a balanced campus life with academic excellence and enriching recreational activities.</p>
                            </div>

                        </div>
                    </div>
                    <div className={styles.container2}>
                        <div className={styles.box3}>
                            <div className={styles.inner3}>
                                <Fade bottom>
                                    <h1>Campus Facility</h1>
                                    <p>Our campus features smart classrooms and state-of-the-art technology, creating an ideal environment for innovative learning and collaboration..</p>
                                </Fade>
                            </div>
                            <div className={styles.inner4}></div>
                        </div>
                        <div className={styles.box4}>
                            <div className={styles.inner5}></div>
                            <div className={styles.inner6}>
                                <Fade bottom>
                                    <h1>Expert Faculty Members</h1>
                                    <p>Learn from expert faculty dedicated to mentoring and fostering excellence in computer science.</p>
                                </Fade>
                            </div>
                        </div>
                        <div className={styles.box5}>
                            <div className={styles.overlay} style={{ bottom: '1.8%', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></div>
                            <video src="https://res.cloudinary.com/dz1vsgxm5/video/upload/v1716225403/nith-cse-website/ancjkzr6jxboae1c60l9.mp4" autoPlay loop muted className={styles.boxVideo} />
                            <Fade bottom>
                                <h1>Driving Innovation</h1>
                                <p>Through events like Nimbus and active technical clubs, the CSE Department at NIT Hamirpur drives innovation and excellence in cutting-edge technologies.</p>
                            </Fade>
                        </div>
                    </div>
                </section>
            </Fade>
        </>
    )
}

export default MainGrid
