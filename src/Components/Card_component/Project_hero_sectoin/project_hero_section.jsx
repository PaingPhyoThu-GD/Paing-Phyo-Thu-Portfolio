import PropTypes  from "prop-types"



function ProjectHeroSection(props){
    return(
        <Section>
            <img src="" alt="" />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </Section>
    )
}

ProjectHeroSection.PropTypes = {
    name : PropTypes.string,
    description : PropTypes.string,
    members : arrayOf(PropTypes.string),
    detail_description : PropTypes.string,
    role : PropTypes.string,
}

export default ProjectHeroSection