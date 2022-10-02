import React, { useState } from 'react';
import Slider from 'react-slick';
import { SlideData } from './data';
import {Text, Box, HStack} from "@chakra-ui/react"

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src='https://www.svgrepo.com/show/109459/left-arrow.svg' alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src='https://www.svgrepo.com/show/83417/right-arrow.svg' alt="nextArrow" {...props} />
  );

function Card({title}) {
    const [cardCount, setcardCount] = React.useState(1);

    const handleClickadd = () => {
        if (cardCount<10) {
            setcardCount(cardCount+1);
        } 
        else {
            setcardCount(1);
        }
    };

    const handleClicksubtract = () => {
        if (cardCount>1 && cardCount<=10) {
            setcardCount(cardCount-1);
        } 
        else {
            setcardCount(10);
        }
    };

  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    beforeChange: handleClicksubtract,
    afterChange: handleClickadd,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: "https://cdn.pixabay.com/photo/2017/01/09/12/49/mistake-1966448__340.jpg",
    }));
  };

  return (
    <>
    <HStack margin='15px auto' whiteSpace='nowrap' gap='1' mb='15px' width='73%'>
        <Text  fontSize='22px' color= '#133b5a' letterSpacing='-.23px' fontWeight='600' >{title}</Text>
        <Text  ml='10px' fontSize='22px' color= '#828282' letterSpacing='-.23px' fontWeight='600'>{cardCount}/10</Text>
        <Box borderBottom='1px solid #133b5a' height='12px' width="90%" ></Box>
    </HStack>
      <Slider {...settings} style={{width:"73%", margin: "auto"}}>
        {SlideData.map((item) => (
          <div className="card" >
            <div className="card-top" style={{width: "225px", height:"250px", backgroundColor:'white'}}>
              <img
                style={{width: "100%", height:"140px"}}
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <Text height='50px' ml='2' mt='2' overflow='hidden' fontSize= "16px" lineHeight= "18px" color= "#282828" marginBottom= "5px" fontFamily= "TundraWeb" textAlign="left">{item.title}</Text>
              <Text ml='2' mt='3' color='#828282' fontWeight="600" fontSize='12px' letterSpacing= '1px' lineHeight='15px'>{item.author}</Text>
              <Text ml='2' mt='1' color='#828282' fontWeight="600" fontSize='12px' letterSpacing= '1px' lineHeight='15px'>{item.author2}</Text>
            </div>
          </div>
        ))}
      </Slider>
    </>
    
  );
}

export default Card;