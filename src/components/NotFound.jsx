import * as Style from "./parts/Esthete";


const NotFound = () => {
    return (  
        <Style.ErrorLayout>
            <Style.ErrorMessage404>Sorry my man...404 - Cette page n'existe pas</Style.ErrorMessage404>
            <Style.ErrorPic src="/lost.jpg" alt="Page not Found"/>
            <a href="/">
                <Style.ErrorWayBack>
                    Home Page
                </Style.ErrorWayBack>
            </a>
        </Style.ErrorLayout>

    );
}
 
export default NotFound;