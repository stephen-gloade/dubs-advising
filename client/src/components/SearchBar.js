import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
const [sports, setSports] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [filteredSports, setFilteredSports] = useState([]);
const navigate = useNavigate();

useEffect(() => {
fetch('/sports')
    .then(res => res.json())
    .then((data) => {
    console.log(data);
    setSports(data);
    });
}, []);

useEffect(() => {
const results = searchTerm ? sports.filter(sport =>
    sport.title.toLowerCase().includes(searchTerm.toLowerCase())
) : [];

setFilteredSports(results);
}, [searchTerm, sports]);

const handleEnterKeyPress = (e) => {
if (e.key === 'Enter') {
    if (filteredSports.length > 0) {
    const selectedSport = filteredSports[0];
    setSearchTerm('');
    navigate(`/sports/${selectedSport.key}/odds`);
    }
}
};

return (
<SearchContainer>
    <SearchBarContainer>
    <SearchInput
        type="text"
        placeholder="Search sports"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleEnterKeyPress}
    />
    <IconContext.Provider value={{ color: 'white' }}>
        <SearchIcon />
    </IconContext.Provider>
    {searchTerm && (
        <SuggestionsList>
        {filteredSports.map((sport, index) => (
            <StyledLink key={index} to={`/sports/${sport.key}/odds`}>
            <SuggestionItem
                onClick={() => {
                setSearchTerm('');
                navigate(`/sports/${sport.key}/odds`);
                }}
            >
                {sport.title} ({sport.description})
            </SuggestionItem>
            </StyledLink>
        ))}
        </SuggestionsList>
    )}
    </SearchBarContainer>
</SearchContainer>
);
};


const StyledLink = styled(Link) `
text-decoration: none;
color: black;
`

const SearchContainer = styled.div`
position: relative;
width: 100%;
max-width: 400px;
margin: 0 auto;
background: none;
background-color: none;
display: flex;
justify-content: center;
align-items: center;
`

const SearchBarContainer = styled.div`
position: relative;
width: 100%;
`

const SearchInput = styled.input`
width: 100%;
padding: 12px;
padding-right: 40px;
border: 1px solid #ccc;
border-radius: 4px;
font-size: 16px;
background: none;
color: #fff;
border-radius: 25px
`

const SearchIcon = styled(BsSearch)`
position: absolute;
top: 50%;
right: 12px;
transform: translateY(-50%);
font-size: 20px;
pointer-events: none;
`

const SuggestionsList = styled.ul`
position: absolute;
width: 100%;
list-style-type: none;
max-height: 400px;
overflow-y: auto;
margin: 0;
padding: 0;
background-color: #fff;
border: 1px solid #ccc;
border-radius: 25px;
z-index: 1;
`

const SuggestionItem = styled.li`
padding: 12px;
cursor: pointer;

&:hover {
background-color: #f1f1f1;
}
`

export default SearchBar;