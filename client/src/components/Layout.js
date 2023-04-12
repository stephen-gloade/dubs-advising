
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

const Layout = () => {

    const path = useLocation();
    return (
        <>
            {path.pathname !== "/" ? <Header/> : null}          
        </>
    )
}

export default Layout
