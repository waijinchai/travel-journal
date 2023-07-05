import globe from "../public/assets/globe.png"
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <img src={ globe } alt="globe" className="nav--img" />
            <p className="nav--title">My Travel Journal</p>
        </nav>
    )
}

export default Navbar