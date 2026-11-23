import { Project } from "../Model Classes/project_class";

const name = "Chat Bot";
const description = "Simple Ai chat bot that provide answer and trainable form users";
const detailDescription = "";
const techStack = ["Prolog", "TelegramBotFather"];
const imagesList = [];
const role = "Prolog Programmer";
const hero_image = "Paing-Phyo-Thu-Portfolio/src/assets/Project_show_case_img/8.png";

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


