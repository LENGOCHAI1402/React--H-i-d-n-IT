import "./Nav.scss";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom";

const Nav = () => {
    
    return (
        <div>
            <div class="topnav">
                <NavLink class="active" to="/home">Trang chủ</NavLink>
                <NavLink to="/product">Product</NavLink>
                <NavLink to="/weather">Weather App</NavLink>
                <NavLink class="active" to="/about">About</NavLink>
            </div>
        </div>
    )
}

export default Nav;