import React, { useState, useEffect } from 'react';
import styles from './JUCarousel.module.css';
import { FaPlay, FaPause } from 'react-icons/fa';

const JUCarousel = ({
    children,
    autoScroll = true,
    scrollInterval = 3000,
  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoScroll, setIsAutoScroll] = useState(autoScroll);
    const items = React.Children.toArray(children);
    const itemsPerSlide = 3;
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(items.length / itemsPerSlide));
    };
  
    const toggleAutoScroll = () => {
      setIsAutoScroll((prev) => !prev);
    };
  
    useEffect(() => {
      let interval;
      if (isAutoScroll) {
        interval = setInterval(goToNext, scrollInterval);
      }
      return () => clearInterval(interval);
      // eslint-disable-next-line
    }, [isAutoScroll, scrollInterval, currentIndex]);
  
    return (
      <div className={styles.juCarousel}>
        <div className={styles.juCarouselViewport}>
          <div
            className={styles.juCarouselTrack}
            style={{ transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)` }}
          >
            {items.map((item, index) => (
              <div className={styles.juCarouselSlide} key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
  
        <div className={styles.toggleContainer}>
          <div className={styles.icon} onClick={toggleAutoScroll}>
            {isAutoScroll ? <FaPause /> : <FaPlay />}
          </div>
          <div className={styles.indicatorContainer}>
            {items.map((_, index) => (
              <div
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default JUCarousel;
  