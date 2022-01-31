import * as React from 'react';
import { Link } from "react-router-dom";
import  * as Style from  "./parts/Esthete";
import SquaredPicture from './parts/SquaredPicture';





const BlocPicture = ({works}) => {

    console.log(works);
    return (
        <>
            <Style.FlexboxBloc >
                {works.map(work => (
                    <Link to={work.link} key={work.title}>
                            <SquaredPicture
                                blocInfo={work}
                            />
                    </Link>
                ))}
            </Style.FlexboxBloc>  

        </>
    );
}






export default BlocPicture;