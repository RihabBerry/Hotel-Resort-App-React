import React from "react";



const Room = (props) =>
{

    return (
        <li >
            <img src={props.room.picture} alt={props.room.description} />
        </li>

    );

}
export default Room;