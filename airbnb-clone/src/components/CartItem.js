import "../styles/Cart.css";
export const CartItem = ({ item, handleDelete }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
      <div className="d-flex flex-row">
        <img className="rounded image-tour-cart" src={item.image} width="40" />
        <div className="ml-2 brief">
          <span className="font-weight-bold d-block">{item.name}</span>
          <span className="spec">{item.duration}</span>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center">
        <span className="d-block">{item.quantity}</span>
        <span className="d-block ml-5 font-weight-bold">${item.price}</span>
        <button
          className="btn-sm btn-outline-danger ml-3"
          onClick={() => handleDelete(item.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};
