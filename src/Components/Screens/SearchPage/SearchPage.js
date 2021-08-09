import React, { useState } from "react";
import "./SearchPage.css";
import RoomList from "./RoomList";
import { v4 as uuidv4 } from "uuid";

const SearchPage = () => {
  const Rooms = [
    {
      id: uuidv4(),
      description: "Chnambre du luxe 1",
      size: "250",
      guests: "4",
      roomType: "family room",
      pets: false,
      picture: "pictures/pic.jfif",
      price: 1000,
      Breakfast: true,
    },
    {
      id: uuidv4(),
      description: "chambre du lux2",
      picture: "pictures/pic2.jfif",
      price: 2000,
      size: "300",
      guests: "4",
      roomType: "single room",
      pets: true,
      Breakfast: true,
    },
    {
      id: uuidv4(),
      description: "chambre du luxe 3",
      picture: "pictures/pic2.jfif",
      price: 2500,
      size: "350",
      guests: "2",
      roomType: "family room",
      pets: true,
      Breakfast: true,
    },
    {
      id: uuidv4(),
      description: "chambre du luxe 4",
      picture: "pictures/pic3.jfif",
      price: 3000,
      size: "400",
      guests: "3",
      roomType: "luxiourious family room",
      pets: true,
      Breakfast: false,
    },
    {
      id: uuidv4(),
      description: "chambre du luxe 5",
      picture: "pictures/pic4.jfif",
      price: 3000,
      size: "250",
      guests: "2",
      roomType: "family room",
      breakfast: true,
      pets: true,
    },
    {
      id: uuidv4(),
      description: "chambre du luxe 4",
      picture: "pictures/pic3.jfif",
      price: 2000,
      size: "300",
      guests: "4",
      roomType: "single room",
      breakfast: false,
      pets: false,
    },
    {
      id: uuidv4(),
      description: "chambre du luxe 5",
      picture: "pictures/pic4.jfif",
      price: 6000,
      size: "250",
      guests: "2",
      roomType: "family room",
      breakfast: true,
      pets: false,
    },
    {
      id: uuidv4(),
      description: "chambre du luxe 4",
      picture: "pictures/pic3.jfif",
      price: 6000,
      size: "250",
      guests: "2",
      roomType: "family room",
      pets: true,
      breakfast: false,
    },
    {
      id: uuidv4(),
      description: "chambre du luxe 5",
      picture: "pictures/pic4.jfif",
      price: 6000,
      size: "250",
      guests: "2",
      roomType: "family room",
      pets: true,
      breakfast: true,
    },
    {
      id: uuidv4(),
      description: "chambre du luxe 4",
      picture: "pictures/pic3.jfif",
      price: 3000,
      size: "250",
      guests: "2",
      roomType: "family room",
      pets: false,
      breakfast: false,
    },
    {
      id: uuidv4(),
      description: "chambre du luxe 5",
      picture: "pictures/pic4.jfif",
      price: 6000,
      size: "250",
      guests: "2",
      roomType: "family room",
      pets: true,
      breakfast: true,
    },
  ];
  const [foundRooms, setFoundRooms] = useState(Rooms);
  const [roomType, setRoomType] = useState("All");
  const [guestNumber, setGuestNumber] = useState("0");
  const [roomSize, setRoomSize] = useState("0");
  const [petsChecked, setpetsChecked] = useState(false);
  const [breakfastChecked, setbreakfastChecked] = useState(false);

  const HandleGuestNumber = (state) => {
    const results = Rooms.filter((room) => room.guests === state);
    return results;
  };

  const HandleRoomSize = (state) => {
    const results = Rooms.filter((room) => room.size === state);
    return results;
  };

  const HandlePetsChecked = (state) => {
    const result = Rooms.filter((room) => room.pets === state);
    return result;
  };

  const HandleBreakFastChecked = (state) => {
    const result = Rooms.filter((room) => room.breakfast === state);
    return result;
  };
  const HandleRoomType = (state) => {
    let results = [];
    results = Rooms.filter((room) => {
      let rooms = room.roomType.match(state);
      return rooms;
    });
    return results;
  };

  const HandleOnChange = (event) => {
    console.log("this is event.target.checked", event.target.checked);
    switch (event.target.name) {
      case "roomType":
        let filterByRoomType = Rooms.filter(
          (room) =>
            HandleRoomType(event.target.value).some((r) => r.id === room.id) &&
            HandleGuestNumber(guestNumber).some((r) => r.id === room.id) &&
            HandleRoomSize(roomSize).some((r) => r.id === room.id) &&
            HandlePetsChecked(petsChecked).some((r) => r.id === room.id) &&
            HandleBreakFastChecked(breakfastChecked).some(
              (r) => r.id === room.id
            )
        );
        setFoundRooms(filterByRoomType);
        setRoomType(event.target.value);

        break;
      case "guestNumber":
        let filterByGuestNumber = Rooms.filter(
          (room) =>
            HandleRoomType(roomType).some((r) => r.id === room.id) &&
            HandleGuestNumber(event.target.value).some(
              (r) => r.id === room.id
            ) &&
            HandleRoomSize(roomSize).some((r) => r.id === room.id) &&
            HandlePetsChecked(petsChecked).some((r) => r.id === room.id) &&
            HandleBreakFastChecked(breakfastChecked).some(
              (r) => r.id === room.id
            )
        );
        setFoundRooms(filterByGuestNumber);
        setGuestNumber(event.target.value);
        break;
      case "roomSize":
        let filterByRoomSize = Rooms.filter(
          (room) =>
            HandleRoomType(roomType).some((r) => r.id === room.id) &&
            HandleGuestNumber(guestNumber).some((r) => r.id === room.id) &&
            HandleRoomSize(event.target.value).some((r) => r.id === room.id) &&
            HandlePetsChecked(petsChecked).some((r) => r.id === room.id) &&
            HandleBreakFastChecked(breakfastChecked).some(
              (r) => r.id === room.id
            )
        );
        console.log("this is filterByRoomSize", filterByRoomSize);
        setFoundRooms(filterByRoomSize);
        setRoomSize(event.target.value);
        break;
      case "checkboxForBreakfast":
        let filterByBreackFast = Rooms.filter(
          (room) =>
            HandleRoomType(roomType).some((r) => r.id === room.id) &&
            HandleGuestNumber(guestNumber).some((r) => r.id === room.id) &&
            HandleRoomSize(roomSize).some((r) => r.id === room.id) &&
            HandlePetsChecked(petsChecked).some((r) => r.id === room.id) &&
            HandleBreakFastChecked(event.target.checked).some(
              (r) => r.id === room.id
            )
        );
        console.log("this is filterByPets", filterByBreackFast);
        setFoundRooms(filterByBreackFast);
        setbreakfastChecked(event.target.checked);
        break;

      case "checkboxForPets":
        let filterByPets = Rooms.filter(
          (room) =>
            HandleRoomType(roomType).some((r) => r.id === room.id) &&
            HandleGuestNumber(guestNumber).some((r) => r.id === room.id) &&
            HandleRoomSize(roomSize).some((r) => r.id === room.id) &&
            HandlePetsChecked(event.target.checked).some(
              (r) => r.id === room.id
            ) &&
            HandleBreakFastChecked(breakfastChecked).some(
              (r) => r.id === room.id
            )
        );
        console.log("this is filterByPets", filterByPets);
        setFoundRooms(filterByPets);
        setpetsChecked(event.target.checked);
        break;
      default:
        console.log(`Sorry, we are out of.`);
    }
  };

  return (
    <div>
      <div className="SearchPage">
        <h1> Search</h1>
      </div>
      <div className="SearchContainers">
        <div className="SearchItem">
          <span>Room Type : </span>
          <select onChange={HandleOnChange} name="roomType">
            <option value="All">All</option>
            <option value="family room">Family Room</option>
            <option value="single room">Single Room</option>
            <option value="Luxiourious Family Room">
              Luxiourious Family Room
            </option>
            <option value="Luxiourious Single Room">
              Luxiourious Single Room
            </option>
          </select>
        </div>

        <div className="SearchItem">
          <span> Guests : </span>
          <select onChange={HandleOnChange} name="guestNumber">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="SearchItem">
          <span>Room size :</span>
          <input
            className="Input"
            onChange={HandleOnChange}
            name="roomSize"
            value={roomSize}
          ></input>
        </div>
        <div className="SearchItem">
          <span>Room Price</span>
          <input type="range" className="range" />
        </div>
        <div className="containerInputCheckBox">
          <input
            type="checkbox"
            onChange={HandleOnChange}
            name="checkboxForPets"
            value={petsChecked}
          />
          <span>Pets</span>
          <input
            type="checkbox"
            onChange={HandleOnChange}
            name="checkboxForBreakfast"
          />
          <span>BreackFast</span>
        </div>
      </div>
      <div className="photo-container">
        <RoomList foundRooms={foundRooms} />
      </div>
    </div>
  );
};

export default SearchPage;
