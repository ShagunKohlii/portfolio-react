import React from 'react'

const Skills = () => {
    return (
        <>
            <div className="skills-page">
                <h1 className='heading h1' style={{color:'rgb(17, 24, 39)'}}>Skills</h1>
                <div className='skills-flex'>
                    <div className='skill-card'><img src="./assets/js.png" className='skills-img' alt="" /><h3>Javascript</h3></div>
                    <div className='skill-card'><img src="./assets/react.png" className='skills-img' alt="" /><h3>ReactJS</h3></div>
                    <div className='skill-card'><img src="./assets/html5.png" className='skills-img' alt="" /><h3>Html5</h3></div>
                    <div className='skill-card'><img src="./assets/css3.png" className='skills-img' alt="" /><h3>CSS3</h3></div>
                    <div className='skill-card'><img src="./assets/git.png" className='skills-img' alt="" /><h3>Github</h3></div>
                    <div className='skill-card'><img src="./assets/bootstrap.png" className='skills-img' alt="" /> <h3>Bootstrap</h3></div>
                    <div className='skill-card'><img src="./assets/material.png" className='skills-img' alt="" /> <h3>MUI</h3></div>
                </div>
            </div>
        </>
    )
}

export default Skills
