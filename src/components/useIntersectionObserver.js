// reference: https://www.youtube.com/watch?v=T33NN_pPeNI
import { useEffect, useRef, useState } from "react";

const useInterSectionObserver = () => {
    const [isInView,setIsInView] = useState(false);
    const ref = useRef(null);
    const [isScrollUp,setisScrollUp] = useState(false);
    const prevScrollY = useRef(null)


    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{  
            if(entry.isIntersecting){
                setIsInView(true);
            }else if (!isScrollUp){
                setIsInView(false);
            }
            // setIsInView(entry.isIntersecting)                         
        },{
            root:null,
            rootMargin:'0px',
            threshold: 0.3, //if 30% of the screen is in view
        });


        if(ref.current){
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current){
                observer.unobserve(ref.current)
            }
        }

    },[ref])

    useEffect(()=>{
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY.current){
                setisScrollUp(false)
                
            }else if (currentScrollY < prevScrollY.current){
                setisScrollUp(true);
                // setIsInView(false);
            }

            prevScrollY.current = window.scrollY;
        }
        
        window.addEventListener('scroll', handleScroll);

        // if(isScrollUp==="up"){
        //     setIsInView(false);
        // }
        // return () => {
        //     window.removeEventListener('scroll',handleScroll);
        // }
        
    },[])

    console.log(ref);
    // console.log(isScrollUp);
    console.log(isInView)
    // console.log(ref);
    
    // console.log(prevScrollY.current)
    // console.log("hello");

    // console.log(isInView);
    // console.log(window.scrollY)
   
    return [ref,isInView,isScrollUp];
}
 
export default useInterSectionObserver;