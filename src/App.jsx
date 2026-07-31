import Card from "./components/Card";
import Circs from "./components/Сircs";
import InputCards from "./components/InputFeelds";
import SendBtn from "./components/SendBtn";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    fio: "",
    city: "",
    adress: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const isValid = form.checkValidity();

    if (!isValid) {
      form.reportValidity();
      return;
    }

    alert("Форма успешно отправлена!");
  };

  const input_data = {
    fio: new InputCards("text").render("ФИО", [], true),
    city: new InputCards("select").render(
      "Город в котором вы планируете работать",
      [
        { value: "msk", label: "Москва" },
        { value: "spb", label: "Санкт-Петербург" },
        { value: "kazan", label: "Казань" },
      ],
      true,
    ),
    adress: new InputCards("text").render(
      "Какой адрес клуба для вас удобнее?",
      [],
      true,
    ),
    date: new InputCards("date").render("Дата рождения", [], true),
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="animated-content">
          <div className="logos fade-in-item delay-1">
            <img src="./img/logo.svg" alt="Logo 1" />
            <img src="./img/logo 1.svg" alt="Logo 2" />
          </div>

          <div className="fade-in-item delay-2">
            <Card title="Вакансия" text="Администратор компьютерного клуба" />
            <div id="circs">
              <Circs text="Полная занятость" />
              <Circs text="График 2/2" />
              <Circs text="от 65 000 ₽" />
            </div>
          </div>

          <div className="warning-box fade-in-item delay-3">
            Обратите внимание, анкеты могут быть НЕ приняты, в следующих
            случаях:
            <ul>
              <li>Вы не достигли 18 лет</li>
              <li>Вы никогда не играли в компьютерные игры</li>
              <li>Не интересуетесь игровой индустрией</li>
            </ul>
          </div>

          <div className="fade-in-item delay-4">
            <ul className="plain-list">
              <li>{input_data.fio}</li>
              <li>{input_data.city}</li>
              <li>{input_data.adress}</li>
              <li>{input_data.date}</li>
            </ul>
          </div>

          <div className="fade-in-item delay-5">
            <SendBtn />
          </div>
        </div>
      </form>
    </div>
  );
}
