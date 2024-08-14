import getInTouchImg from "../images/get_in_touch.png"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const YOUR_SERVICE_ID = 'service_akuqfif';
    const YOUR_TEMPLATE_ID = 'template_aq5kbhp';
    const YOUR_PUBLIC_KEY = 'WS7GaA2MhJS9Z7p1h';
    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (  
        <div className="contact" id="contact">
           
            <div className="content">
                <div className="imgContainer">
                    <img src={getInTouchImg} alt=""  />
                </div>
                <div className="container">
                    <h2>Get in touch</h2>
                    <div></div>

                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="First Name" name="fn"/>
                        <input type="text" placeholder="Last Name" name="ln"/>
                        <input type="email" placeholder="Email Address" name="email"/>
                        <input type="text" placeholder="Subject" name="subject"/>
                        <textarea placeholder="Message" name="message"></textarea>
                        <input type="submit" value="Send" />
                    </form>

                </div>
            </div>
        </div>
    );
}
 
export default Contact;

