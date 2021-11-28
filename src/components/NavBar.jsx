import { Link } from "react-router-dom"

const NavBar = () => {
    return ( 
        <div>
            <nav className = "navbar">
                <h1>Nasser Massa</h1>
                    <Link to="/"><h2>Icone Accueil</h2></Link>
                    <Link to="/contact">Un Café Ensemble</Link>
                    <Link to="/approche">Mon approche</Link>
                    <Link to="/who">Who ?</Link>
                    <Link to="/projectsList">Projets</Link>
                    <Link to="/blog">Blog</Link>
            </nav>
        </div>

    );
}
 
export default NavBar;