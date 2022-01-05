import * as React from 'react';
import axios from "axios";
import { useParams } from "react-router";
import  * as Style from '../../parts/Esthete';



const DeleteObject = ({endpoint}) => {
  const {id, categorie} = useParams();



  React.useEffect( () => {
  const deleteObject = async () => {
    // eslint-disable-next-line
    const objectToDelete = await axios.delete(`${endpoint}/blog/delete/${id}`)
    console.log("article removed from the BDD");
    window.location.href = `/admin/article/all`   // Redirect the admin towards the page with all the entries.

    
  }
  deleteObject();

  }, [endpoint, categorie, id]);

  return (
    <Style.Intro>
      Suppression en cours... 
   </Style.Intro>
  )


    
}
 
export default DeleteObject;