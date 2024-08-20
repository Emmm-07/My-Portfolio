
// import Carousel from 'react-bootstrap/Carousel';
import Carousel from "./SkillsCarousel";
import mitLogo from  "../images/mit_logo.png"
import "../SkillsCarousel.css";
import useInterSectionObserver from "./useIntersectionObserver";
import classNames from "classnames/bind";
const Skills = () => {
//https://www.youtube.com/watch?v=l3aKPVx_EK0  
    
//https://formidablelabs.github.io/react-swipeable/                          SWIPEABLE
// https://www.youtube.com/watch?v=uj1LLh-IahM

    const [ref,isInView,isScrollUp] = useInterSectionObserver();

    const  languageList = [
        {alt:"Python", link: "https://www.python.org", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"},
        {alt:"C++", link: "https://www.w3schools.com/cpp/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"},
        {alt:"CSS", link: "https://www.w3schools.com/css/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"},
  
        {alt:"HTML", link: "https://www.w3.org/html/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"},
        {alt:"Javascript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"},
        {alt:"Java", link: "https://www.java.com", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"},
    ]

    const  frameworkList = [
            {alt:"Django", link: "https://www.djangoproject.com/", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"},
            {alt:"Reactjs", link: "https://reactjs.org/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"},
            {alt:"Tensorflow", link: "https://www.tensorflow.org/", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"},

            {alt:"Scikit-Learn", link: "https://scikit-learn.org/", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"},
            {alt:"OpenCV", link:"https://opencv.org/", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg"},
            {alt:"Arduino", link: "https://www.arduino.cc/", img: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg"},
        ]
    const  otherList = [
        {alt:"Bash", link: "https://www.gnu.org/software/bash/", img: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"},
        {alt:"Git", link: "https://git-scm.com/", img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"},
        {alt:"Firebase", link: "https://firebase.google.com/", img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"},

        {alt:"SQLite", link: "https://www.sqlite.org/", img: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"},
        {alt:"MySQL", link:"https://www.mysql.com/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"},
        {alt:"MIT App Inventor", link: "https://ai2.appinventor.mit.edu/", img: mitLogo},
    ]

    return (  
        <div ref={ref} className={classNames("skills",{ 
            hidden: !isInView && !isScrollUp,
            show:isInView
            })} id='skills' >
              <h2>Skills</h2> 

              <div>
                <div className="languages">
                    <h3>Languages</h3>
                    <Carousel items={languageList}/>
                </div>

                <div className="frameworks">
                    <h3>Frameworks</h3>
                    <Carousel items={frameworkList}/>

                </div>

                <div className="other">
                    <h3>Other</h3>
                    <Carousel items={otherList}/>
                    </div>

        
            </div>
        </div>
    );
}
 
export default Skills;  