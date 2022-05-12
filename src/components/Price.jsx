import Pcard from "./Pcard";
import "./Price.scss";

function Price() {
  return (
    <div className="price">
      <div className="price__wrapper container">
        <div className="price__text">
          <h2>Подберите оптимальный тариф</h2>
          <p>
            У вашей команды появится возможность обратиься к врачу в любое
            время. Цены указаны за одного сотрудника.
          </p>
        </div>
        <div className="price__window">
          <div className="price__flex">
            <Pcard
              title="Базовый"
              subtitle="Онлайн-оценка здоровья"
              subtitle2="Консультации с врачами по видео, аудио или в чате"
              price="2 200 ₽/год"
            ></Pcard>
            <Pcard
              title="Онлайн-психолог"
              subtitle="Онлайн-оценка здоровья"
              subtitle2="Врач поможет пережить стресс онлайн, найти себя, справиться с проблемами на работе"
              price="3 300 ₽/год"
            ></Pcard>
            <Pcard
              title="Оптима"
              subtitle="Онлайн-оценка здоровья"
              subtitle2="Консультации с врачами по видео, аудио или в чате"
              subtitle3="Врач поможет пережить стресс онлайн, найти себя, справиться с проблемами на работе"
              price="3 500 ₽/год"
            ></Pcard>
          </div>
        </div>
        <button href="" className="price__button">
          Оставить заявку
        </button>
      </div>
    </div>
  );
}

export default Price;
