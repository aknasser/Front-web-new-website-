import * as React from 'react';
import axios from "axios";
import { useParams } from "react-router";
import  * as Style from '../../parts/Esthete';



const DeleteObject = ({endpoint}) => {
  const {id, categorie} = useParams();



  React.useEffect( () => {
  const deleteObject = async () => {
    const objectToDelete =  axios.delete(`${endpoint}/${categorie}/delete/${id}`)
    console.log("entry removed from the BDD");
    window.location.href = `/admin/${categorie}/all`   // Redirect the admin towards the page with all the entries.
  }
  deleteObject();

  }, [categorie, id]);

  return (
    <Style.Intro>
      Suppression en cours...
    </Style.Intro>
  )


    
}
 
export default DeleteObject;