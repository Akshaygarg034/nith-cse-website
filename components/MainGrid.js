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
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nam cumque nulla optio ducimus dignissimos</p>
                            </Fade>
                        </div>
                        <div className={styles.box2}>
                            <div className={styles.inner1}>
                                <div className={styles.inner1Data}>
                                    <Fade bottom>
                                        <h1> Sports</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ratione odit modi maiores laboriosam
                                            natus</p>
                                    </Fade>
                                </div>
                            </div>
                            <div className={styles.inner2}>
                                <h1>Life at NITH</h1>
                                <p>A thriving residential campus and community of creative and accomplished people from around the world</p>
                            </div>

                        </div>
                    </div>
                    <div className={styles.container2}>
                        <div className={styles.box3}>
                            <div className={styles.inner3}>
                                <Fade bottom>
                                    <h1>Campus Facility</h1>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ipsum, accusamus rerum eligendi totam fuga.</p>
                                </Fade>
                            </div>
                            <div className={styles.inner4}></div>
                        </div>
                        <div className={styles.box4}>
                            <div className={styles.inner5}></div>
                            <div className={styles.inner6}>
                                <Fade bottom>
                                    <h1>Suistainable initiatives</h1>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis dignissimos aspernatur ad beatae quam est.</p>
                                </Fade>
                            </div>
                        </div>
                        <div className={styles.box5}>
                            <div className={styles.overlay} style={{ bottom: '1.8%' }}></div>
                            <video src="https://res.cloudinary.com/dz1vsgxm5/video/upload/v1716225401/nith-cse-website/czpfjitkjmsqiotte3bh.mp4" autoPlay loop muted className={styles.boxVideo} />
                            <Fade bottom>
                                <h1>Video Heading</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nam cumque nulla optio ducimus dignissimos</p>
                            </Fade>
                        </div>
                    </div>
                </section>
            </Fade>
        </>
    )
}

export default MainGrid
