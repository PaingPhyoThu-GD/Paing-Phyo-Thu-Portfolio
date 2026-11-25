import { Project } from "../Model Classes/project_class";
import StudentRegisterationProject from "./Student_registeration_res";
import project_image_2 from "../../src/assets/Project_show_case_img/2.png"

const name = "University Clubs";
const description = "Website about University's Clubs and provide infomatoin about club";
const detailDescription = "";
const techStack = ["Html", "CSS", "Javascript"];
const imagesList = [];
const role = "FrontEnd Developer";
const hero_image = project_image_2

const StudentClubFrontendPJ = new Project(
    name,
    description,
    detailDescription,
    imagesList,
    techStack,
    role,
    hero_image
);

export default StudentClubFrontendPJ;


