

import React from 'react';
import { LIST } from '../../utils/List';
import classNames from 'classnames';
import { Components } from '..';

import cls from "../../styles/Slider.module.scss";


const Slider = () => {
    const [currentSlider, setCurrentSlider] = React.useState(1);


      setTimeout(() => {
        if(currentSlider !== LIST.SliderList.length) {
            setCurrentSlider(currentSlider + 1)
        } else {
            setCurrentSlider(1)
        }
      }, 3000);


  return (
    <div className={cls.slider_parent}>
      <div className={cls.slider_parent_container}>
        {
            LIST.SliderList.map((item, index) => (
                <div
                    className={currentSlider === index + 1 ? classNames(cls.slider_item, cls.activeSlider) : cls.slider_item}
                    key={item.id}
                    style={{background: `url("${item.url}") center / cover`}}
                >
        
                </div>
            ))
        }
      </div>

      <div className={cls.slider_parent_dots}>
      {Array.from({length: LIST.SliderList.length}).map((item, index) => 
          <Components.DotsSlider currentSlider={currentSlider} dotIndex={index} key={index}/>
        )}
      </div>
    </div>
  )
}

export default Slider;
