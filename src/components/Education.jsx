import { education } from "../data/portfolioData";
import EducationCard from "./EducationCard";

function Education(){
    return(
        <section id="education">
            <h2><span className="underline_text">Education & Experience</span></h2>
            <div className="details">
                {education.map(entry => <EducationCard key={entry.id} entry={entry} />)}
            </div>
        </section>
    )
}
export default Education