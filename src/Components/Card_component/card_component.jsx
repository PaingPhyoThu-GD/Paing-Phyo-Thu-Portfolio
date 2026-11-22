import PropTypes from "prop-types";

function Card(props){
    return(

        <>
            <h3>
                {props.name}
            </h3>
            <p>
               {props.description}
            </p>
        </>
    )

}

Card.prototype = {
    name : PropTypes.string,
    description : PropTypes.string
}
Card.defaultProps ={
    name : "Default Title",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit mollit anim id est laborum"
}


export default Card