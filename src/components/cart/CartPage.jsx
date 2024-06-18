import "./CartPage.css";
import remove from "../../assets/remove.png";
import Table from "../common/Table";
import QuantityInput from "../products/singleProduct/QuantityInput";
import { useEffect, useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import CartContext from "../../contexts/CartContext";
import { checkoutAPI } from "../../services/orderServices";
import { toast } from "react-toastify";

const CartPage = () => {
  const [subTotal, setSubTotal] = useState(0);
  const user = useContext(UserContext);
  const { cart, removeFromCart, updateCart, setCart } = useContext(CartContext);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.product.price * item.quantity;
    });

    setSubTotal(total);
  }, [cart]);

  const checkout = () => {
    const oldCart = [...cart];
    setCart([]);
    checkoutAPI()
      .then(() => {
        toast.success("Order placed successfully!");
      })
      .catch(() => {
        toast.error("Something went wrong!");
        setCart(oldCart);
      });
  };

  return (
    <section className="align_center cart_page">
      <div className="align_center user_info">
        <img
          src={`http://localhost:5000/profile/${user?.profilePic}`}
          alt="user profile"
        />
        <div>
          <p className="user_name">Name: {user?.name} </p>
          <p className="user_email">Email: {user?.email} </p>
        </div>
      </div>

      <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
        {cart.map(({ product, quantity }) => (
          <>
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td className="align_center table_quantity_input">
                <QuantityInput
                  quantity={quantity}
                  stock={product.stock}
                  setQuantity={updateCart}
                  cartPage={true}
                  productId={product._id}
                />
              </td>
              <td>${quantity * product.price}</td>
              <td>
                <img
                  src={remove}
                  alt="Remove icon"
                  className="cart_remove_icon"
                  onClick={() => removeFromCart(product._id)}
                />
              </td>
            </tr>
          </>
        ))}
      </Table>

      <table className="cart_bill">
        <tr>
          <td>Subtotal</td>
          <td>${subTotal}</td>
        </tr>
        <tr>
          <td>Shipping Charge</td>
          <td>$5</td>
        </tr>
        <tr className="cart_bill_final">
          <td>Total</td>
          <td>${subTotal + 5}</td>
        </tr>
      </table>
      <button className="search_button checkout_button" onClick={checkout}>
        checkout
      </button>
    </section>
  );
};

export default CartPage;
