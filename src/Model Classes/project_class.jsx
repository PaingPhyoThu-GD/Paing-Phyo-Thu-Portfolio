
class Project {
    constructor(name = "default_name", description = "default_desc", detail_description = "Detail des", imageslist = ["default_image", "default_image2"]
        , tech_stack = ["HTML", "CSS"], role = "Assistance", hero_image = ""
    ) {
        this.name = name;
        this.description = description;
        this.detail_description = detail_description;
        this.imageslist = imageslist;
        this.tech_stack = tech_stack;
        this.role = role;
        this.hero_image = hero_image
    }
}

export { Project }