import { useLocation } from 'react-router-dom';
import Header from './Header';

//
// Component to conditionally render Header everywhere that isnt "/" i.e Landing page
//

const Layout = () => {

    const path = useLocation();
    return (
        <>
            {path.pathname !== "/" ? <Header/> : null}          
        </>
    )
}

export default Layout
