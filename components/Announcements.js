import React from 'react';
import Fade from 'react-reveal/Fade';

function Announcements() {
    return (
        <div>
            <section className='announcement_section'>
                <div className="heading">
                    <h1>Announcements</h1>
                    <div></div>
                </div>
                <Fade left>
                    <div className="announcementBox">
                        <div className='announcement'>
                            <span>05/04/2023</span>
                            <p><a href='https://nith.ac.in/internship-opportunities-during-summer-2023' target = "_blank">Notice regarding Training/Internship opportunities during Summer 2023 at NIT Hamirpur</a></p>
                        </div>
                        <div className='announcement'>
                            <span>07/04/2023</span>
                            <p><a href='https://nith.ac.in/uploads/topics/drdo-sponsored-project16805169572920.pdf' target = "_blank">Recruitment of Senior Research Fellow in DRDO Sponsored Project</a></p>
                        </div>
                        <div className='announcement'>
                            <span>24/04/2023</span>
                            <p><a href='https://nith.ac.in/phd-admissions-of-june-2023-academic-year-2023-24' target = "_blank">Ph.D. Admissions  June, 2023 (Academic Year 2023-2024)</a></p>
                        </div>
                    </div>
                </Fade>
            </section>

        </div>
    )
}

export default Announcements
