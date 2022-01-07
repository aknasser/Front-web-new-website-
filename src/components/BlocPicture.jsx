import * as React from 'react';
import { Link } from "react-router-dom";
import  * as Style from  "./parts/Esthete";





const BlocPicture = ({works}) => {

    const [blocOpacity, setBlocOpacity] = React.useState("");


    const darkOpacityHandler = () => {
        setBlocOpacity(0.4);
    };
    
    const lightOpacityHandler = () => {
        setBlocOpacity("");
    };

    return (
        <>
            <Style.FlexboxBloc >
                {works.map(work => (
                    <Link to={work.link}>
                        <Style.BlocMyWork 
                            key={work.title}    //To help React identify the component identity
                            onMouseOver={darkOpacityHandler}   // This function darken the picture when the mouse is over the picture
                            onMouseOut ={lightOpacityHandler}> 
                            <Style.FilteredPicture 
                                src={work.backgroundpic} 
                                opacity={blocOpacity}
                                id ={work.title}
                            />                        
                                <Style.BlocTitle>
                                    {work.title}
                                </Style.BlocTitle>
                        </Style.BlocMyWork>
                    </Link>
                ))}
            </Style.FlexboxBloc>  

        </>
    );
}






export default BlocPicture;