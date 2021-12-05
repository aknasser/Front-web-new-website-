import { Link } from "react-router-dom";
import  * as Style from  "./parts/Esthete";


const BlocPicture = ({works}) => {
    return (
        <>
            {works.map(work => (
            <div>
                <Link to={work.link}>
                    <Style.BlocMyWork>
                        <Style.FilteredPicture src={work.backgroundpic}>                        
                        </Style.FilteredPicture>
                            <Style.BlocTitle>
                                {work.title}
                            </Style.BlocTitle>
                    </Style.BlocMyWork>
                </Link>
            </div>  
            ))}
        </>
    );
}






export default BlocPicture;