import getInTouchImg from "../images/get_in_touch.png"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import useInterSectionObserver from "./useIntersectionObserver";
import classNames from "classnames";
//Reference for emailjs: https://www.youtube.com/watch?v=I4DKr1JLC50&t=668s
const Contact = () => {
  const form = useRef();
  const [ref,isInView] = useInterSectionObserver();

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
          form.current.reset();
          alert("Email successfully sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (  
        <div ref={ref} className={classNames("contact hidden",{show:isInView})} id="contact">
           
            <div className="content">
                <div className="imgContainer">
                    <img src={getInTouchImg} alt=""  />
                </div>
                <div className="container">
                    <h2>Get in touch</h2>
                    <div></div>

                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="First Name" name="fn" required/>
                        <input type="text" placeholder="Last Name" name="ln" required/>
                        <input type="email" placeholder="Email Address" name="email" required/>
                        <input type="text" placeholder="Subject" name="subject" required/>
                        <textarea placeholder="Message" name="message" required></textarea>
                        <input type="submit" value="Send" />
                    </form>

                </div>
            </div>
        </div>
    );
}
 
export default Contact;

