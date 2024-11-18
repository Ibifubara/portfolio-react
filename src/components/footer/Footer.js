import React from 'react'
import ContactDetails from './ContactDetails'
import Form from './Form'

const Footer = () => {
  return (
    <section id='contact'>
        <div className='container'>
            <ContactDetails />
            <Form />
        </div>
    </section>
  )
}

export default Footer
