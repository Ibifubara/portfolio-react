import React from 'react'

const Form = () => {

  return (
    <div className='form-area'>
         <form >
        <input type="text" name="Name"  id="" placeholder="Name" required />
        <input type="email" name="email"  placeholder="Email" required />
        <textarea name="message"  id="" cols="30" rows="10" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form


