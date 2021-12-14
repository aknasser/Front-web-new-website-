import * as Style from "./Esthete";

const PageTitle = ({pageTitle, colorTitle}) => {
    return (
        <div>
            <Style.StyledSectionTitle colorTitle = {colorTitle}>{pageTitle}</Style.StyledSectionTitle>
        </div>
      );
}
 


export default PageTitle;
