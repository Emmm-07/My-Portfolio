import { IconContext } from "react-icons";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import menubar from '../images/menu.png'
import closemenu from '../images/close.png';
import { useState,useEffect } from "react";


const Navbar = () => {
    const socialsStyle = {border: '1px white solid', padding:'8px',height:'30px',width:'30px',marginRight:'10px',borderRadius:'15px',color:'blue'};
    const [menuDisplay,setMenuDisplay] = useState('none')
    
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        console.log(screenWidth);
        setMenuDisplay('none');                  //The menu bar will will be automatically hidden if the screen size changes
      };
    }, [screenWidth]);
  

    const scrollToSection = (id, event) => {
        event.preventDefault();
        const element = document.getElementById(id);
        const offset = 75;
        const offsetPosition = element.offsetTop - offset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    return (  
        <div className="navbar" id='navbar'>
            <h1>Jm Balatico</h1>
           
            <ul className="links">  
                <li><a href="#" onClick={(e) => scrollToSection('homepage', e)}>Home</a></li>
                <li><a href="#" onClick={(e) => scrollToSection('skills', e)}>Skills</a></li> 
                <li><a href="#" onClick={(e) => scrollToSection('projects', e)}>Projects</a></li>
                
                {/* <li style={{ padding:'0',margin:'auto'}}> */}
                    <FaFacebookF style={socialsStyle}/>
                    <FaGithub style={socialsStyle}/>
                    <FaLinkedinIn style={socialsStyle}/>
                {/* </li> */}
                <li className="connectBtn" onClick={(e) => scrollToSection('contact', e)}>
                    Let's Connect
                </li>
            </ul>






            <button className="menuBtn"
                    onClick={()=>(setMenuDisplay(menuDisplay==='none'?'block':'none'))}
            ><img src={menuDisplay==='none'?menubar:closemenu} alt="" width={30}/></button>

  
            <div className="hidden-menu" style={{ display: menuDisplay}}>  
                <li><a href="#" onClick={(e) => scrollToSection('homepage', e)}>Home</a></li>
                <li><a href="#" onClick={(e) => scrollToSection('skills', e)}>Skills</a></li> 
                <li><a href="#" onClick={(e) => scrollToSection('projects', e)}>Projects</a></li>
            

                {/* <li style={{ padding:'0',margin:'auto'}}> */}
                    <FaFacebookF style={socialsStyle}/>
                    <FaGithub style={socialsStyle}/>
                    <FaLinkedinIn style={socialsStyle}/>
                  
                {/* </li> */}
                
                <li className="connectBtn" onClick={(e) => scrollToSection('contact', e)}>
                    Let's Connect
                </li>
                
            </div>
            
            
        </div>
    );
}
 
export default Navbar;