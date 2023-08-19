import React, { useState, useEffect } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Navbar = () => {
    const [open, setOpen] = useState(true)
    // const[menu, setMenu] = useState(true)
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 912) {
            setOpen(true);
          } else {
            setOpen(false);
          }
        };
    
        handleResize();
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <>
            <div className="nav">
                <div className="left-nav"><img src="./assets/s5.png" className='logo' alt="logo" /></div>
                <div className="right-nav" onClick={()=> setOpen(!open)}>
                    <div className='menu-btn'>
                     { open === true ? <MenuOpenIcon sx={{ fontSize: 40 }}/> : <MenuIcon sx={{ fontSize: 40 }}/>}
                    </div>
                    { open &&(
                        <ul className='navbar-links'>
                            <li className='nav-btn'><a href="">HOME</a></li>
                            <li className='nav-btn'><a href="">ABOUT</a></li>
                            <li className='nav-btn'><a href="">SKILLS</a></li>
                            <li className='nav-btn'><a href="">PROJECTS</a></li>
                            <li className='nav-btn'><a href="">CONTACT</a></li>
                        </ul>
                    )}
                    {/* <span className='links' > <a href="https://mui.com/material-ui/icons/" target="_blank"> HOME<LinkedInIcon sx={{ fontSize: 30 }}/></a></span>
            <span className='links'><a href="https://github.com/ShagunKohlii/" target="_blank">ABOUT<GitHubIcon sx={{ fontSize: 30 }}/></a></span>
            <span className='links'><a href="mailto:rishabkohli4@gmail.com" target="_blank">SKILLS<AlternateEmailIcon sx={{ fontSize: 30 }}/></a></span>
            <span className='links'><a href="https://twitter.com/shagunkohlii" target="_blank">PROJECTS<TwitterIcon sx={{ fontSize: 30 }}/></a></span> 
            <span className='links'><a href="www.google.com" target="_blank">CONTACT me<InstagramIcon sx={{ fontSize: 30 }}/></a></span>  */}
                </div>
            </div>
        </>
    )
}


export default Navbar
