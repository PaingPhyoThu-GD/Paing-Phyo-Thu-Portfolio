import { Project } from "../Model Classes/project_class";
import project_image_4 from "../../src/assets/Project_show_case_img/4.png"
const name = "Square dynasty";
const description = "Original 2player C++ command Line Project ";
const detailDescription = "";
const techStack = ["C++"];
const imagesList = [];
const role = "Main Developer, Code Designer";
const hero_image = project_image_4;


const Square_dynesty = new Project(
    name,
    description,
    detailDescription,
    imagesList,
    techStack,
    role,
    hero_image
);

export default Square_dynesty;

