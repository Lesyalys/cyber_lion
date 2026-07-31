export default function Card({ title, text }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-text">
          <h1 className="vacancy-title">{title}</h1>
          <p className="vacancy-subtitle">{text}</p>
        </div>
        <img src="./img/lion.svg" className="card-logo" alt="lion" />
      </div>
    </div>
  );
}
