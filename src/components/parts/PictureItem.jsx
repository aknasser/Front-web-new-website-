import  * as Style from "./Esthete";



const PictureItem = ({imageLink, imageDescription}) => {
    return (
        <Style.PicContainer>
            <Style.StyledPictureItem src= {imageLink} alt= {imageDescription}/>
        </Style.PicContainer>
    );
}


 
export default PictureItem;