import React from 'react'
// import Navbar from './Navbar'
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
const Home = () => {
    return (
        <>
            {/* <Navbar/> */}
            {/* <div className='home-page'> */}
                <div className='left-main'>
                    <div className='left-main-container'>
                        <span className='home-h1 animate__animated animate__lightSpeedInRight'>&lt;Hello World/&gt;</span>
                        <div className='home-content'>
                            <span className='heading'>I'm Shagun.</span> <br />
                            I'm Front-End developer
                            from Gurgaon.</div>

                        <button className='btn'><CloudDownloadIcon className='btn-style' fontSize='small' /> RESUME</button>
                        {/* <Button variant="contained">Contained</Button> */}
                    </div>
                </div>
                
            {/* </div> */}

        </>
    )
}

export default Home
