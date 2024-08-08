import getInTouchImg from "../images/get_in_touch.png"
const Contact = () => {
    
    return (  
        <div className="contact" id="contact">
           
            <div className="content">
                <div className="imgContainer">
                    <img src={getInTouchImg} alt=""  />
                </div>
                <div className="container">
                    <h2>Get in touch</h2>
                    <div></div>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name"/>
                    <input type="text" placeholder="Email Address"/>
                    <input type="text" placeholder="Subject"/>
                    <textarea placeholder="Message"></textarea>
                    <button>Send</button>
                   
                </div>
            </div>
        </div>
    );
}
 
export default Contact;

