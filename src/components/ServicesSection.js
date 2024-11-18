import React from 'react'

const ServicesSection = () => {
  return (
    <section id="services">
            <div className="container">
                <h2 className="service-header">
                    Services
                </h2>

                <div className="service-list">
                    <div>
                        <i className='bx bx-code-alt'></i>
                        <h3>Responsive web design</h3>
                        <p>I have a strong interest in responsive design and making sure my websites work well across various browsers, platforms, and devices.</p>
                    </div>
                    <div>
                        <i className='bx bxs-buildings'></i>
                        <h3>UI/UX Accessibility</h3>
                        <p>My ability to see design clearly enables me to convert templates into pixel-perfect, universally accessible code.  I discovered these ideas by overcoming numerous <a href="https://frontendmentor.io">frontendmentor</a> challenges.</p>
                    </div>
                    <div>
                        <i className='bx bx-water'></i>
                        <h3>Webflow Development</h3>
                        <p>As a Webflow enthusiast, I can transform your concepts into vibrant, useful websites. I use the power of Webflow to create any kind of website you require, be it a blog, corporate website, or e-commerce store. Let's create a website that is simple to update, looks fantastic, and supports your online success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ServicesSection
