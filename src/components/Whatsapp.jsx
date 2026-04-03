import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

//using useEffect to add pulse animation for 8s after site loads


function Whatsapp(){
        const [pulse, setPulse] = useState(true)

        useEffect(() =>{
            const timer = setTimeout(() => {
                setPulse(false)
            }, 8000)

            return() => clearTimeout(timer)
        }, [])

    return(
        <a 
            href="https://wa.me/653697138?text=Hello%20Gabriel%20I%20have%20a%20request...." 
            className={`whatsapp_float ${pulse ? "pulsewa" : ""}`}
            target="_blank" 
            rel="noopener noreferrer"
            title="chat with us on whatsapp"
            aria-label="chat with us on whatsapp">
                <FaWhatsapp />
        </a>
    )
}
export default Whatsapp