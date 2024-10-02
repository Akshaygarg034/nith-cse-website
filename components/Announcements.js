import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

function Announcements() {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const response = await fetch('/api/announcements');
                const data = await response.json();
                // console.log('data', data)
                setAnnouncements(data);
            } catch (error) {
                console.error('Error fetching announcements:', error);
            }
        };

        fetchAnnouncements();
    }, []);

    return (
        <div>
            <section className='announcement_section'>
                <div className="heading">
                    <h1>Announcements</h1>
                    <div></div>
                </div>
                <Fade left>
                    <div className="announcementBox">
                        {announcements.map((announcement, index) => (
                            <div className='announcement' key={index}>
                                <span>{announcement.date}</span>
                                <p>
                                    <a href={announcement.link} target="_blank" rel="noopener noreferrer">
                                        {announcement.title}
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                </Fade>
            </section>
        </div>
    );
}

export default Announcements;