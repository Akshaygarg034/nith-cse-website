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
                                    <h1>Alumni Network</h1>
                                    <p>Connect with a strong network of successful alumni who share their experiences and provide valuable insights into career paths and opportunities.</p>
                                </Fade>
                            </div>
                            <div className={styles.inner4} style={{ background: "url(https://media.licdn.com/dms/image/v2/D5622AQHgafCIbUbEbQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1719053960039?e=1731542400&v=beta&t=KGC4Lo0lo6pymc82_7_ksya7JpHFGbZCKVk5-nrH8fw)" }}></div>
                        </div>
                        <div className={styles.box4}>
                            <div className={styles.inner5} style={{ background: "url(https://res.cloudinary.com/dz1vsgxm5/image/upload/nith-cse-website/gxyimovoo9qkxdb1znpc.jpg)" }}></div>
                            <div className={styles.inner6}>
                                <Fade bottom>
                                    <h1>Coding Competitions</h1>
                                    <p>Participate in various coding competitions and hackathons that challenge your skills and encourage teamwork, creativity, and problem-solving.</p>
                                </Fade>
                            </div>
                        </div>
                        <div className={styles.box5} style={{ background: "url(https://media.licdn.com/dms/image/v2/D5622AQHICPkHO25OUA/feedshare-shrink_1280/feedshare-shrink_1280/0/1727623085852?e=1731542400&v=beta&t=XIarUG5U3ib5tHLM-LrES-R1TQCpgpAPrHqQWaNkR4I)" }}>
                            <div className={styles.overlay} style={{ bottom: '1.8%', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
                            <Fade bottom>
                                <h1>Internship and Placement Support</h1>
                                <p>Benefit from dedicated support for internships and placements, connecting students with industry leaders and enhancing career prospects.</p>
                            </Fade>
                        </div>
                    </div>
                </Fade>
            </section>
        </>
    )
}

export default StudentGrid
