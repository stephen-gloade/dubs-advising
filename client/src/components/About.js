import styled from "styled-components";
import { ParallaxBanner } from "react-scroll-parallax";
import companyLogo from "../assets/Dubs-Logo-NoText.png"
import banner from '../assets/banner1.png'
import LoginButton from "./LoginButton";


//
// ParallaxBanner used frequently in this component. great NPM package for Parallax animations
//

const About = () => {
    return (
        <>
            <StyledParallaxBanner 
            layers={[
            { image: banner, speed: -15 },
            {speed: -100, children:(
                <DivWrap> 
                <CompanyLogo src={companyLogo}/>
                </DivWrap>
            )},
            {speed: -60, children:(
                <InfoWrap>
                    <H1>Our Mission</H1>
                    <P>
                    <Span>Dubs Sports Advising</Span> offers clients the opportunity to succeed in sports betting.
                    This is achieved through our three founding pillars of: <Span>Transparency, Professionalism,</Span> and <Span>Innovation</Span>
                    </P>
                </InfoWrap>
            )},
            {speed: -60, children:(
                <InfoWrap2>
                    <H1>Transparency</H1>
                    <P>
                    At Dubs, we recognize the significance of transparency in our industry.
                    As a testament to our commitment, we employ <Span>independent third-party</Span> bet tracking services,
                    ensuring the utmost accuracy and reliability of our data for your peace of mind.
                    </P>
                </InfoWrap2>
            )},
            {speed: -60, children:(
                <InfoWrap3>
                    <H1>Professionalism</H1>
                    <P>At Dubs, we prioritize your privacy and maintain the highest standards of data security.
                        Rest assured that your information will <Span>never be shared with third parties.</Span>
                        We believe in providing you full control over your data,
                        offering flexible plans with no hidden fees and the option to cancel at your convenience.
                    </P>
                </InfoWrap3>
            )},
            {speed: -60, children:(
                <InfoWrap4>
                    <H1>Innovation</H1>
                    <P>
                    Dubs is dedicated to generating <Span>profits</Span> for our clients through a relentless pursuit of innovation.
                    By employing sophisticated analytics and cutting-edge betting strategies,
                    we strive to consistently deliver profitable outcomes for all our valued clients.
                    </P>
                </InfoWrap4>
            )},
            {speed: -60, children:(
                <SignUpWrap>
                    {/* <Button>Sign-Up</Button> */}
                    <LoginButton/>
                    <SignUpP>
                    Click the button above to login or sign-up for Dubs!
                    </SignUpP>
                </SignUpWrap>
            )},
            
            ]}>
                
            </StyledParallaxBanner>
        </>
    )
}

const SignUpWrap = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
top: 2200px;

`

const SignUpP = styled.p`
margin-top: 15px;
text-align: center;
color: #21F292;
font-weight: 100;

`

const Span = styled.span`
color: #21F292;
`

const P = styled.p`
letter-spacing: 0px;
font-size: 20px;
`

const H1 = styled.h1`
color: #21F292;
font-weight: 100;
font-size: 40px;
border-bottom: 1px solid #21F292;
margin-bottom: 30px;
`

const InfoWrap4 = styled.div `
position: absolute;
background-color: rgba(24,24,24, 0.8);
color: white;
height: 300px;
width: 350px;
top: 1800px;
right: 200px;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
padding: 5px;
`

const InfoWrap3 = styled.div `
position: absolute;
color: white;
height: 500px;
width: 350px;
top: 1550px;
left: 200px;
border-radius: 5px;
`

const InfoWrap2 = styled.div `
position: absolute;
color: white;
height: 500px;
width: 350px;
top: 1250px;
right: 200px;
border-radius: 5px;
/* box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; */
`
const InfoWrap = styled.div `
position: absolute;
color: white;
height: 500px;
width: 350px;
top: 1000px;
left: 200px;
border-radius: 5px;
`

const StyledParallaxBanner = styled(ParallaxBanner)`
height: 300vh;

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

export default About;