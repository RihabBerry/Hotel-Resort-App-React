
import React, { useState } from 'react';
import "./SearchPage.css";
import RoomList from "./RoomList"
import { v4 as uuidv4 } from 'uuid';



const SearchPage = () =>
{
    const Rooms = [{
        id: uuidv4(),
        description: "Chnambre du luxe 1",
        size: 250,
        guests: 4,
        roomType: "family room",
        pets: false,
        picture: "pictures/pic.jfif",
        price: 1000
    },
    {
        id: uuidv4(),
        description: "chambre du lux2",
        picture: "pictures/pic2.jfif",
        price: 2000,
        size: 300,
        guests: 4,
        roomType: "single room",
        pets: true
    },
    {
        id: uuidv4(),
        description: "chambre du luxe 3",
        picture: "pictures/pic2.jfif",
        price: 2500,
        size: 350,
        guests: 2,
        roomType: "family room",
        pets: true
    },
    {
        id: uuidv4(),
        description: "chambre du luxe 4",
        picture: "pictures/pic3.jfif",
        price: 3000,
        size: 400,
        guests: 3,
        roomType: "luxiourious family room",
        pets: true

    },
    {
        id: uuidv4(),
        description: "chambre du luxe 5",
        picture: "pictures/pic4.jfif",
        price: 3000,
        size: 250,
        guests: 2,
        roomType: "family room",
        pets: true
    }, {
        id: uuidv4(),
        description: "chambre du luxe 4",
        picture: "pictures/pic3.jfif",
        price: 2000,
        size: 300,
        guests: 4,
        roomType: "single room",
        pets: false
    },
    {
        id: uuidv4(),
        description: "chambre du luxe 5",
        picture: "pictures/pic4.jfif",
        price: 6000, size: 250,
        guests: 2,
        roomType: "family room",
        pets: true
    }, {
        id: uuidv4(),
        description: "chambre du luxe 4",
        picture: "pictures/pic3.jfif",
        price: 6000, size: 250,
        guests: 2,
        roomType: "family room",
        pets: true
    },
    {
        id: uuidv4(),
        description: "chambre du luxe 5",
        picture: "pictures/pic4.jfif",
        price: 6000,
        size: 250,
        guests: 2,
        roomType: "family room",
        pets: true
    }, {
        id: uuidv4(),
        description: "chambre du luxe 4",
        picture: "pictures/pic3.jfif",
        price: 3000,
        size: 250,
        guests: 2,
        roomType: "family room",
        pets: false
    },
    {
        id: uuidv4(),
        description: "chambre du luxe 5",
        picture: "pictures/pic4.jfif",
        price: 6000,
        size: 250,
        guests: 2,
        roomType: "family room",
        pets: true
    }

    ]
    const [foundRooms, setFoundRooms] = useState(Rooms)

    const HandleRoomType = (event) =>
    {


        const keyword = event.target.value;
        if (keyword !== '')
        {
            const results = Rooms.filter((room) =>
            {
                let rooms = room.roomType.match(keyword);
                return rooms;
            });
            setFoundRooms(results);
        } else
        {
            setFoundRooms(Rooms);
        }


    }

    return (
        <div >

            <div> <h1> Search</h1></div>
            <div className="SearchContainers">
                <div className="SearchItem" >
                    <span>Room Type : </span>
                    <select onChange={HandleRoomType}>
                        <option value="All">All</option>
                        <option value="family room">Family Room</option>
                        <option value="single room">Single Room</option>
                        <option value="Luxiourious Family Room">Luxiourious Family Room</option>
                        <option value="Luxiourious Single Room">Luxiourious Single Room</option>
                    </select>
                </div>

                <div className="SearchItem">
                    <span> Guests : </span>
                    <select>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="SearchItem">
                    <span>Room size :</span>
                    <input className="Input"></input>
                </div>
                <div className="SearchItem">
                    <span>Room Price</span>
                    <input type='range' className="range" />
                </div>
                <div className="containerInputCheckBox">
                    <input type="checkbox" />
                    <span>Pets</span>
                    <input type="checkbox" />
                    <span >BreackFast</span>
                </div>


            </div>
            <div className="photo-container" >
                <RoomList foundRooms={foundRooms} />
            </div>
        </div>
    );

}


export default SearchPage;