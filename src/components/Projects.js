import React from 'react'

const Projects = (props) => {
    return (
        <>
            <div className="project-card" style={{ marginBottom: '20px' }}>
                <div className="project-img"><img src={props.img} alt="" className="project-img" /></div>
                <div className="project-info">
                    <h3 className='project-h'>{props.h}</h3>
                    <p className='project-p' style={{ color: 'black' }}>{props.para}</p>
                    <a href={props.projectlink}><span className='project-link' style={{ color: 'blue' }}>Click to view code </span></a>
                </div>
            </div>
        </>
    )
}

export default Projects