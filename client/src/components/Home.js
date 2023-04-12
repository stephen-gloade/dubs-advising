
import styled from "styled-components"
import { useInView } from 'react-intersection-observer';
import "./home.css"
import MyCarousel from "./MyCarousel";

//
//  react-intersection-observer hook for finding our element in view!
//  MyCarousel is rendered here!
//


const Home = () => {

    const { ref: homeRef, inView} = useInView({ delay: 100})

    return (
        <HomeWrap>
            <H1 ref={homeRef}>Sports betting done right.</H1>
            <H1 ref={homeRef} className={`home-fade-in ${inView ? 'is-visible' : null}`}>Any book.</H1>
            <H1 ref={homeRef} className={`home-fade-in ${inView ? 'is-visible' : null}`}>Any sport.</H1>
            <H1 ref={homeRef} className={`home-fade-in ${inView ? 'is-visible' : null}`}>Every profit.</H1>
            <MyCarousel/>
        </HomeWrap>
    )
};

const H1 = styled.h1 `
text-align: center;
color: #21F292;
font-weight: 100;
margin: 5px;

`

const HomeWrap = styled.div `
display: flex;
margin-top: 20px;
width: 100%;
flex-direction: column;
justify-content:center;
`

export default Home;