import { a, Link } from "react-router-dom"
import * as Style from "./parts/Esthete"
import * as React from 'react';
import useRevealContent from "./parts/customHooks/useRevealContent";






const NavBar = () => {

    const [visibilityNavBar, dispatchVisibility] = useRevealContent();

    const navBarHandler = () => {
        if (visibilityNavBar.data.visible === "none") {
            dispatchVisibility({
                type :"CONTENT_EXTENDED",
                payload : "flex"
            });
        } else {
            dispatchVisibility({
                type :"CONTENT_CONDENSED",
                payload : "none"
            });
        };
    };

    return ( 
        <Style.NavBarGrid>
            <Style.Navbar>
                <Style.ToggleButton onClick = {navBarHandler} >
                    <img src="RectangleNavbar.svg" alt="" />
                    <img src="RectangleNavbar.svg" alt="" />
                    <img src="RectangleNavbar.svg" alt="" />
                </Style.ToggleButton>
                <a href="/contact">
                    <Style.CTANavbar>GO!</Style.CTANavbar>
                </a>
            </Style.Navbar>
            

            <Style.NavBarCollapse 
                visibility = {visibilityNavBar.data.visible}
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