import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

//
//  Div carousel, I love the idea of this effect but not happy with how it looked upon implimentation
//  Would love to make it look good at some point
//  Uses react-multi-carousel npm. Great package!
//


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};


const MyCarousel = () => {

  //
  //  Fetches over all sports. maps them to the carousel
  //
    const [sports, setSports] = useState([])
    useEffect(() => {
        fetch('/sports')
            .then(res => res.json())
            .then((data) => {
            setSports(data)
        })
    }, [])
  
    return (
      <>
        {sports.length >= 1 ?
        <CarouselDiv
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding"
        >
          {sports
          .filter((sport) => !sport.has_outrights).map((sport, index) => (
            <StyledLink to={`/sports/${sport.key}/odds`} key={index}>
              <CarouselItem key={index}>
                <H3>{sport.title}</H3>
                <H4>{sport.description}</H4>
              </CarouselItem>
            </StyledLink>
          ))}
        </CarouselDiv> 
        : <LoadingSpinner/>}
      </>
    );
  };
  
  const H3 = styled.h3`
  font-weight:500;
  font-size:2rem;
  text-align: center;
  overflow-wrap: break-word;

  `

  const H4 = styled.h4`
  font-weight:500;
` 

  const StyledLink = styled(Link) `
  text-decoration: none;
  `

  const CarouselDiv = styled(Carousel) `
  padding: 50px;
  margin-top: 40px;
  `

  const CarouselItem = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  height: 200px;
  width: 250px;
  background-color: rgba(33, 242, 145, 1); 
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  margin: 20px 0px;
  color: black;
  font-weight: 100;
  border-radius: 5px;
  overflow-wrap: break-word;
  `
  export default MyCarousel;
  