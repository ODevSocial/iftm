function Card({ title, icon }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <span className="card-title">{title}</span>
    </div>
  );
}

export default Card;