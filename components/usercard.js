import React, { useState } from 'react';
import Link from 'next/link';
import * as FaIcons from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { useRouter } from 'next/router';
import Fade from 'react-reveal/Fade';

function UserCard({ user }) {
    const [detailActive, setDetailActive] = useState(false);
    return (
        <Fade left>
            <div className="box center">
                <img src={user.image} alt="" />
                <div className='card-text'>
                    <p className="user_name">{user.name}</p>
                    <p className="skill">{user._id}</p>
                </div>
                <div className="arr_container center" onClick={() => setDetailActive(true)} >
                    <FaIcons.FaArrowRight className="fas" />
                </div>
                <div className={detailActive ? "left_container active" : "left_container off"}>
                    <div className="left_container_data">
                        <p>Skills</p>
                        <div className="skills">
                            {user.skills.slice(0,3).map((skill, index) => {
                                return <div key={index}>{skill}</div>
                            })}
                        </div>
                        <div className="icons">
                            <a href={user.github} target="_blank" className="fab"><FaIcons.FaGithub />
                            </a>
                            <a href={user.linkedin} target="_blank" className="fab"><FaIcons.FaLinkedin />
                            </a>
                        </div>
                        <div className='findMore'><Link href={`student/${user._id}`}>Find More <AiOutlineRight /></Link></div>
                    </div>
                    <div className="cancel center" onClick={() => setDetailActive(false)} id='cross'> <FaIcons.FaTimes className="fas" />
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default UserCard;