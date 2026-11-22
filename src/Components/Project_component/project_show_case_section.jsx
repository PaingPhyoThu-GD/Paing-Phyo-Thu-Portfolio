import { Project } from "../../Model Classes/project_class";
import JobPortalProject from "../../Project_resources/Job_portal_res";
import StudentRegisterationProject from "../../Project_resources/Student_registeration_res";
import PropTypes from "prop-types";

function ProjectShowCaesSection({ishome}){

    const project_list = [JobPortalProject , StudentRegisterationProject]
    
    const temp_pj_nav_list = project_list.map(
            (pj) => 
                <>
                    <button onClick={()=> ishome(false)}>{pj.name} </button>
                    <p>{pj.description}</p>
                </>
        )
    //const temp_pj_nav_list = project_list.map( (pj) => <Project project={pj}></Project>)
    
    return(
        <>
            <section>
                <h3>
                    Projects
                </h3>
                {temp_pj_nav_list}
                
            </section>
        </>
    )
}



export default ProjectShowCaesSection;


    //const project_name_list = ["p1" , "p2", "p3" , "p4" , "p5" , "p6" , "p7"]
    // const temp_pj_nav_list = project_list.map( (pj) => 
    //     {<li>
    //         <h3>{pj.name}</h3> 
    //         <p>{pj.description} </p> 
    //     </li>});