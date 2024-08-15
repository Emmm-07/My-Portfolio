import logo from '../images/logo.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import loc from "../images/loc.png"
import clock from "../images/clock.png"
import { useEffect, useState } from 'react';
const Footer = () => {
    const socialsStyle = {border: '3px #ffff44 solid', padding:'8px',height:'40px',width:'40px',marginRight:'10px',borderRadius:'20px'};
    const [currTime, setCurrTime] = useState('');

    useEffect(()=>{
        const updateTime = () => {  
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            // const seconds = String(now.getSeconds()).padStart(2, '0');
            setCurrTime(`${hours}:${minutes}`);
          };
      
          updateTime(); // Set initial time
          const intervalId = setInterval(updateTime, 1000); // Update every second
          return () => clearInterval(intervalId); // Cleanup on unmount
    },[])

    return (  
        <div className="footer">
            <div>
                <img src={logo} alt="logo" width={300}/>
            </div>
            <div></div>
            <div>
                <div>
                    <img src={loc} alt="" height={30} />
                    &nbsp;
                    <label>Metro Manila, Philippines</label>
                </div>
                <div>
                    <img src={clock} alt="" height={30} />
                    &nbsp;
                    <label>{currTime} (UTC + 08:00)</label>
                </div>
                <div>
                    <FaFacebookF style={socialsStyle}/>
                    <FaGithub style={socialsStyle}/>
                    <FaLinkedinIn style={socialsStyle}/></div>
                </div>      
            </div>

    );
}
 
export default Footer;