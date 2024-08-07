import Carousel from './Carousel'
import "../index.css";

const Projects = () => {
    const projectList = [
        {alt:"Django", link: "https://www.djangoproject.com/", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"},
        {alt:"C++", link: "https://www.w3schools.com/cpp/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"},
        {alt:"CSS", link: "https://www.w3schools.com/css/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"},
        {alt:"Django", link: "https://www.djangoproject.com/", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"},

    ]
    return (  
        <div className="projects" id="projects">
            <h2>Projects</h2>
            <Carousel items={projectList}/>
            <button>See all projects</button>
        </div>
    );
}
 
export default Projects;