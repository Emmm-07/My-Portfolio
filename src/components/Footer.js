import logo from '../images/logo.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import loc from "../images/loc.png"
import clock from "../images/clock.png"
import { useEffect, useState } from 'react';
const Footer = () => {
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
            <div className="logoContainer">
                <img src={logo} alt="logo" width={230}/>
            </div>
            <div className="fillerDiv"></div>
            
            <div className="locNtime">
                <div>
                    <label><img src={loc} alt="" height={30} /> &nbsp;Metro Manila, Philippines</label>
                </div>

                <div>

                    <label><img src={clock} alt="" height={30} />&nbsp; {currTime} (UTC + 08:00)</label>
                </div>
                <div>
                    <FaFacebookF  onClick={()=>window.open('https://web.facebook.com/john.balatico.1/',
                        '_blank','noopener','noreferrer')}/>
                    <FaGithub onClick={()=>window.open('https://github.com/Emmm-07',
                        '_blank','noopener','noreferrer')}/>
                    <FaLinkedinIn onClick={()=>window.open('https://www.linkedin.com/in/john-michael-balatico-ba328530a/',
                        '_blank','noopener','noreferrer')}/>
                </div>
            </div>      
        </div>

    );
}
 
export default Footer;