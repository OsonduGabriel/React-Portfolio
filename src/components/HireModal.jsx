import { useState,useEffect } from "react"
import { FaTimes } from "react-icons/fa";
import emailjs from "@emailjs/browser"

function HireModal({isModalOpen, closeModal}){
        // form data
        const [formData, setformData] = useState({
                fullname : "",
                email: "",
                message: ""
            })

            const [status, setStatus] = useState("")

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

            async function handleSubmit(event){
                event.preventDefault() //stops page loading
                setStatus("sending")

                try {
                await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_HIRE_TEMPLATE_ID,
                    formData,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                )
                    setStatus("success")
                    handleReset()
                } catch(error) {
                    console.error(error)
                    setStatus("error")
                } finally{
                    setTimeout(() => setStatus(""), 4000) //wipe status message after 4s when done with everything
                }
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
                    <input type="submit" className="submit" value="submit" disabled={status === "sending"} />
                    <button type="button" className="reset" onClick={handleReset}>Clear form</button>
                    {status === "sending" && <p className="form_status sending">Sending message....</p>}
                    {status === "success" && <p className="form_status success">Message sent successfully! I will get back to you soon.</p>}
                    {status === "error" && <p className="form_status error">Something went wrong. Please try again</p>}
                </form>
            </div>
        </div>
    )
}
export default HireModal