import PropTypes from "prop-types"
import { Project } from "../../Model Classes/project_class"
function ProjectCard(props){
    return(
        <>
            <p> {props.description}</p>
        </>
    )
}

ProjectCard.PropTypes = {
    description : String
}



export default ProjectCard