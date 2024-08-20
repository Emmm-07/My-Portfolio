import { IconContext } from "react-icons";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import menubar from '../images/menu.png'
import closemenu from '../images/close.png';
import { useState,useEffect } from "react";
import { useTypewriter,Cursor } from "react-simple-typewriter";

const Navbar = () => {
    const [menuDisplay,setMenuDisplay] = useState('none')
    
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
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

    const [typeEffect] = useTypewriter({
        words: ['Jm Balatico','Computer Engineering'],
        loop:{},
        speed:100,
        deleteSpeed:100
    })
    return (  
        <div className="navbar show" id='navbar'>   
            <h1 onClick={(e)=> scrollToSection('homepage',e)}>{typeEffect}</h1>
            
            <ul className="links">  
                <li><a href="#" onClick={(e) => scrollToSection('homepage', e)}>Home</a></li>
                <li><a href="#" onClick={(e) => scrollToSection('skills', e)}>Skills</a></li> 
                <li><a href="#" onClick={(e) => scrollToSection('projects', e)}>Projects</a></li>
                
                {/* <li style={{ padding:'0',margin:'auto'}}> */}
                    {/* <FaFacebookF  onClick={()=>window.open('https://web.facebook.com/john.balatico.1/',
                        '_blank','noopener','noreferrer')}/>
                    <FaGithub onClick={()=>window.open('https://github.com/Emmm-07',
                        '_blank','noopener','noreferrer')}/>
                    <FaLinkedinIn onClick={()=>window.open('https://www.linkedin.com/in/john-michael-balatico-ba328530a/',
                        '_blank','noopener','noreferrer')}/> */}
                {/* </li> */}
                <li className="connectBtn" onClick={(e) => scrollToSection('contact', e)}>
                    Let's Connect
                </li>
            </ul>






            <button className="menuBtn"
                    onClick={()=>(setMenuDisplay(menuDisplay==='none'?'block':'none'))}
            ><img src={menuDisplay==='none'?menubar:closemenu} alt="" /></button>

  
            <div className="hidden-menu" style={{ display: menuDisplay}}>  
                <li><a href="#" onClick={(e) => scrollToSection('homepage', e)}>Home</a></li>
                <li><a href="#" onClick={(e) => scrollToSection('skills', e)}>Skills</a></li> 
                <li><a href="#" onClick={(e) => scrollToSection('projects', e)}>Projects</a></li>
            

                {/* <li style={{ padding:'0',margin:'auto'}}> */}
                    {/* <FaFacebookF onClick={()=>window.open('https://web.facebook.com/john.balatico.1/',
                        '_blank','noopener','noreferrer')}/>
                    <FaGithub onClick={()=>window.open('https://github.com/Emmm-07',
                        '_blank','noopener','noreferrer')}/>
                    <FaLinkedinIn onClick={()=>window.open('https://www.linkedin.com/in/john-michael-balatico-ba328530a/',
                        '_blank','noopener','noreferrer')}/>
                   */}
                {/* </li> */}
                
                <li className="connectBtn" onClick={(e) => scrollToSection('contact', e)}>
                    Let's Connect
                </li>
                
            </div>
            
            
        </div>
    );
}
 
export default Navbar;