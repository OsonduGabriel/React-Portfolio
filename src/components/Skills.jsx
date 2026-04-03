import { skills, softSkills, techIcons } from "../data/portfolioData";
import Skillbar from "./Skillbar";

function Skills(){
    return(
            <section id="skill">
                <h2><span className="underline_text">Skills</span></h2>
                <div className="details">
                    {/* loop thorugh each skill in the array and create a Skillbar component */}
                    {skills.map(skill => <Skillbar key={skill.id} skill={skill} />)}
                    <article className="skill_footer">
                        {/* loop through each softskill and create a p tag */}
                        {softSkills.map(softskill => <p key={softskill}>{softskill}</p>)}
                    </article>
                    <div className="tech_icons">
                        {techIcons.map(item =>{
                            const Icon = item.icon
                            return(
                                <div key={item.id} className="tech_icon_item">
                                    <Icon style={{color: item.color}} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
    )
}

export default Skills