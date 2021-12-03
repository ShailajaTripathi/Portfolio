import React from 'react'

const Project = ({id, name, url,github,detail, skills}) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <div>
            <h2 style={{fontSize:"150%"}}>{name}</h2>
            <p><b>Summary:</b>{ detail }</p>
            <h3>Tech Stack: { skills &&<span style={{fontSize:"70%"}}>{ skills.map(skill => skill)}</span>} </h3>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={github}><h6>Github Link</h6></a>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}>Visit Here</a>
        </div>
        </div>
    )
}

export default Project
