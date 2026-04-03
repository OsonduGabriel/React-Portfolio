
function EducationCard({entry}){
    return(
        <div className="education">
            <h3>{entry.title} <small>{entry.period}</small></h3>
            <p>{entry.institution}</p>
            {entry.description && <p>{entry.description}</p>}
            {entry.image && <img src= {entry.image} alt={entry.title} className="education_img" />}
        </div>
    )
}
export default EducationCard