import { Project } from "../Model Classes/project_class";
import project_image_6 from "../../src/assets/Project_show_case_img/6.png"
const name = "Linker(JobPortal)";
const description = "Website where companies can post jobs and job seekers can search and apply.";
const detailDescription = "UIT SEM4 PHP language Project";
const techStack = ["PHP", "MySQL", "HTML", "CSS", "JavaScript"];
const imagesList = [];
const role = "Core developer";
const hero_image = project_image_6

const JobPortalProject = new Project(
    name,
    description,
    detailDescription,
    imagesList,
    techStack,
    role,
    hero_image
);

export default JobPortalProject;


