export default function Card({ title, text }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-text">
          <h1 className="vacancy-title">{title}</h1>
          <strong className="vacancy-subtitle">{text}</strong>
        </div>
        <img src="./img/lion.svg" className="card-logo" alt="lion" />
      </div>
    </div>
  );
}
