const Contact = () => {
    return (  
        <div className="contact" id="contact">
            <h2>Get in touch</h2>
            <div className="container">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="Email Address"/>
                <input type="text" placeholder="Subject"/>
                <textarea placeholder="Message"></textarea>
                <button>Send</button>
            </div>
            
        </div>
    );
}
 
export default Contact;