import React from "react";
import Room from "./Room";
import { Image } from "semantic-ui-react";

const RoomList = (props) => {
  const roomsAvailbles = props.foundRooms.map((room) => (
    <Room key={room.id} room={room} />
  ));

  return <Image.Group size="small">{roomsAvailbles}</Image.Group>;
};
export default RoomList;
