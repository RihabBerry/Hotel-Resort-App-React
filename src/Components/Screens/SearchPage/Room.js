import React from "react";
import { Image } from "semantic-ui-react";

const Room = (props) => {
  return <Image src={props.room.picture} alt={props.room.description} />;
};
export default Room;
