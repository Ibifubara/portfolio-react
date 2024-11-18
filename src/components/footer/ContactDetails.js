import React from "react";

const ContactDetails = () => {
  return (
    <div className='contact-details'>
      <h2 className='service-header'>Contact Me</h2>
      <p>
        <i className='bx bx-envelope'></i>happinessitelima@gmail.com
      </p>
      <p>
        <i className='bx bxs-phone-call'></i>08164945967
      </p>
      <div className='socials'>
        <a href=''>
          <i className='bx bxl-linkedin'></i>
        </a>
        <a href=''>
          <i className='bx bxl-twitter'></i>
        </a>
        <a href=''>
          <i className='bx bxl-instagram-alt'></i>
        </a>
      </div>
      <a href='images/CV.pdf' className='cta2'>
        Download CV
      </a>
    </div>
  );
};

export default ContactDetails;
