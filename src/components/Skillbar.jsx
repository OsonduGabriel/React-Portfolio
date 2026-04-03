import { useEffect, useRef } from "react"

function Skillbar({skill}){
    //skill prop to receive skills when component is rendered in Skills.jsx
    // we use the ref attribute to dynamically change the class of an element
    const barRef = useRef(null)
    const fillRef = useRef(null)
    
    //useEffect(sideeffect-run while code renders)
    //observe the article and run code when its 30%(0.3) visible on the viewport. then change the current class of fillRef
    useEffect(() => {

            const observer = new IntersectionObserver((entries) =>
            {if(entries[0].isIntersecting){
                fillRef.current.classList.add("load_skill")
                observer.unobserve(barRef.current)
            }}, {threshold: 0.3})

            observer.observe(barRef.current)

        }, [])
        
    return(
            <article ref={barRef}>
                <h3>{skill.name}</h3>
                <div className="progress">
                    <div ref={fillRef} className="progress_fill" style={{width: `${skill.level}%`}}>{skill.level}%</div>
                </div>
            </article>
    )
}

export default Skillbar