
import Carousel from 'react-bootstrap/Carousel';

const Skills = () => {
//https://www.youtube.com/watch?v=l3aKPVx_EK0  
    
//https://formidablelabs.github.io/react-swipeable/                          SWIPEABLE
// https://www.youtube.com/watch?v=uj1LLh-IahM

    const  languageList = [
    [
        {alt:"python", link: "https://www.python.org", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"},
        {alt:"c++", link: "https://www.w3schools.com/cpp/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"},
        {alt:"css", link: "https://www.w3schools.com/css/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"},
    ],[
        {alt:"html", link: "https://www.w3.org/html/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"},
        {alt:"javascript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",group:2},
        {alt:"java", link: "https://www.java.com", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"},
    ]]

    const  frameworkList = [
        [
            {alt:"django", link: "https://www.djangoproject.com/", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"},
            {alt:"django", link: "https://www.w3schools.com/cpp/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"},
            {alt:"django", link: "https://www.w3schools.com/css/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"},
        ],[
            {alt:"django", link: "https://www.w3.org/html/", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"},
            {alt:"django", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",group:2},
            {alt:"django", link: "https://www.java.com", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"},
        ]]

    return (  
        <div className="skills" id='skills'>
              <h2>Skills</h2> 

              <div>
                <div className="languages">
                    <h3>Languages</h3>
                    <div style={{ width: '50%', margin: '0' }}>
                        <Carousel fade>

                        {languageList.map(language => 
                        <Carousel.Item>
                            <div style={{ height: '10rem', background: 'transparent', display: 'flex', justifyContent: 'left', alignItems: 'left' }}></div>
                            <Carousel.Caption >
                                {language.map(data =>
                                <a href={data.link} target="_blank" rel="noreferrer" title={data.alt}> <img src={data.img} alt={data.alt} width="80" height="80"/> </a>
                                 )}      
                            </Carousel.Caption>
                        </Carousel.Item>
                        )}
                        </Carousel>
                        </div>


                </div>

                <div className="frameworks">
                    <h3>Frameworks</h3>

                    <a href="https://www.django-rest-framework.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg" alt="django-rest-framework" width="40" height="40"/> </a>

                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>    

                    <a href="https://www.tensorflow.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="tensorflow" width="40" height="40"/> </a> 

                    <a href="https://scikit-learn.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt="scikit-learn" width="40" height="40"/> </a> 

                    <a href="https://opencv.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" alt="opencv" width="40" height="40"/> </a> 
                    <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width="40" height="40"/> </a>   

                </div>

                <div className="other">
                    <h3>Other</h3>
                    <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/> </a>
                    <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
                    <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> 
                    <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40"/> </a>
                    <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a>
                    <a href="https://www.mysql.com/" target="_blank" rel="https://www.postgresql.org/"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="postgresql" width="40" height="40"/> </a>     
                    <a href="https://ai2.appinventor.mit.edu/" target="_blank" rel="noreferrer"> <img src="https://vectorseek.com/wp-content/uploads/2023/05/MIT-App-Inventor-Logo-Vector.jpg" alt="MIT-App-Inventor-Logo-Vector" width="70" height="60"/> </a> 
                </div>

        
            </div>
        </div>
    );
}
 
export default Skills;  