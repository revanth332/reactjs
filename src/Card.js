import { useEffect } from "react";

const Card = (props) =>{
    useEffect(() =>{
        console.log("card rendered");
    })
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.quality}</h3>
        </div>
    )
}
export default Card;