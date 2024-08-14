import Button from 'react-bootstrap/Button';
import logo from '../images/logo.png';
const Home = () => {
    return (  
        <div className="homepage" id='homepage' style={{height:'90vh',}}>
            <div className='intro-text'>
                <h4>Welcome to my portfolio</h4>
                <h1>Hi! I'm JM</h1>
                <p>A student of 
                    <a href='https://www.feutech.edu.ph/' target='_blank' style={{
                        textDecoration: 'none',
                        color: '#ffff44'
                    }}> FEU Institute of Technology </a> 
                    pursuing a Bachelor's Degree in Computer Engineering. 
                    I have a strong aspiration to become a Software Engineer. I'm passionate about programming 
                    and eager to learn different technologies and advancements in the field. I’m excited to connect with like-minded individuals 
                    and organizations as I prepare to begin my journey in the tech industry.</p>
            </div>
            <img src={logo} alt="logo" height={400} />
            {/* <Button variant="outline-warning" className='wrn-btn'>Warning</Button> */}
        </div>
    );
}
 
export default Home;