import Card from "./components/Card";
import Circs from "./components/Сircs";
import Warning from "./components/Warning";
import InputCards from "./components/InputFeelds";

export default function App() {
  const input_data = {
    fio: new InputCards("text").render("ФИО"),
    city: new InputCards("select").render([
      { value: "msk", label: "Москва" },
      { value: "spb", label: "Санкт-Петербург" },
      { value: "kazan", label: "Казань" },
    ]),
    adress: new InputCards("text").render("Какой адресс клуба удлнее?"),
    date: new InputCards("date").render("Дата рождения"),
  };

  return (
    <div className="App">
      <div className="logos">
        <img src="/img/logo.svg"></img>
        <img src="/img/logo 1.svg"></img>
      </div>

      <div>
        <Card title="Вакансия" text="Администратор компьютерного клуба" />
        <div id="circs">
          <Circs text="Полная занятость" />
          <Circs text="График 2/2" />
          <Circs text="от 65 000 ₽" />
        </div>
      </div>

      <Warning text="Обратите внимание, анкеты могут быть НЕ приняты, в следующих случаях: Вы не достигли 18 лет Вы никогда не играли в компьютерные игры Не интересуетесь игровой индустрией" />

      <list>
        <ul>{input_data.fio}</ul>
        <ul>{input_data.select}</ul>
        <ul>{input_data.adress}</ul>
        <ul>{input_data.date}</ul>
      </list>
    </div>
  );
}
