import Carousel from './ProjectsCarousel'
import "../index.css";  
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import useInterSectionObserver from './useIntersectionObserver';
import classNames from 'classnames/bind';
import palengke from '../images/palengke.png'
import fourtitudeGarage from "../images/fourtitudeGarage.png"
import bloggaHub from "../images/bloggaHub.png"
import chatApp  from "../images/chatapp-img.png"
import gastrobot from "../images/gastrobot2.png"

const Projects = () => {
  const [ref,isInView,isScrollUp] = useInterSectionObserver();

    const projectList = [
        {alt:"Gastrobot (Thesis Project)",isDeployed: false, img: gastrobot,  github:"https://drive.google.com/drive/folders/1vCloH5djMxUmtEzx_ANcMDn06OndR28T?usp=drive_link", link:"https://drive.google.com/file/d/1jJxZpXdZqQKHv0zcr_PDp_3gU95EZN-5/view?usp=drive_link",
          description:"A remote-controlled IoT-enabled robot that safely does insecticide application in households, minimizing human exposure to harmful fumes. The bot is designed to spray insecticide and vacuum dust while being navigated remotely, providing live system status and notifications through a mobile application. Key features: obstacle and gas detection, battery and container monitoring, and 180° sprayer and camera rotation."},

        {alt:"Chat App",isDeployed: true, img: chatApp,  github:"https://github.com/Emmm-07/Chat-Application_DjangoxReactJS", link:"https://em-chat-three.vercel.app/",
          description:"A real-time chat application built using React.js, Django, Django Channels, and Redis, with JWT authentication for secure user management. The application provides seamless real-time messaging, online user status updates, and in-app notifications to enhance user engagement."},

        {alt:"Waypoint Navigation",isDeployed: false, img: palengke,  github:"https://github.com/Emmm-07/PALengke-Sofdes-Project", link:"https://reccloud.com/u/2m4r3zj",
          description:"A platform where customers of the public market can find specific products they are looking for. This platform can also provide them with navigation routes with the kiosk as the starting point for new customers who are unfamiliar with the market layout. Users can view which stores sell the product they are looking for. "},
        
        {alt:"Fourtitude Garage",isDeployed: false, img: fourtitudeGarage, github:"https://github.com/Emmm-07/Fourtitude-Garage", link:"https://jam.dev/c/0a9914cf-a55f-4e94-b0ff-45009dc0f426",
          description:"A Point of Sale (POS) system for automobile shops that facilitate the functions of buying a car, renting a car, and car servicing with a database system that will store transactions."},
        
        {alt:"Blogga Hub",isDeployed: true, img: bloggaHub, github:"https://github.com/Emmm-07/Blog-App-1", link:"https://my-blog-app-bay.vercel.app/",
          description:"A simple web blogging app where you can post blogs, edit/delete your blogs, see other user's blogs and leave a heart react if you liked a blog. This has a Json Web Token (JWT) authentication to ensure a secure blogging experience."},
       
    ]

    const [modalShow, setModalShow] = useState("none");

    const [clickedIndex,setClickedIndex] = useState(null);
    
    const handleClickedIndex = (index) =>{
        setClickedIndex(index === clickedIndex? null: index);
        console.log(clickedIndex);
    }


    return (    
        <div ref={ref} className={classNames("projects",{ 
          hidden: !isInView && !isScrollUp,
          show:isInView
          })} id="projects">

            <h2>Projects</h2>
            <Carousel items={projectList}/>

            <button className="projectsBtn" onClick={()=>setModalShow("block")}>See all projects</button>

          {/* Modal */}
          <div>
            <div className="f_modal" id="f_modal" style={{ display:modalShow }}> 
            <div className="f_modal__dialog">
              <section className="f_modal__content">
              <div>
                <a href="#" className="f_modal__close" onClick={()=>setModalShow("none")}>&times;</a>
                  <div className="f_modal_body">
                    {projectList.map((item,index)=>
                      
                      <div className="projectCard" key={index} onClick={()=>handleClickedIndex(index)}>
                        <section>
                          <img style={{ filter:(index===clickedIndex?'blur(5px)':'blur(0)')}} src={item.img} alt={item.alt}/>
                          <a href={item.github} target="_blank" style={{ visibility:(index===clickedIndex?'visible':'hidden') }} >View on github</a>
                          <a href={item.link} target="_blank" style={{ visibility:(index===clickedIndex?'visible':'hidden') }} >{item.isDeployed?"Visit Website":"View Demo"}</a>
                        </section>

                        <p style={{ display:(index===clickedIndex?'block':'none') }} >{item.description}</p>
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