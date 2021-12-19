import * as React from 'react';
import axios from "axios";
import { useParams } from "react-router";



const DeleteObject = ({endpoint}) => {
  const {id, categorie} = useParams();



  React.useEffect( () => {
  const deleteObject = async () => {
    const objectToDelete = await axios.delete(`${endpoint}/${categorie}/delete/${id}`)
  }
  deleteObject();

  }, [categorie, id]);

  return (
    <div>
      <h2>Object {id} Supprimé</h2>
    </div>
  )


    
}
 
export default DeleteObject;