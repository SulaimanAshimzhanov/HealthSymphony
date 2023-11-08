

import React from 'react';

import cls from "../../../styles/Services.module.scss";
import { Components } from '../../../components';
import { LIST } from '../../../utils/List';

const Services = () => {
  return (
    <Components.Container>
      <Components.Divider>
        <div className={cls.service_wrapper}>
          <h1>Сервисы</h1>
          <div className={cls.service_wrapper_lists}>
            <div className={cls.lists}>
              <h2>
                <img src='https://cdn-icons-png.flaticon.com/512/6827/6827346.png' alt=''/>
                Диагностика
              </h2>
              {
                LIST.ServiceListOne.map(i => (
                  <div className={cls.dot_clas}>
                    <div className={cls.dot}></div>
                    <p>{i.caption}</p>
                  </div>
                ))
              }
            </div>
            <div className={cls.lists}>
              <h2>
                <img src='https://neomed-kolomna.ru/images/2022/001.png' alt=''/>
                Консультация
              </h2>
              {
                LIST.ServiceListTwo.map(i => (
                  <div className={cls.dot_clas}>
                    <div className={cls.dot}></div>
                    <p>{i.caption}</p>
                  </div>
                ))
              }
            </div>
            <div className={cls.lists}>
              <h2>
                <img src='https://cdn-icons-png.flaticon.com/512/1364/1364804.png' alt=''/>
                Операция
              </h2>
              {
                LIST.ServiceListThree.map(i => (
                  <div className={cls.dot_clas}>
                    <div className={cls.dot}></div>
                    <p>{i.caption}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </Components.Divider>
    </Components.Container>
  )
}

export default Services;
