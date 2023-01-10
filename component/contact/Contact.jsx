import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'
import {AiFillPhone} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7a9yg6e', 'template_bch5onf', form.current, 'TmoE3sqb3kaoQIa5-')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Fet In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mcmcmcmcsu9@gmail.com</h5>
            <a href='mailto:mcmcmcmcus9@gmail.com' target='_blank'>Send a message </a>
          </article>

          <article className='contact__option'>
            <BiMessageRounded className='contact__option-icon' />
            <h4>Messager</h4>
            <h5>Pornchaikit Thoncgchai</h5>
            <a href='https://m.me/pornchaikit.thongchai'>Send a message </a>
          </article>

          <article className='contact__option'>
            <AiFillPhone className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mcmcmcmcsu99@gmail.com</h5>
            <a href='mailto:mcmcmcmcus99@gmail.com'>Send a message </a>
          </article>
          </div>
                               {/* END CONTACT */}
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='text' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      
      </div>
    </section>
  )
}

export default Contact
