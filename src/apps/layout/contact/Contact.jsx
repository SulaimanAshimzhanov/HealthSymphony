

import React from 'react';

import cls from "../../../styles/Contact.module.scss";
import { Components } from '../../../components';
import { LIST } from '../../../utils/List';

const Contact = () => {
  return (
    <Components.Container>
      <Components.Divider>
        <div className={cls.contact_wrapper}>
          <h1>Контакты</h1>
          <div className={cls.contact_wrapper_card}>
            <div className={cls.card_container}>
              <h3>Единый контактный телефон:</h3>
              <a href='+996 220 95 64 32'>+996 220 95 64 32</a>
              <h3>Инстаграм:</h3>
              <a href='https://www.instagram.com/'>vector.ru</a>
            </div>
            <div className={cls.card_container}>
              <h3>Электронная почта:</h3>
              <a href=''>vector@gmail.com</a>
              <h3>ТикТок:</h3>
              <a href='https://www.tiktok.com/'>vector.ru</a>
            </div>
          </div>
          <div className={cls.contact_wrapper_content}>
            <h1>Реквизиты для оплаты</h1>
            <div className={cls.content_card}>
              <div className={cls.card_one}>
                {
                  LIST.ContactListOne.map(i => (
                    <div>
                      <h3>{i.caption}</h3>
                      <p>{i.content}</p>
                    </div>
                  ))
                }
              </div>
              <div className={cls.card_two}>
                {
                  LIST.ContactListTwo.map(i => (
                    <div>
                      <p>{i.content}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </Components.Divider>
    </Components.Container>
  )
}

export default Contact
