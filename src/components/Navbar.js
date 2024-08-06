import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import menubar from '../images/menu.png'
import closemenu from '../images/close.png';
import { useState,useEffect } from "react";


const Navbar = () => {
    const socialsStyle = {border: '1px white solid', padding:'8px',height:'30px',width:'30px',marginRight:'10px',borderRadius:'15px'};
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
  

    return (  
        <div className="navbar" id='navbar'>
            <h1>Jm Balatico</h1>
           
            <ul className="links">  
                <li><a href="#homepage">Home</a></li>
                <li><a href="#skills">Skills</a></li> 
                <li>Projects</li>
                {/* <li style={{ padding:'0',margin:'auto'}}> */}
                    <FaFacebookF style={socialsStyle}/>
                    <FaGithub style={socialsStyle}/>
                    <FaLinkedinIn style={socialsStyle}/>
                {/* </li> */}
                <li className="connectBtn" >
                    Let's Connect
                </li>
            </ul>
            <button className="menuBtn"
                    onClick={()=>(setMenuDisplay(menuDisplay==='none'?'block':'none'))}
            ><img src={menuDisplay==='none'?menubar:closemenu} alt="" width={30}/></button>

  
            <div className="hidden-menu" style={{ display: menuDisplay}}>  
                <li><a href="#navbar">Home</a></li>
                <li><a href="#skills">Skills</a></li> 
                <li>Projects</li>
                {/* <li style={{ padding:'0',margin:'auto'}}> */}
                    <FaFacebookF style={socialsStyle}/>
                    <FaGithub style={socialsStyle}/>
                    <FaLinkedinIn style={socialsStyle}/>
                {/* </li> */}
                <li className="connectBtn" >
                    Let's Connect
                </li>
            </div>
            
            
        </div>
    );
}
 
export default Navbar;