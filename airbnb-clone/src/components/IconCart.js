import { ShoppingCart } from "@material-ui/icons";

export const IconCart = () => {
  return (
    <>
      <span className="icon-cart">
        <ShoppingCart />
      </span>
      <span className="badge rounded-pill badge-notification bg-danger">1</span>
    </>
  );
};
