import Button from 'react-bootstrap/Button';
// import logo from '../images/logo.png';
import logo from '../images/bunny-nobg.png'
import useInterSectionObserver from './useIntersectionObserver';
import classNames from 'classnames/bind';

const Home = () => {
    const [ref,isInView,isScrollUp] = useInterSectionObserver();
    return (  
        <div ref={ref} className={classNames("homepage",{ 
            hidden: !isInView && !isScrollUp,
            show:isInView
            })} id='homepage'>

            <div className='intro-text'>
                <h4>Welcome to my portfolio</h4>
                <h1>Hi! I'm JM</h1>
                <p>A student of 
                    <a href='https://www.feutech.edu.ph/' target='_blank'> FEU Institute of Technology </a> 
                    pursuing a Bachelor's Degree in Computer Engineering. 
                    I have a strong aspiration to become a Software Engineer. I'm passionate about programming 
                    and eager to learn different technologies and advancements in the field. I’m excited to connect with like-minded individuals 
                    and organizations as I prepare to begin my journey in the tech industry.</p>
            </div>
            <div className="logoCont">
                <img src={logo} alt="logo"/>  
            </div>
            
            {/* <Button variant="outline-warning" className='wrn-btn'>Warning</Button> */}
        </div>
    );
}
 
export default Home;