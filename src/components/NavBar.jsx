import { Link } from "react-router-dom"

const NavBar = () => {
    return ( 
        <div>
            <nav className = "navbar">
                    <Link to="/"> Accueil</Link>
                    <Link to="/contact">Un Café</Link>
                    <Link to="/approche">Mon approche</Link>
                    <Link to="/who">Who ?</Link>
                    <Link to="/projectsList">Projets</Link>
                    <Link to="/blog">Blog</Link>
            </nav>
        </div>

    );
}
 
export default NavBar;