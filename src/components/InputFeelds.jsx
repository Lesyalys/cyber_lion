export default class InputCards {
  constructor(type = "default") {
    this.type = type;
    this.strategies = {
      default: () => <input type="text" />,
      text: (label = "") => (
        <>
          <label>{label}</label>
          <input
            // placeholder={ph}
            className="input-field input-rounded"
            type="text"
          />
        </>
      ),
      date: (label = "") => (
        <>
          <label>{label}</label>
          <input
            placeholder="ДД.ММ.ГГГГ"
            className="input-field input-rounded"
            type="date"
            // Чтобы в Chrome/Firefox работал плейсхолдер для даты:
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")} // Опционально: возвращать текст при потере фокуса, если поле пустое
          />
        </>
      ),
      password: () => <input className="input-field" type="password" />,
      email: () => <input className="input-field" type="email" />,
      number: () => <input className="input-field" type="number" />,
      textarea: () => <textarea className="input-field" rows="4" />,
      checkbox: () => <input className="input-field" type="checkbox" />,
      select: (options = []) => (
        <select className="input-field">
          {options.map((opt, i) => (
            <option key={i} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ),
    };
  }

  render(props = {}) {
    const strategy = this.strategies[this.type] || this.strategies.default;
    return strategy(props);
  }
}
