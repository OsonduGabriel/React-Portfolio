import { useState,useEffect } from "react"
import { FaTimes } from "react-icons/fa";

function HireModal({isModalOpen, closeModal}){
    // form data
        const [formData, setformData] = useState({
                fullname : "",
                email: "",
                message: ""
            })
            // use useEffect to detect when ESC is presses and close modal
            useEffect(() => {
                if(!isModalOpen) return 

                function handleKeyDown(event){
                    if(event.key === "Escape"){
                        closeModal()
                    }
                }

                document.addEventListener('keydown', handleKeyDown)
                return () => document.removeEventListener('keydown', handleKeyDown) // cleanup: remove listener when modal closes or component unmounts
            }, [isModalOpen]) //Re-runs when isModalOpen changes

            if(!isModalOpen) return null //don't continue or return null if isModalOpen is false

            function handleChange(event){
                // ..formData spreads all the fields. [event.target.name]overwrites only the input that changed
                setformData({...formData, [event.target.name]: event.target.value})
            }

            function handleSubmit(event){
                event.preventDefault()
                console.log(formData)
            }

            function handleReset(){
                setformData({
                    fullname: "",
                    email: "",
                    message: ""
                })
            }


    return(
        <div id="hireModal" className="modal_overlay" onClick={closeModal}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <div className="modal_header">
                    <h2>Let's Work together</h2>
                    <button className="close_modal" onClick={closeModal}><FaTimes /></button>
                </div>
                <form onSubmit={handleSubmit} action="" className="hireForm">
                    <div className="input_box">
                        <input name= "fullname" value={formData.fullname} onChange={handleChange} type="text" placeholder="Enter your Full names" className="input_data" aria-label="fullname" required />
                        <div className="input_underline"></div>
                    </div>
                    <div className="input_box">
                        <input name= "email" value={formData.email} onChange={handleChange} type="email" placeholder="Email address" className="input_data" aria-label="email" required />
                        <div className="input_underline"></div>
                    </div>
                    <textarea name="message" value={formData.message} onChange={handleChange} id="message_box" placeholder="Tell me about your project.." rows="4" cols="50"></textarea>
                    <div className="input_underline"></div>
                    <br />
                    <input type="submit" className="submit" value="submit" />
                    <button type="button" className="reset" onClick={handleReset}>Clear form</button>
                </form>
            </div>
        </div>
    )
}
export default HireModal