import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import cls from "../../styles/Review.module.scss";

const Review = () => {
    const [review, setReview] = React.useState("");
    const [reviews, setReviews] = React.useState([]);

    React.useEffect(() => {
        const storedReviews = localStorage.getItem('reviews');
        if (storedReviews) {
          setReviews(JSON.parse(storedReviews));
        }
    }, []);
    
    React.useEffect(() => {
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }, [reviews]);

    const addReview = (e) => {
        e.preventDefault();

        if(review !== "") {
            setReviews([...reviews, review]);
            setReview("");
        };
    };

    const deleteReview = (text) => {
        const newItem = reviews.filter(item => {
            return item !== text
        });
        setReviews(newItem);
    };


  return (
    <div>
      <form onSubmit={addReview} className={cls.message}>
        <h1>Оставьте отзыв!</h1>
        <div className={cls.row_message}>
          <input value={review} onChange={e => setReview(e.target.value)} type="text" placeholder="Message..." />
          <button>Опубликовать</button>
        </div>
      </form>
      <div className={cls.message_keep}>
        <ul>
            {
                reviews.length > 0 
                    ? reviews.map((item, index) => (
                        <div key={index} className={cls.review}>
                            <li>{item}</li>
                            <AiOutlineClose onClick={() => deleteReview(item)}/>
                        </div>
                      ))
                    : <h2>Нету отзывов</h2>
            }
        </ul>
      </div>
    </div>
  );
};

export default Review;
