import React from 'react'

const About = () => {
    return (
        <>
            <div>
                <h1 className='h1'>ABOUT ME</h1>
                <div className='info'>
                    <div className='left-about'><img className="image" src="./assets/imgsh.jpg" alt="img" /></div>
                    <div className="right-info-content">
                        <h4 className="info-h">
                            Hii, I'm Shagun
                        </h4>
                        <span className='color'>web-developer</span>
                        <p className='margin'>Hello there! I'm Shagun, a driven and enthusiastic individual currently pursuing a Bachelor's degree in Computer Applications (BCA) at Starex University. With a strong belief in the power of technology to shape the future, I am fervently passionate about Fullstack development and creating innovative digital solutions that make a positive impact.</p>
                        <p className='address'><span>Email:</span> Rishabkohli4@gmail.com</p>
                        <p className='address'><span>ADDRESS:</span> Kasan,Haryana,India,122051</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About