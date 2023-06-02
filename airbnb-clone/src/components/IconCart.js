import { ShoppingCart } from "@material-ui/icons";
import {useContext} from "react";
import {CartContext} from "../contexts/CartContext";

export const IconCart = () => {
    const { cartItems } = useContext(CartContext);
    return (
    <>
      <span className="icon-cart">
        <ShoppingCart />
      </span>
      <span className="badge rounded-pill badge-notification bg-danger">{cartItems.length}</span>
    </>
  );
};
