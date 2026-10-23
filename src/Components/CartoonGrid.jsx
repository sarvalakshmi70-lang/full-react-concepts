
import CartoonCard from "./CartoonCard";

function CartoonGrid({ cartoons }) {
  if (cartoons.length === 0) {
    return (
      <div className="empty-state">
        <span>🔎</span>
        <h2>No cartoons found!</h2>
        <p>Try changing your search or category.</p>
      </div>
    );
  }

  return (
    <div className="cartoon-grid">
      {cartoons.map((cartoon) => (
        <CartoonCard key={cartoon.id} cartoon={cartoon} />
      ))}
    </div>
  );
}

export default CartoonGrid;
