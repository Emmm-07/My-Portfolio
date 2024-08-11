import Carousel from './ProjectsCarousel'
import "../index.css";  
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const Projects = () => {
    const projectList = [
        {alt:"Waypoint Navigation",isDeployed: true, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", 
          description:"A platform where customers of the public market can find specific products they are looking for. This platform can also provide them with navigation routes with the kiosk as the starting point for new customers who are unfamiliar with the market layout. Users can view which stores sell the product they are looking for. "},
        {alt:"C++",isDeployed: false, img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {alt:"CSS",isDeployed: true, img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
  
        {alt:"Django",isDeployed: true, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {alt:"Waypoint Navigation",isDeployed: true, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", 
          description:"A platform where customers of the public market can find specific products they are looking for. This platform can also provide them with navigation routes with the kiosk as the starting point for new customers who are unfamiliar with the market layout. Users can view which stores sell the product they are looking for. "},
        {alt:"C++",isDeployed: false, img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {alt:"CSS",isDeployed: true, img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
  
        {alt:"Django",isDeployed: true, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
          {alt:"Waypoint Navigation",isDeployed: true, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", 
            description:"A platform where customers of the public market can find specific products they are looking for. This platform can also provide them with navigation routes with the kiosk as the starting point for new customers who are unfamiliar with the market layout. Users can view which stores sell the product they are looking for. "},
          {alt:"C++",isDeployed: false, img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
          {alt:"CSS",isDeployed: true, img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
    
          {alt:"Django",isDeployed: true, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
  
    ]

    const [modalShow, setModalShow] = useState("none");


    return (  
        <div className="projects" id="projects">
            <h2>Projects</h2>
            <Carousel items={projectList}/>

            <button className="projectsBtn" onClick={()=>setModalShow("block")}>See all projects</button>
            {/* <button className="projectsBtn" onClick={() => setModalShow(true)}>See all projects</button> */}
{/* 
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}

          <div>
            <div className="f_modal" id="f_modal" style={{ display:modalShow }}> 
            <div className="f_modal__dialog">
              <section className="f_modal__content">
              <div>
                <a href="#" className="f_modal__close" onClick={()=>setModalShow("none")}>&times;</a>
                  <div className="f_modal_body">
                    {/* <h1 className="projectCard" >Hello</h1> */}
                    {projectList.map((item,index)=>
                      
                      <div className="projectCard" key={index}>
                        <section>
                          <img src="" alt="" />
                          <a href=''>View on github</a>
                          <a href='' >View on Web</a>
                        </section>
                        <p></p>
                        <h3>{item.alt}</h3>
                      </div>

                    )}
                  </div>
              </div>
              </section>
            </div>
          </div>
        </div> 
        </div>

        





    );
}
 
export default Projects;