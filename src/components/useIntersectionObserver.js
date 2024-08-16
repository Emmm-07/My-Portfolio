// reference: https://www.youtube.com/watch?v=T33NN_pPeNI
import { useEffect, useRef, useState } from "react";

const useInterSectionObserver = () => {
    const [isInView,setIsInView] = useState(false)
    const ref = useRef(null)

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setIsInView(entry.isIntersecting)                         
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

     
    return [ref,isInView];
}
 
export default useInterSectionObserver;