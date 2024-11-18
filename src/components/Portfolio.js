import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio">
            <div className="container">

                <h2 className="service-header">
                    Portfolio
                </h2>

                
                <div className="project">
                    <div className="project-details">
                        <div className="project-title">clipboard app</div>
                        <p>An app that allows you track and organize everything you copy. Users can also access snippets stored in the cloud from all devices.</p>
                    </div>

                    <div className="project-image">
                        <img src="images/clipboard-desktop-preview.jpg" alt="" />
                        <div className="layer">
                            <a href="https://ibifubara.github.io/Clipboard-landing-page/" className="cta" target="_blank">live site</a>
                        </div>
                    </div>
                    
                </div>

                <div className="project">
                    <div className="project-details">
                        <div className="project-title">fylo</div>
                        <p>Fylo stores your most important files in one secure location. Users can ccess them wherever you need, share and collaborate with friends, family, and co-workers.</p>
                    </div>

                    <div className="project-image">
                        <img src="images/fylo-desktop-preview.jpg" alt="" />
                        <div className="layer">
                            <a href="https://ibifubara.github.io/Fylo_landing_page/" className="cta" target="_blank">live site</a>
                        </div>
                    </div>
                    
                    
                </div>

                <div className="project">
                    <div className="project-details">
                        <div className="project-title">interactive rate card</div>
                        <p>A card that allows users rate a product of their choice with ease</p>
                    </div>

                    <div className="project-image">
                        <img src="images/interactive-desktop-preview.jpg" alt="" />
                        <div className="layer">
                            <a href="https://ibifubara.github.io/Interactive-rate-card/" className="cta" target="_blank">live site</a>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>

  )
}

export default Portfolio
