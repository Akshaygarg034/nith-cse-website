import React from 'react'
import styles from '@/styles/maingrid.module.css'
import Fade from 'react-reveal/Fade';

function StudentGrid() {
    return (
        <>
            <section className={styles.gridSection} style={{ top: '0' }}>
                <Fade bottom>
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
                        <div className={styles.box5} style={{background:"url(https://res.cloudinary.com/dz1vsgxm5/image/upload/v1716225342/nith-cse-website/sauvlvzupuygkzsqr9pf.png)"}}>
                            <div className={styles.overlay} style={{ bottom: '1.8%' }}></div>
                            <Fade bottom>
                                <h1>Video Heading</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nam cumque nulla optio ducimus dignissimos</p>
                            </Fade>
                        </div>
                    </div>
                </Fade>
            </section>
        </>
    )
}

export default StudentGrid
