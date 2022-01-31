import * as React from 'react';
import  * as Style from "./Esthete";


const SquaredPicture = (blocInfo) => {
    const [blocOpacity, setBlocOpacity] = React.useState("");


    const darkOpacityHandler = () => {
        setBlocOpacity(0.4);
    };
    
    const resetOpacityHandler = () => {
        setBlocOpacity("");
    };

    return (
        <Style.BlocMyWork
            onMouseOver = {()=> darkOpacityHandler()}   // This function darken the picture when the mouse is over the picture
            onMouseOut = {() => resetOpacityHandler()}> 
            <Style.FilteredPicture 
                src={blocInfo.blocInfo.backgroundpic} 
                opacity={blocOpacity}
            />             
                <Style.BlocTitle>
                    {blocInfo.blocInfo.title}
                </Style.BlocTitle>
        </Style.BlocMyWork>
      );
}
 
export default SquaredPicture;