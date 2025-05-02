// import React, { useContext } from 'react';
// import { Button } from '@mui/material';

// import { NavHashLink as NavLink } from 'react-router-hash-link';
// import { makeStyles } from '@mui/styles';


// import './Landing.css';
// import { ThemeContext } from '../../contexts/ThemeContext';
// import { headerData } from '../../data/headerData';
// import { socialsData } from '../../data/socialsData';

// import {
//     FaTwitter,
//     FaLinkedin,
//     FaGithub,
//     FaYoutube,
//     FaBlogger,
// } from 'react-icons/fa';
// const useStyles = makeStyles((t) => ({
       
        
//     resumeBtn: {
//         color: theme.primary,
//         borderRadius: '30px',
//         textTransform: 'inherit',
//         textDecoration: 'none',
//         width: '150px',
//         fontSize: '1rem',
//         fontWeight: '500',
//         height: '50px',
//         fontFamily: 'var(--primaryFont)',
//         border: `3px solid ${theme.primary}`,
//         transition: '100ms ease-out',
//         '&:hover': {
//             backgroundColor: theme.tertiary,
//             color: theme.secondary,
//             border: `3px solid ${theme.tertiary}`,
//         },
//         [t.breakpoints.down('sm')]: {
//             width: '180px',
//         },
//     },
//     contactBtn: {
//         backgroundColor: theme.primary,
//         color: theme.secondary,
//         borderRadius: '30px',
//         textTransform: 'inherit',
//         textDecoration: 'none',
//         width: '150px',
//         height: '50px',
//         fontSize: '1rem',
//         fontWeight: '500',
//         fontFamily: 'var(--primaryFont)',
//         border: `3px solid ${theme.primary}`,
//         transition: '100ms ease-out',
//         '&:hover': {
//             backgroundColor: theme.secondary,
//             color: theme.tertiary,
//             border: `3px solid ${theme.tertiary}`,
//         },
//         // [t.breakpoints.down('sm')]: {
//         //     display: 'none',
//         // },
//         '@media (max-width: 600px)': {
// width: '180px',
// }

//     },
// }));
// function Landing() {
//     const { theme, drawerOpen } = useContext(ThemeContext);
// console.log("themetheme",theme);

   

//     const classes = useStyles(theme);
//     console.log("classes",classes);
    

//     return (
//         <div className='landing'>
//             <div className='landing--container'>
//                 <div
//                     className='landing--container-left'
//                     style={{ backgroundColor: theme.primary }}
//                 >
//                     <div className='lcl--content'>
//                         {socialsData.linkedIn && (
//                             <a
//                                 href={socialsData.linkedIn}
//                                 target='_blank'
//                                 rel='noreferrer'
//                             >
//                                 <FaLinkedin
//                                     className='landing--social'
//                                     style={{ color: theme.secondary }}
//                                     aria-label='LinkedIn'
//                                 />
//                             </a>
//                         )}
//                         {socialsData.github && (
//                             <a
//                                 href={socialsData.github}
//                                 target='_blank'
//                                 rel='noreferrer'
//                             >
//                                 <FaGithub
//                                     className='landing--social'
//                                     style={{ color: theme.secondary }}
//                                     aria-label='GitHub'
//                                 />
//                             </a>
//                         )}
//                         {socialsData.twitter && (
//                             <a
//                                 href={socialsData.twitter}
//                                 target='_blank'
//                                 rel='noreferrer'
//                             >
//                                 <FaTwitter
//                                     className='landing--social'
//                                     style={{ color: theme.secondary }}
//                                     aria-label='Twitter'
//                                 />
//                             </a>
//                         )}
//                         {socialsData.youtube && (
//                             <a
//                                 href={socialsData.youtube}
//                                 target='_blank'
//                                 rel='noreferrer'
//                             >
//                                 <FaYoutube
//                                     className='landing--social'
//                                     style={{ color: theme.secondary }}
//                                     aria-label='YouTube'
//                                 />
//                             </a>
//                         )}
//                         {socialsData.blogger && (
//                             <a
//                                 href={socialsData.blogger}
//                                 target='_blank'
//                                 rel='noreferrer'
//                             >
//                                 <FaBlogger
//                                     className='landing--social'
//                                     style={{ color: theme.secondary }}
//                                     aria-label='Blogger'
//                                 />
//                             </a>
//                         )}
//                     </div>
//                 </div>
//                 <img
//                     src={headerData.image}
//                     alt=''
//                     className='landing--img'
//                     style={{
//                         opacity: `${drawerOpen ? '0' : '1'}`,
//                         borderColor: theme.secondary,
//                     }}
//                 />
//                 <div
//                     className='landing--container-right'
//                     style={{ backgroundColor: theme.secondary }}
//                 >
//                     <div
//                         className='lcr--content'
//                         style={{ color: theme.tertiary }}
//                     >
//                         <h6>{headerData.title}</h6>
//                         <h1>{headerData.name}</h1>
//                         <p>{headerData.desciption}</p>

//                         <div className='lcr-buttonContainer'>
//                             {headerData.resumePdf && (
//                                 <a
//                                     href={headerData.resumePdf}
//                                     download='resume'
//                                     target='_blank'
//                                     rel='noreferrer'
//                                 >
//                                     <Button className={classes.resumeBtn}>
//                                         Download CV
//                                     </Button>
//                                 </a>
//                             )}
//                             <NavLink
//                                 to='/#contacts'
//                                 smooth={true}
//                                 spy='true'
//                                 duration={2000}
//                             >
//                                 <Button className={classes.contactBtn}>
//                                     Contact
//                                 </Button>
//                             </NavLink>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Landing;


import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@mui/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
    FaFacebook
} from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";

import { SiLeetcode } from "react-icons/si";
function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);
    console.log("Theme from context:", theme);


    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                                <FaLinkedin className='landing--social' style={{ color: theme.secondary }} />
                            </a>
                        )}
                        {socialsData.github && (
                            <a href={socialsData.github} target='_blank' rel='noreferrer'>
                                <FaGithub className='landing--social' style={{ color: theme.secondary }} />
                            </a>
                        )}
                        {socialsData.leetcode && (
                            <a href={socialsData.leetcode} target='_blank' rel='noreferrer'>
                                <SiLeetcode className='landing--social' style={{ color: theme.secondary }} />
                            </a>
                        )}
                        {socialsData.facebook && (
                            <a href={socialsData.facebook} target='_blank' rel='noreferrer'>
                                <FaFacebook  className='landing--social' style={{ color: theme.secondary }} />
                            </a>
                        )}
                        {socialsData.instagram && (
                            <a href={socialsData.instagram} target='_blank' rel='noreferrer'>
                                <RiInstagramFill className='landing--social' style={{ color: theme.secondary }} />
                            </a>
                        )}
                    </div>
                </div>

                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.secondary,
                    }}
                />

                <div className='landing--container-right' style={{ backgroundColor: theme.secondary }}>
                    <div className='lcr--content' style={{ color: theme.tertiary }}>
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desc}</p>
{/* 
                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button  style={{
        color: theme.primary,
        borderRadius: '30px',
        border: `3px solid ${theme.primary}`,
        fontFamily: 'var(--primaryFont)',
        textTransform: 'inherit',
        width: '150px',
        height: '50px',
        fontSize: '1rem',
        fontWeight: 500,
        backgroundColor: 'transparent',
        transition: '100ms ease-out',
    }}
    onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = theme.tertiary;
        e.currentTarget.style.color = theme.secondary;
        e.currentTarget.style.border = `3px solid ${theme.tertiary}`;
    }}
    onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = theme.primary;
        e.currentTarget.style.border = `3px solid ${theme.primary}`;
    }}>Resume</Button>
                                </a>
                            )}
                            <NavLink smooth to='/#contacts'>
                                <Button style={{
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            '@media (max-width: 600px)': {
                width: '180px',
            },
        }}>Contact</Button>
                            </NavLink>
                        </div> */}
<div className='lcr-buttonContainer'>
            {headerData.resumePdf && (
                <a
                    href={headerData.resumePdf}
                    download='resume'
                    target='_blank'
                    rel='noreferrer'
                >
                    <Button
                        className='resume-btn'
                        style={{
                            color: theme.primary,
                            border: `3px solid ${theme.primary}`,
                            backgroundColor: 'transparent',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = theme.tertiary;
                            e.currentTarget.style.color = theme.secondary;
                            e.currentTarget.style.border = `3px solid ${theme.tertiary}`;
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = theme.primary;
                            e.currentTarget.style.border = `3px solid ${theme.primary}`;
                        }}
                    >
                        Resume
                    </Button>
                </a>
            )}

            <NavLink smooth='true' to='/#contacts'>
                <Button
                    className='contact-btn'
                    style={{
                        backgroundColor: theme.primary,
                        color: theme.secondary,
                        border: `3px solid ${theme.primary}`,
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = theme.secondary;
                        e.currentTarget.style.color = theme.tertiary;
                        e.currentTarget.style.border = `3px solid ${theme.tertiary}`;
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = theme.primary;
                        e.currentTarget.style.color = theme.secondary;
                        e.currentTarget.style.border = `3px solid ${theme.primary}`;
                    }}
                >
                    Contact
                </Button>
            </NavLink>
        </div>
        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;

