import { Link } from "react-router-dom"
import * as Style from "./parts/Esthete"
import * as React from 'react';
import useRevealContent from "./parts/customHooks/useRevealContent";






const NavBar = () => {

    const [visibilityNavBar, dispatchVisibility] = useRevealContent();

    const navBarHandler = () => {
        if (visibilityNavBar.data.top === "-30rem") {
            dispatchVisibility({
                type :"NAVBAR_SLIDE",
                payload : 
                    {
                        top : "0rem",
                    }
            });
        } else {
            dispatchVisibility({
                type :"NAVBAR_SLIDE",
                payload : 
                    {
                        top : "-30rem",
                    }
            });
        };
    };

    return ( 
        <Style.NavBarGrid>
            <Style.Navbar>
                <Style.ToggleButton onClick = {navBarHandler} >
                    <img src="/RectangleNavbarRed.svg" alt="whiteRect" />
                    <img src="/RectangleNavbarRed.svg" alt="whiteRect" />
                    <img src="/RectangleNavbarRed.svg" alt="whiteRect" />
                </Style.ToggleButton>
                <a href="/contact">
                    <Style.CTANavbar>GO!</Style.CTANavbar>
                </a>
            </Style.Navbar>
            

            <Style.NavBarCollapse 
                yposition = {visibilityNavBar.data.top} 
            >
                    <Link to="/" onClick = {navBarHandler}>
                        <Style.NavbarItem >Accueil</Style.NavbarItem>
                    </Link>
                    <a href="/#form" onClick = {navBarHandler}>
                        <Style.NavbarItem>Un Café Ensemble</Style.NavbarItem>
                    </a>
                    <a href="/#why" onClick = {navBarHandler}>
                        <Style.NavbarItem>Pourquoi ?</Style.NavbarItem>
                    </a>
                    <a href="/#approche" onClick = {navBarHandler}>
                        <Style.NavbarItem>Mon Approche</Style.NavbarItem>
                    </a>
                    <a href="/projectsList" onClick = {navBarHandler}>
                        <Style.NavbarItem>Projets</Style.NavbarItem>
                    </a>
                    <a href="/blog" onClick = {navBarHandler}>
                    <Style.NavbarItem>Blog</Style.NavbarItem>
                    </a>
            </Style.NavBarCollapse>
        </Style.NavBarGrid>

    );
}
 
export default NavBar;