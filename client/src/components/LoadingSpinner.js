import styled from "styled-components";
import { FiLoader } from "react-icons/fi"
import { IconContext } from "react-icons/lib";

// 
//  LoadingSpinner component, used in fetch instances or checking auth0 authentication
//

const Loading = () => {
    return (
    <LoadWrapper>
        <IconContext.Provider value={{ color: '#21F292'}}>
            <FiLoaderStyle/>
        </IconContext.Provider>
    </LoadWrapper>
    );
};

const LoadWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 50px;
`

const FiLoaderStyle = styled(FiLoader) `
    font-size: 80px;
    animation: rotation 1s infinite linear;
    width: 100px;

    @keyframes rotation {
    from {
    transform: rotate(0deg);
    }
    to {
    transform: rotate(359deg);
    }
}
`


export default Loading;