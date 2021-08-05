
import "./NavBar.css"

const NavBar = () =>
{


    return (<div className="NavBar">
        <ul>
            <li><a class="active" href="/home">Home</a></li>
            <li><a href="/rooms">Rooms</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
        </ul>

    </div>)
}
export default NavBar;