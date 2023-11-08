import React from "react";
import { Components } from "../../../components";
import { LIST } from "../../../utils/List";

import cls from "../../../styles/Home.module.scss";

const Home = () => {

  const getHelp = () => {
    alert("Вы можете позвонить в скорую помощ нажав на надпись 103,а также вы можете заказать нужные лекарство в нашем магазине");
  };

  return (
    <React.Fragment>
      <Components.Slider />

      <Components.Container>
        <Components.Divider>
          <div className={cls.main_wrapper}>
            <h3>
              Добро пожаловать на наш сайт! Мы рады видеть вас здесь и
              благодарим вас за проявленный интерес к нашей компании. Мы
              стремимся предоставить вам высококачественные продукты и услуги, а
              также оказать максимально возможную поддержку нашим клиентам.Мы
              надеемся, что наш сайт будет полезным и интересным для вас.
              Спасибо за ваше время и внимание!
            </h3>
            <Components.HelpPerson />
            <div className={cls.main_wrapper_help}>
              <h1>
                Вы можете получить помощь тут!
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2026/2026639.png"
                  alt=""
                />
              </h1>
              <div className={cls.help_row}>
                {LIST.HelpList.map((i) => (
                  <div key={i.id} className={cls.help_card}>
                    <div className={cls.card_container}>
                      <img src={i.url} alt="" />
                    </div>
                    <h4>{i.caption}</h4>
                    <a href="tel:103">103</a>
                    <p>{i.content}</p>
                    <button onClick={getHelp}>Help</button>
                  </div>
                ))}
              </div>
            </div>
            <Components.Review />
          </div>
        </Components.Divider>
      </Components.Container>
    </React.Fragment>
  );
};

export default Home;
