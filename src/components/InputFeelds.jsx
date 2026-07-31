export default class InputCards {
  constructor(type = "default") {
    this.type = type;
    this.strategies = {
      default: () => <input type="text" />,
      text: (label = "", required = false) => (
        <div className="input-field-class">
          <label>
            {label}
            {required && (
              <span style={{ color: "#d1511b", marginLeft: "4px" }}>*</span>
            )}
          </label>
          <input
            className="input-field input-rounded"
            type="text"
            required={required}
          />
        </div>
      ),
      date: (label = "", required = false) => {
        const today = new Date();
        const maxDate = new Date(
          today.getFullYear() - 18,
          today.getMonth(),
          today.getDate(),
        );
        const maxDateString = maxDate.toISOString().split("T")[0];

        return (
          <div className="input-field-class">
            <label>
              {label}
              {required && (
                <span style={{ color: "#d1511b", marginLeft: "4px" }}>*</span>
              )}
            </label>
            <input
              placeholder="ДД.ММ.ГГГГ"
              className="input-field input-rounded"
              type="date"
              max={maxDateString}
              required={required}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
            <small
              style={{
                display: "block",
                marginTop: "4px",
                color: "#6a6a82",
                fontSize: "12px",
              }}
            >
              Вам должно быть больше 18 лет
            </small>
          </div>
        );
      },
      select: (label = "", options = [], required = false) => (
        <div className="input-field-class">
          <label>
            {label}
            {required && (
              <span style={{ color: "#d1511b", marginLeft: "4px" }}>*</span>
            )}
          </label>
          <select className="input-field input-rounded" required={required}>
            <option value="">Выберите вариант</option>
            {options.map((opt, i) => (
              <option key={i} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      ),
    };
  }

  render(label = "", options = [], required = false) {
    const strategy = this.strategies[this.type] || this.strategies.default;
    return strategy(label, options, required);
  }
}
