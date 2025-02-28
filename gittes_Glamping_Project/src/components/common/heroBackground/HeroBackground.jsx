import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import styles from "./heroBackground.module.css";

const HeroBackground = ({ title, button, images = [], isSlider = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/contact`);
  };

  return (
    <div className={styles.heroBackground}>
      {isSlider ? (
        <div className={styles.sliderWrapper}>
          <Swiper
            loop
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={2500}
            modules={[Autoplay]}
            className={styles.swiper}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  className={styles.slide}
                  style={{ backgroundImage: `url(${img})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            {button && (
              <button className={styles.button} onClick={handleClick}>
                {button}
              </button>
            )}
          </div>
        </div>
      ) : (
        <div
          className={styles.singleImage}
          style={{ backgroundImage: `url(${images[0]})` }}
        >
          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            {button && (
              <button className={styles.button} onClick={handleClick}>
                {button}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroBackground;
