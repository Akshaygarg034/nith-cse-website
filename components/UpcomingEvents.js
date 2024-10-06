import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

function UpcomingEvents() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchUpcomingEvents = async () => {
            try {
                const response = await fetch('/api/upcomingEvents');
                const data = await response.json();
                // console.log('data', data)
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchUpcomingEvents();
    }, []);

    return (
        <div>
            <section className='announcement_section'>
                <div className="heading">
                    <h1>Upcoming Events</h1>
                    <div></div>
                </div>
                <Fade left>
                    <div className="announcementBox">
                        {events.map((event, index) => (
                            <div className='announcement' key={index}>
                                <span>{event.date}</span>
                                <p>
                                    <a href={event.link} target="_blank" rel="noopener noreferrer">
                                        {event.title}
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

export default UpcomingEvents;