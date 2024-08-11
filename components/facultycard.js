import React, { useState } from 'react';
import Link from 'next/link';
import * as FaIcons from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { useRouter } from 'next/router';
import Fade from 'react-reveal/Fade';

function FacultyCard({ user }) {
    const [detailActive, setDetailActive] = useState(false);
    return (
        <Fade left>
            <div className="box center">
                <img src={user.img} alt="" />
                <div className='card-text'>
                    <p className="user_name" style={{ fontSize: '1.6em' }}>{user.name}</p>
                    <p className="skill">{user.role}</p>
                </div>
                <div className="arr_container center" onClick={() => setDetailActive(true)} >
                    <FaIcons.FaArrowRight className="fas" />
                </div>
                <div className={detailActive ? "left_container active" : "left_container off"} style={{ width: '96%', left: '-9.5%', height: '101%' }}>
                    <div className="left_container_data faculty_left_container_data">
                        <p>Areas of Interests</p>
                        <div className="skills areas">
                            {user.areas.map((area) => {
                                return <div key={area}>{area}</div>
                            })}
                        </div>
                        <div className='findMore'><a href={user.findMore} target='_blank'>Find More <AiOutlineRight /></a></div>
                    </div>
                    <div className="cancel center" onClick={() => setDetailActive(false)} id='f_cross'> <FaIcons.FaTimes className="fas" />
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default FacultyCard;