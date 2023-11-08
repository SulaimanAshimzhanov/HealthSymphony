

import React from 'react';
import classNames from "classnames";

import cls from "../../styles/DotsSlider.module.scss";


const DotsSlider = ({currentSlider, dotIndex}) => {
  return (
    <div
        className={
            currentSlider === dotIndex + 1
                ? classNames(cls.dots, cls.activeDots)
                : cls.dots
        }
    >
      
    </div>
  )
}

export default DotsSlider;
