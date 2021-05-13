import { Division, Img, ImgWrapper, MobileWrapper, Title, TotalContainer, WebWrapper } from "./EnvironmentStyles"
import Slider from 'react-slick'
import { useEffect, useState } from "react";

function SampleNextArrow(props: any) {
    const { style, onClick } = props;
    return (
        <img 
            src="/images/main/environment/button_right.png"
            style={{
                ...style,
                position: 'absolute',
                top: '119px',
                left: '1150px',
                width: '50px',
                height: '50px',
                cursor: "pointer"
            }}
            onClick={onClick} 
        />
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { style, onClick } = props;
    return (
        <img 
            src="/images/main/environment/button_left.png"
            style={{
                ...style,
                position: 'absolute',
                top: '119px',
                left: '10px',
                width: '50px',
                height: '50px',
                cursor: "pointer",
                zIndex: 1,
            }}
            onClick={onClick} 
        />
    );
  }

const EnvironmentPresenter: React.FC = () => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    const webSettings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      cssEase: 'linear',
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    const mobileSettings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 500,
      cssEase: 'linear',
      nextArrow: <></>,
      prevArrow: <></>,
      appendDots: (dots: any) => (
        <ul style={{ display: 'flex', justifyContent: 'center', paddingRight: '20px' }}>
          {dots.map((dot: any) => (
            <li style={{ width: '1px', margin: '8px' }}>{dot}</li>
          ))}
        </ul>
      ),
    };

    return (
        <TotalContainer>
            <Title>코드캠프 환경</Title>
            <Division src="/images/common/divisionLine.png" alt="no image" />
            {loaded && (
                <WebWrapper>
                    <Slider {...webSettings}>
                        {new Array(13).fill(1).map(({}, index) => (
                            <ImgWrapper>
                                <Img src={`/images/main/environment/environment${String(index+1).padStart(2,'0')}.jpg`} />
                            </ImgWrapper>
                        ))}
                    </Slider>
                </WebWrapper>
            )}
            {loaded && (
                <MobileWrapper>
                    <Slider {...mobileSettings}>
                        {new Array(13).fill(1).map(({}, index) => (
                            <ImgWrapper>
                                <Img src={`/images/main/environment/environment${String(index+1).padStart(2,'0')}.jpg`} />
                            </ImgWrapper>
                        ))}
                    </Slider>
                </MobileWrapper>    
            )}
        </TotalContainer>
    )

}

export default EnvironmentPresenter