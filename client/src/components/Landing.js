import styled from 'styled-components'
import companyLogo from '../assets/Dubs-Logo-Full.png'
import { ParallaxBanner, useParallax } from 'react-scroll-parallax'
import banner from '../assets/banner1.png'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import  './landing.css'
import SmoothArrow from './SmoothArrow'

const Landing = () => {
    //const { ref } = useParallax<HTMLDivElement>({ speed: 100 });
    const { ref: myRef, inView } = useInView({ threshold: 0.5, delay: 1000});
    const { ref: logoRef, inView: logoIsVisible} = useInView({ delay: 100})


    return (
        <Wrapper>
            <StyledParallaxBanner 
            layers={[
            { image: banner, speed: -15 },
            {speed: -40, children:(
                <DivWrap> 
                <CompanyLogo src={companyLogo}/>
                </DivWrap>
            )},
            {speed: -40, children:(
                <ArrowDivWrap> 
                <SmoothArrow/>
                </ArrowDivWrap>
            )},
            ]}>
                
            </StyledParallaxBanner>
            <Wrapper2>
                <H1 ref={myRef} className={`fade-in ${inView ? 'is-visible' : ''}`} >{inView ? "Canadas highest performing handicappers." : null}</H1>
                <LogosWrap className='logos'>
                    <LandingLink to={"/about"}>
                    <ItemDiv ref={logoRef} className={`logo first fade-in ${logoIsVisible ? 'is-visible' : ''}`}>
                        <CardImg src={require("../assets/data.jpg")}/>
                        <CardTitle>What We Do.</CardTitle>
                        <CardInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardInfo>
                    </ItemDiv>
                    </LandingLink>
                    <LandingLink to={"/home"}>
                    <ItemDiv ref={logoRef} className={`logo second fade-in ${logoIsVisible ? 'is-visible' : ''}`}>
                        <CardImg src={require('../assets/stadium.jpg')}/>
                        <CardTitle>To The Action</CardTitle>
                        <CardInfo>Lorem ipsum dolor sit amet, consectetur adip</CardInfo>
                    </ItemDiv>
                    </LandingLink>
                    <LandingLink to={"/contact"}>
                    <ItemDiv ref={logoRef} className={`logo third fade-in ${logoIsVisible ? 'is-visible' : ''}`}>
                        <CardImg src={require('../assets/contact.jpg')}/>
                        <CardTitle>Contact Us</CardTitle>
                        <CardInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</CardInfo>
                    </ItemDiv>
                    </LandingLink>
                </LogosWrap>
            </Wrapper2>
        </Wrapper>
//{myElementIsVisible ? 'visible' : 'hidden'}
    )
}

const ArrowDivWrap = styled.div `
position: absolute;
top: 500px;
bottom:0px;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: center;  
transform: rotate(270deg);
`

const LandingLink = styled(Link) `
text-decoration: none;
`

const CardInfo = styled.p `
width: 100%;    
font-size: 20px;
padding: 10px;
color: #fff;
font-weight: 100;


`

const CardTitle = styled.h2 `
width: 100%;
font-size: 1.75rem;
color: #21F292;
padding: 10px;
font-weight: 100;
`

const CardImg = styled.img `
width: 100%;
height: 40%;
border-radius: 5px;
`
const LogosWrap = styled.div `
display: flex;
width: 100%;
justify-content: center;
column-gap: 5rem;
margin-top: 60px;
`
const ItemDiv = styled.div `
width: 250px;
height: 450px;
background-color: #29282B;
display: flex;
flex-direction: column;

/* border-radius: 25px; */
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

`

const Item1 = styled.h2 `
color: white;
font-size: 3rem;
z-index: 100;
`

const ContentWrapper = styled.div `
display: flex;
z-index: 100;
`

const Wrapper3 = styled.div `

`

const Wrapper2 = styled.div `
display: flex;
width: 100%;
height: 100vh;
flex-direction: column;
/* z-index: 100; */
/* position: fixed; */
top: 0;
justify-content: center;
align-items: center;



`

const BannerItem = styled.div `
display: flex;
align-items: center;
justify-content: center;
width: 300px;
height: 500px;
background-color: gray;
border-radius: 25px;
position: absolute;
top: 500px;

`

const StyledParallaxBanner = styled(ParallaxBanner)`
height: 100vh;

`

const H1 = styled.h1 `
font-size: 4rem;
color: #21F292;
font-weight: 100;

`
const DivWrap = styled.div `
position: absolute;
top: 0px;
bottom:0px;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: center;  
`

const CompanyLogo = styled.img `

`

const Wrapper = styled.div `
width: 100%;
display: flex;
height: 200vh;
flex-direction: column;

`




export default Landing