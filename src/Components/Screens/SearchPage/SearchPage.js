
import React from "react";
import "./SearchPage.css";
const SearchPage = () =>
{


    return (
        <div >
            <div> <h1> Search</h1></div>
            <div className="SearchContainers">
                <div className="SearchItem" >
                    <span>Room Type : </span>
                    <select>
                        <option value="0">All</option>
                        <option value="1">Family Room</option>
                        <option value="2">Single Room</option>
                        <option value="3">Luxiourious Family Room</option>
                        <option value="4">Luxiourious Single Room</option>
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
                <input type="range" list="tickmarks" />

                <datalist id="tickmarks">
                    <option value="0" />
                    <option value="10" />
                    <option value="20" />
                    <option value="30" />
                    <option value="40" />
                    <option value="50" />
                    <option value="60" />
                    <option value="70" />
                    <option value="80" />
                    <option value="90" />
                    <option value="100" />
                </datalist>

            </div>
        </div>
    );


}
export default SearchPage;