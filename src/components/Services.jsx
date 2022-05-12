import Scard from "./Scard";
import "./Services.scss";

function Services() {
  return (
    <div className="services">
      <div className="services__wrapper ">
        <div className="services__text container">
          <h2>Сервисы для вашей команды</h2>
          <p>
            Мы предлагаем услуги, которые помогут решить любой вопрос о здоровье
            ваших сотрудников
          </p>
        </div>
        <div className="services__window">
          <div className="services__flex">
            <Scard
              phone="./img/phone.png"
              subtitle="Каждый из вашей команды сможет поговорить с врачом о заболевании в чате, голосом или по видеосвязи."
              img="./img/apt.svg"
              imgdes="./img/apt-des.png"
              title="Онлайн-консультации с врачами"
            ></Scard>
            <Scard
              subtitle="Каждый из вашей команды сможет поговорить с врачом о заболевании в чате, голосом или по видеосвязи."
              img="./img/apt2.svg"
              title="Онлайн-консультации с врачами"
            ></Scard>
            <Scard
              phone="./img/phone3.png"
              subtitle="Каждый из вашей команды сможет поговорить с врачом о заболевании в чате, голосом или по видеосвязи."
              img="./img/apt3.svg"
              title="Онлайн-консультации с врачами"
            ></Scard>
            <Scard
              phone="./img/phone4.png"
              subtitle="Каждый из вашей команды сможет поговорить с врачом о заболевании в чате, голосом или по видеосвязи."
              img="./img/apt4.svg"
              title="Онлайн-консультации с врачами"
            ></Scard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
