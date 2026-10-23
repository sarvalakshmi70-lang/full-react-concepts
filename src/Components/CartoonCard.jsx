
function CartoonCard({ cartoon }) {
  return (
    <article className="cartoon-card">
      <div className="cartoon-image">
        <img
          src={cartoon.image}
          alt={cartoon.name || "Cartoon character"}
        />
      </div>

      <div className="card-content">
        <span className="category">
          {cartoon.category || "General"}
        </span>

        <h2>{cartoon.name || "Unknown Cartoon"}</h2>

        <p>
          {cartoon.description || "No description available."}
        </p>

        <div className="rating">
          ⭐ Rating: {cartoon.rating ?? "Not available"}/10
        </div>
      </div>
    </article>
  );
}

export default CartoonCard;
