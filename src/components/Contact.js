import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <>
      <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '40px', fontSize:'1.7rem' }}>Let's Connect</h2>
      <div className="contact-container">
        <div className="contact-section left-section">
          <img className='contactimg-sec' src="./assets/contactimg.jpg" alt="" />
        </div>
        <div className="contact-section right-section">
          <form className="contact-form" >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required />

            <button  className="submit-btn" type="submit">Send</button>
          </form>
        </div>
      </div>
      {/* <div className='footer'> */}
        <div className='social-btns'>
          <span className='links' > <a href="https://mui.com/material-ui/icons/" rel="noopener noreferrer"  target="_blank"><LinkedInIcon sx={{ fontSize: 30 }}/></a></span>
            <span className='links'><a href="https://github.com/ShagunKohlii/" rel="noopener noreferrer" target="_blank"><GitHubIcon sx={{ fontSize: 30 }}/></a></span>
            {/* <span className='links'><a href="mailto:rishabkohli4@gmail.com" target="_blank"><AlternateEmailIcon sx={{ fontSize: 30 }}/></a></span> */}
            <span className='links'><a href="https://twitter.com/shagunkohlii" rel="noopener noreferrer" target="_blank"><TwitterIcon sx={{ fontSize: 30 }}/></a></span> 
            <span className='links'><a href="www.google.com" rel="noopener noreferrer" target="_blank" ><InstagramIcon sx={{ fontSize: 30 }}/></a></span> 
        </div>
      {/* </div> */}
    </>
  )
}

export default Contact
