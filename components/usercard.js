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
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                <div className='card-text'>
                    <p className="user_name">{user.name}</p>
                    <p className="skill">{user.rollno}</p>
                </div>
                <div className="arr_container center" onClick={() => setDetailActive(true)} >
                    <FaIcons.FaArrowRight className="fas" />
                </div>
                <div className={detailActive ? "left_container active" : "left_container off"}>
                    <div className="left_container_data">
                        <p>Skills</p>
                        <div className="skills">
                            <div>C/C++</div>
                            <div>OOPs</div>
                            <div>DSA</div>
                        </div>
                        <div className="icons">
                            <a href="#" target="_blank" className="fab"><FaIcons.FaGithub />
                            </a>
                            <a href="#" target="_blank" className="fab"><FaIcons.FaLinkedin />
                            </a>
                        </div>
                        <div className='findMore'><Link href={`student/${user.key}`}>Find More <AiOutlineRight /></Link></div>
                    </div>
                    <div className="cancel center" onClick={() => setDetailActive(false)} id='cross'> <FaIcons.FaTimes className="fas" />
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default UserCard;