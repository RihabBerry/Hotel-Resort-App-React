import React from "react";
import Room from "./Room"


const RoomList = (props) =>
{     
 const roomsAvailbles = props.foundRooms.map((room) => (

        <Room key={room.id} room={room} />
    ))


    return (
        <ul>
            {roomsAvailbles}
        </ul>

    );

}
export default RoomList;






