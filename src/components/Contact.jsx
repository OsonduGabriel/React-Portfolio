import { useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import emailjs from "@emailjs/browser"

function Contact(){

    const [formData, setformData] = useState({
        fullname : "",
        phone: "",
        country: "",
        message: ""
    })

    const [status, setStatus] = useState("")

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
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
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
            phone: "",
            country: "",
            message: ""
        })
    }

    return(
        <section id="contact" className="contact">
            <h2>Contact Me <span className="call_icon"><FaPhoneVolume /></span></h2>
            <p>I'm open to new opportunities and collaborations. Feel free to reach to me.</p>
            <div className="form_section">
                <p><b>Send a Message: </b></p>
                <form onSubmit={handleSubmit} className="contactForm">
                    <div className="input_box">
                        <input name= "fullname" value={formData.fullname} onChange={handleChange} type="text" placeholder="Enter your Full names" className="input_data" aria-label="fullname" required />
                        <div className="input_underline"></div>
                    </div>
                    <div className="input_box">
                        <input name= "phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Your Phone Number" className="input_data" aria-label="phone" required />
                        <div className="input_underline"></div>
                    </div>
                    <div className="input_box">
                        <input name= "country" list="countries" value={formData.country} onChange={handleChange} placeholder="Type or select your country" className="input_data" aria-label="country" required />
                        <div className="input_underline"></div>
                        <datalist id="countries">
                            <option value="Australia"></option>
                            <option value="Afganistan"></option>
                            <option value="Belgium"></option>
                            <option value="Cameroon"></option>
                            <option value="Denmark"></option>
                            <option value="England"></option>
                            <option value="France"></option>
                            <option value="USA"></option>
                        </datalist>
                    </div>
                    <textarea name="message" value={formData.message} onChange={handleChange} id="message_box" placeholder="Your message.." rows="8" cols="50"></textarea>
                        <div className="input_underline"></div>
                        <br />
                        <input type="submit" className="submit" value="submit" disabled={status === "sending"} />
                        {status === "sending" && <p className="form_status sending">Sending message....</p>}
                        {status === "success" && <p className="form_status success">Message sent successfully! I will get back to you soon.</p>}
                        {status === "error" && <p className="form_status error">Something went wrong. Please try again</p>}
                        <button type="button" className="reset" onClick={handleReset}>Clear form</button>
                </form>
            </div>
        </section>
    )
}
export default Contact