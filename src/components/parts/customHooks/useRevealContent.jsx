import * as React from 'react';


const useRevealContent = () => {

    const revealReducer = (state, action) => {
        switch(action.type) {
            case "CONTENT_CONDENSED":
                return {
                    data : {
                        visible : action.payload
                    }
                };
            case "CONTENT_EXTENDED":
                return {
                    data : {
                        visible :  action.payload
                    }
                };
            default :
                throw new Error("Action non prévue pour le component");
        }
    };

    const [visibilityNavBar, dispatchVisibility] = React.useReducer(
        revealReducer,
        {
            data : {
                visible : "none"
            }
        }
    )


    return [visibilityNavBar, dispatchVisibility];



};
 
export default useRevealContent;