
function TechStack(){

    const taskStack = ["JAVA", "C++" , "Python" ,  "JAVASCRIPT" , "PHP" ," GODOT" , "MySQL" , " Prolog" ,"ERP" ]
    const taskStack_card = taskStack.map((tc)=> <li>{tc}</li>)

    return(
        <>
            {taskStack_card}
        </>
    )
}

export default TechStack