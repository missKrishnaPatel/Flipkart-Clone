
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { bannerData } from "../constants/Data";
import { styled } from "@mui/material";


const Image = styled('img')({
    width:'100%',
    height:'280px',
    objectFit:'cover',
    maxWidth:'100%',
})

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };




const Banner = () => {
    return(
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            infinite={true}
            responsive={responsive}
             containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            autoPlaySpeed={4000}
  keyBoardControl={true}
  slidesToSlide={1}
            >
                {
                    bannerData.map(data =>
                         <Image src={data.url} alt='banner'/>

                    )
                }
        </Carousel>
    )
}

export default Banner;