import { Project } from "../Model Classes/project_class";

const name = "StudentRegisterationWebsite";
const description = "Handling the new student registeration , Student data and Exam pass,fail management , Payments Handling";
const detailDescription = "UIT SEM7 Database Project";
const techStack = ["Springboot", "Mongodb", "Javascript", "HTML", "CSS", "React"];
const imagesList = [];
const role = "Front-End developer";
const hero_image = "";

const StudentRegisterationProject = new Project(
    name,
    description,
    detailDescription,
    imagesList,
    techStack,
    role,
    hero_image
);

export default StudentRegisterationProject;

