import Card from "../Card_component/card_component";


function PurposeMissionVisionValue() {

    var card_info_list = [{ name: "Mission", description: "Pass Internship and become Parmentnent Employee" },
    { name: "Vision", description: "Have good communication with surronding,  Bring success to the surronding , gain high status achievements." },
    { name: "Value", description: "Group projects contributers, Flaxible to learn anything for self improvement, High prioriy to job" }
    ]

    var card_component_list = card_info_list.map((cardinfo) =>
        <Card name={cardinfo.name} description={cardinfo.description}></Card>
    )
    return (
        <>
            <h3>
                Purpose
            </h3>
            <p>
                To be able to work in a Software company,
                To become a job-enjoy person, and support my family.
            </p>
            <div>
                {card_component_list}
            </div>
        </>
    )
}
//Seeking an internship to gain practical work experience and develop professional skill
//With Passion to Work in Japan, Strong education , flexibility and a willingness to apply a
//learn any skills related to System Analysis.
export default PurposeMissionVisionValue