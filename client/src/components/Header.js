import styled from "styled-components"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const Header = () => {
    return (
        <HeaderWrap>
            <NavLink to={'./'}><Img src={require("../assets/Dubs-Logo-NoText.png")}/></NavLink>
            <NavWrap>
                <SearchBar/>
                <NavList>
                    <NavLink to={'./'}><NavItem>Home</NavItem></NavLink>
                    <NavLink to={'./about'}><NavItem>About</NavItem></NavLink>
                    <NavLink to={'./contact'}><NavItem>Contact</NavItem></NavLink>
                </NavList>
            </NavWrap>
        </HeaderWrap>
    )
}

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
width: 400px;

`
const NavWrap = styled.nav `
display: flex;

`

const Img = styled.img `
height: 125px;
margin: 20px;
`

const H1 = styled.h1 `
color: white;
font-size: 5rem;
`

const HeaderWrap = styled.div `
width: 100%;
height: 150px;
/* background-color: #181818; */
display: flex;
align-items: center;
justify-content: space-between;


`
export default Header