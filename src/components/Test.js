import Carousel from 'react-bootstrap/Carousel';


const Test = () => {

    return (  
        <div style={{ width: '50%', margin: '0 auto' }}>
      <Carousel fade>
      <Carousel.Item>

        <div style={{ height: '10rem', background: 'transparent', display: 'flex', justifyContent: 'left', alignItems: 'left' }}></div>
        <Carousel.Caption >
            
            <a href="https://www.python.org" target="_" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="100" height="100"/> </a>

            <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="100" height="100"/> </a>  
            <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="100" height="100"/> </a> 
            
        </Carousel.Caption>
      </Carousel.Item>

      
    </Carousel>
        </div>
    );
}
 
export default Test;