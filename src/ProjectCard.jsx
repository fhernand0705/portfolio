import React from 'react';

function ProjectCard({project}) {
    var {title, image, link, type, techStack, myContributions} = project; 
    return (
        <div className='project-card'>
            <div className='project-card-img' style={{backgroundColor: image.bgColor}}>
                <div className='project-card-banner'>
                    <h2 className='project-card-kicker'>{type}</h2>
                </div>
                <img src={require(`${image.src}`)} alt={image.alt} />
            </div>
            <div className='project-card-content'>
                {link ?
                    <a href={link} target='_blank' rel='noreferrer'>
                        <h2 className='project-card-title-link'>{title}</h2>
                    </a>
                    : 
                    <h2 className='project-card-title'>{title}</h2>
                }
                <h3 className='project-card-contributions-header'>My Contributions</h3>
                <ul className='project-card-contributions'>
                    {myContributions.length > 0 && myContributions.map(item =>
                        <li className='project-card-contributions-item'>
                            <a href={item.link} target='_blank' rel='noreferrer'>{item.section}</a>
                        </li>
                    )}
                </ul>
                <ul className='project-card-pills'>
                    {techStack.length > 0 && techStack.map(tech => 
                        <li className='project-card-pill' style={{backgroundColor: image.bgColor}}>{tech}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard; 