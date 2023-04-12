import styled from "styled-components"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"
import { IoIosSettings } from "react-icons/io";

//
//  Header component, where login/out is conditionally rendered!
//  Also where the SearchBar component is rendered!
//

const Header = () => {
    const { isAuthenticated, isLoading } = useAuth0();
    return (
        <HeaderWrap>
            <NavLink to={'./'}><Img src={require("../assets/Dubs-Logo-NoText.png")}/></NavLink>
            <NavWrap>
                <SearchBar/>
                <NavList>
                    <LogWrap>{ !isAuthenticated ? <LoginButton/> : <LogoutButton/>}</LogWrap>
                    <NavLink to={'./settings'}><NavItem><IoIosSettings/></NavItem></NavLink>
                    <NavLink to={'./home'}><NavItem>Home</NavItem></NavLink>
                    <NavLink to={'./about'}><NavItem>About</NavItem></NavLink>
                    <NavLink to={'./contact'}><NavItem>Contact</NavItem></NavLink>
                </NavList>
            </NavWrap>
        </HeaderWrap>
    )
}

const LogWrap = styled.div `
display: flex;
justify-content: center;
align-items: center;
`

const NavLink = styled(Link) `
text-decoration: none;
margin: 30px;
`
const NavItem = styled.li `
color: white;
list-style-type: none;
`
const NavList = styled.ul `
display: flex;
width: 500px;

`
const NavWrap = styled.nav `
display: flex;

`

const Img = styled.img `
height: 125px;
margin: 20px;
`

const HeaderWrap = styled.div `
width: 100%;
height: 150px;
display: flex;
align-items: center;
justify-content: space-between;


`
export default Header