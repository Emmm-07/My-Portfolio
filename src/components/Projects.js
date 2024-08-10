import Carousel from './ProjectsCarousel'
import "../index.css";  
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const Projects = () => {
    const projectList = [
        {alt:"PALengke Waypoint Navigation",isDeployed: true, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", 
          description:"A platform where customers of the public market can find specific products they are looking for. This platform can also provide them with navigation routes with the kiosk as the starting point for new customers who are unfamiliar with the market layout. Users can view which stores sell the product they are looking for. "},
        {alt:"C++",isDeployed: true, img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
        {alt:"CSS",isDeployed: true, img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
  
        {alt:"Django",isDeployed: true, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},

    ]

    const [modalShow, setModalShow] = useState(false);

    function MyVerticallyCenteredModal(props) {

        return (
          <Modal className='projects'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p> */}

                {/* CONTENT HERE */}
              <Carousel items={projectList}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
      
    return (  
        <div className="projects" id="projects">
            <h2>Projects</h2>
            <Carousel items={projectList}/>

            <button onClick={() => setModalShow(true)}>See all projects</button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>

        





    );
}
 
export default Projects;