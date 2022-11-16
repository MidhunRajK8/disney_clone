import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src="/images/slider-badging.jpg" alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a>
            <img src="/images/slider-scale.jpg" alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a>
            <img src="/images/slider-badag.jpg" alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a>
            <img src="/images/slider-scales.jpg" alt="" />
          </a>
        </Wrap>
      </Carousel>
    </>
  );
};

const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button {
        /* opacity: 0; */
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover{
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }
`;

const Wrap = styled.div``;

export default ImgSlider;