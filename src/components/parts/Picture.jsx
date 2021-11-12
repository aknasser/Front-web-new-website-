const Picture = ({imageLink, imageDescription}) => {
    return (
        <div>
            <img src= {imageLink} alt= {imageDescription}/>
        </div>
    );
}
 
export default Picture;