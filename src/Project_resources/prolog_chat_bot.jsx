import { Project } from "../Model Classes/project_class";
import project_image_8 from "../../src/assets/Project_show_case_img/8.png"
const name = "Chat Bot";
const description = "Simple Ai chat bot that provide answer and trainable form users";
const detailDescription = "";
const techStack = ["Prolog", "TelegramBotFather"];
const imagesList = [];
const role = "Prolog Programmer";
const hero_image = project_image_8

const PrologChatBotProject = new Project(
    name,
    description,
    detailDescription,
    imagesList,
    techStack,
    role,
    hero_image
);

export default PrologChatBotProject;


