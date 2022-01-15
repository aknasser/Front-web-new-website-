import UserContext  from "../context/UserContext";
import * as React from 'react';
/* import * as Style from "./parts/Esthete";
 */

const Logout = () => {

    // Just like useState, we can update the context using a setFunction! Read this article as a reminder : https://dmitripavlutin.com/react-context-and-usecontext/ (number 4)
    const {userAccount, setUserAccount} = React.useContext(UserContext);

    const handleLogout = async() => {
        console.log("IGHT Immma out!");
        setUserAccount("", () => console.log("fkdflgfd" + userAccount));
        console.log(userAccount);
        localStorage.clear()
    };


    return (
        <button onClick={handleLogout}>Logout</button>
    );
}
 
export default Logout;