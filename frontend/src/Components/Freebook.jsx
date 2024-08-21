import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from "../../public/List.json"
import Cards from './Cards';

function Freebook() {
    const filterData=List.filter((data)=>data.category==="free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-semibold pb-2 text-xl'>Free offered books</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab facilis temporibus dolores dignissimos tenetur, saepe magni necessitatibus praesentium inventore voluptatibus earum. At corporis architecto excepturi iste nostrum ad deserunt atque?</p>
        </div>
   
    <div>
    <Slider {...settings}>
    {filterData.map((item)=>(
            <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
    </div>
    
    </>
  )
}

export default Freebook
