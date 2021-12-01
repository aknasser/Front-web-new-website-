import styled from "styled-components";


const BlocPicture = ({works}) => {
    return (
        <>
            {works.map(work => (
            <div>
                <BlocMyWork>
                    <FilteredPicture src={work.backgroundpic}>                        
                    </FilteredPicture>
                        <BlocTitle>
                            {work.title}
                        </BlocTitle>
                </BlocMyWork>
            </div>  
            ))}
        </>


    );
}


const BlocMyWork = styled.div`
    display : grid;
    min-height: 20rem;
    overflow : hidden;

`;

const FilteredPicture = styled.img`
    grid-area: 1 / 1 / 2 / 2;
    background-size : cover;
    opacity : 0.8;
    width : 100%;
    height : 100%;
    z-index: 0;
`;

const BlocTitle = styled.h4`
    grid-area: 1 / 1 / 2 / 2;
    color : white;
    text-transform : uppercase;
    font-size : 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    z-index : 1;

`;



export default BlocPicture;