import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Navbar = () => {
    const socialsStyle = {border: '1px white solid', padding:'8px',height:'30px',width:'30px',marginRight:'10px',borderRadius:'15px'};
    return (  
        <div className="navbar">
            
            <h1>Jm Balatico</h1>

            <ul className="links">  
                 <li>Home</li>
                <li>Projects</li>
                <li>Skills</li> 
                <li style={{ padding:'0',margin:'auto'}}>
                    <FaFacebookF style={socialsStyle}/>
                    <FaGithub style={socialsStyle}/>
                    <FaLinkedinIn style={socialsStyle}/>
                </li>
                <li style={{ border:'1px white solid',height:'50px',width:'170px',textAlign:'center',margin:'auto 0 auto 20px',padding:'15px'}}>
                    Let's Connect
                </li>
            </ul>
            
        </div>
    );
}
 
export default Navbar;