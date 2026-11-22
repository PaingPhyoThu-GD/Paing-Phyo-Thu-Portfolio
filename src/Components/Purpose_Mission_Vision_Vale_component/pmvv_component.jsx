import Card from "../Card_component/card_component";


function PurposeMissionVisionValue(){

    var card_info_list = [{name : "Mission", description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
                    {name : "Vision" , description :"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "},
                    {name : "Value" , description : "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"}
    ]

    var card_component_list  = card_info_list.map((cardinfo)=> 
        <Card name={cardinfo.name} description={cardinfo.description}></Card>
        )
    return(
        <>
            <h3>
                Purpose
            </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum
            </p>
            <div>
                {card_component_list}
            </div>
        </>
    )
}

export default PurposeMissionVisionValue