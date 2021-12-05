import { Link } from "react-router-dom"
import * as Style from "./parts/Esthete"
import * as React from 'react';






const NavBar = () => {


    const navBarReducer = (state, action) => {
        switch(action.type) {
            case "NAVBAR_CONDENSED":
                return {
                    data : {
                        visible : action.payload
                    }
                };
            case "NAVBAR_EXTENDED":
                return {
                    data : {
                        visible :  action.payload
                    }
                };
            default :
                throw new Error("Action non prévue");
        }
    };

    const [visibilityNavBar, dispatchVisibility] = React.useReducer(
        navBarReducer,
        {
            data : {
                visible : "none"
            }
        }
    )




    const navBarHandler = () => {
        if (visibilityNavBar.data.visible === "none") {
            dispatchVisibility({
                type :"NAVBAR_EXTENDED",
                payload : "flex"
            });
        } else {
            dispatchVisibility({
                type :"NAVBAR_CONDENSED",
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
                <Link to="/contact">
                    <Style.CTANavbar>GO!</Style.CTANavbar>
                </Link>
            </Style.Navbar>


            <Style.NavBarCollapse 
                visibility = {visibilityNavBar.data.visible}
            >
                    <Link to="/" onClick = {navBarHandler}>
                        <Style.NavbarItem >Accueil</Style.NavbarItem>
                    </Link>
                    <Link to="/#form" onClick = {navBarHandler}>
                        <Style.NavbarItem>Un Café Ensemble</Style.NavbarItem>
                    </Link>
                    <Link to="/approche" onClick = {navBarHandler}>
                        <Style.NavbarItem>Mon approche</Style.NavbarItem>
                    </Link>
                    <Link to="/who" onClick = {navBarHandler}>
                        <Style.NavbarItem>Who ?</Style.NavbarItem>
                    </Link>
                    <Link to="/projectsList" onClick = {navBarHandler}>
                        <Style.NavbarItem>Projets</Style.NavbarItem>
                    </Link>
                    <Link to="/blog" onClick = {navBarHandler}>
                    <Style.NavbarItem>Blog</Style.NavbarItem>
                    </Link>
            </Style.NavBarCollapse>
        </Style.NavBarGrid>

    );
}
 
export default NavBar;