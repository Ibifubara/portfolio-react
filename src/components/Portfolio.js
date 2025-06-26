import React from 'react'
import projects from './PortfolioData'

const Portfolio = () => {
  return (
    <section id="portfolio">
            <div className="container">

                <h2 className="service-header">
                    Portfolio
                </h2>

                {projects.map((project, index) => (
                    <div className="project" key={index}>
                    <div className="project-details">
                        <div className="project-title">{project.title}</div>
                        <p>{project.description}</p>
                    </div>

                    <div className="project-image">
                        <img src={project.image} alt={project.title} />
                        <div className="layer">
                            <a href={project.link} className="cta" target="_blank">live site</a>
                        </div>
                    </div>
                    
                </div>
                ))}
                
                
            </div>
        </section>

  )
}

export default Portfolio
