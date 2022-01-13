import * as React from 'react';

// Between the parenthesis. We give the default value of the data stored in the context
// The default value structure matches the structure of [state, setState]. We have an array with element 1 : object, element 2 : function
// Doing that it's not mandatory. We do that to ease the testing.

// UserContext will be used with useContext() within these component : Login, Signup and App
const UserContext = React.createContext([{}, () => {}]) ;

let initialState = {};

const UserProvider = props => {
  const [state, setState] = React.useState(initialState);

  return (
  /* User Provider will be wrapped around the whole App.js in index.js. It will PROVIDE the context everywhere in the app. */
    <UserContext.Provider value={[state, setState]}>   
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }

/* The provider will be added to the index.js
It gives us access to the user information everywhere in the app
*/