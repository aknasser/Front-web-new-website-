import { Link } from "react-router-dom"

const NavBar = () => {
    return ( 
        <div>
            <nav className = "navbar">
                <h1>Nasser Massa</h1>
                    <Link to="/"><h2>Icone Accueil</h2></Link>
                    <Link to="/who">Who ?</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/projectsList">Projets</Link>
                    <Link to="/contact">CTA</Link>
            </nav>
        </div>

    );
}
 
export default NavBar;