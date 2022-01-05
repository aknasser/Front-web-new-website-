import * as React from 'react';


const useRevealContent = () => {

    const revealReducer = (state, action) => {
        switch(action.type) {
            case "NAVBAR_SLIDE":
                return {
                    data : action.payload
                };
            default :
                throw new Error("Action non prévue pour le component");
        }
    };

    const [visibilityNavBar, dispatchVisibility] = React.useReducer(
        revealReducer,
        {
            data : {
                top : "-30rem",
            }
        }
    )


    return [visibilityNavBar, dispatchVisibility];



};
 
export default useRevealContent;