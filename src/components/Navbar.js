import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll';
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
                <div className="left-nav">  <Link to="homeid" spy={true} smooth={true} offset={-100} duration={100}> <img src="./assets/s5.png" className='logo' alt="logo" /></Link></div>
                <div className="right-nav" onClick={()=> setOpen(!open)}>
                    <div className='menu-btn'>
                     { open === true ? <MenuOpenIcon sx={{ fontSize: 40 }}/> : <MenuIcon sx={{ fontSize: 40 }}/>}
                    </div>
                    { open &&(
                        <ul className='navbar-links'>
                            <li className='nav-btn'><Link to="homeid" spy={true} smooth={true} offset={-100} duration={100} >HOME</Link></li>
                            <li className='nav-btn'><Link to="aboutid" spy={true} smooth={true} offset={0} duration={100} >ABOUT</Link></li>
                            <li className='nav-btn'><Link to="skillid" spy={true} smooth={true} offset={10} duration={100} >SKILLS</Link></li>
                            <li className='nav-btn'><Link to="projectid" spy={true} smooth={true} offset={0} duration={100} >PROJECTS</Link></li>
                            <li className='nav-btn'><Link to="contactid" spy={true} smooth={true} offset={10} duration={100} >CONTACT</Link></li>
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}


export default Navbar
