import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

function BackToTop(){
    const [isVisible, setIsVisible] = useState(false)

    useEffect(()=> {
        function handleScroll(){
            if(window.scrollY>50){
                setIsVisible(true)
            } else{
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return() => window.removeEventListener('scroll', handleScroll) //cleanup to remove the listener
    }, [])

    return(
        <a href="#" className="back_to_top" style={{opacity:isVisible ? "1" : "0", visibility: isVisible ? "visible" : "hidden"}}> <IoIosArrowUp /></a>
    )

}
export default BackToTop