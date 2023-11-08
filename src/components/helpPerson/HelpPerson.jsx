import React from "react";

import cls from "../../styles/HelpPerson.module.scss";

const HelpPerson = () => {
  return (
    <div className={cls.main_wrapper_body}>
      <img
        src="https://www.collegedrinkingprevention.gov/_images/specialfeatures/body-rotate.gif"
        alt=""
      />
      <div className={cls.main_wrapper_body_list}>
        <p>
          Тело человека - это физический оболочка, состоящая из органов, тканей
          и клеток. Оно имеет различные системы, такие как нервная,
          костно-мышечная, дыхательная, пищеварительная, кровеносная и другие.
          Тело выполняет различные функции, включая поддержку, движение, защиту,
          переваривание пищи, кровообращение, дыхание, метаболизм и репродукцию.
        </p>
        <div className={cls.card}>
          <p>
            <span>Дыхание:</span> обмен газами с окружающей средой, который
            обеспечивает поступление кислорода в организм и удаление углекислого
            газа.
          </p>
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/09/Lungs-Free-Download-PNG.png"
            alt=""
          />
        </div>
        <div className={cls.card}>
          <p>
            <span>Циркуляция:</span> передвижение крови через сердце, сосуды и
            органы для доставки кислорода и питательных веществ, а также
            удаления отходов.
          </p>
          <img
            src="https://png.pngtree.com/png-clipart/20220910/original/pngtree-human-heart-medical-anatomi-png-image_8526884.png"
            alt=""
          />
        </div>
        <div className={cls.card}>
          <p>
            <span>Пищеварение:</span> переработка пищи в органах пищеварения для
            извлечения питательных веществ и удаления отходов.
          </p>
          <img
            src="https://png.pngtree.com/png-clipart/20200701/big/pngtree-visceral-stomach-png-image_5413373.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HelpPerson;
