import "./MyOrderPage.css";
import Table from "./../common/Table";
import fetchData from "../../hooks/fetchData";

const MyOrderPage = () => {
  const { data: orders, error, isLoading } = fetchData("/order");
  const getProductString = (order) => {
    const productStringArr = order.products.map(
      (p) => `${p.product.title}(${p.quantity})`
    );

    return productStringArr.join(", ");
  };
  return (
    <section className="align_center myorder_page">
      {isLoading && "Loading..."}
      {error && <em className="form_error">{error}</em>}
      {orders && (
        <Table headings={["Order", "Products", "Total", "Status"]}>
          {orders.map((order, index) => (
            <tr key={order._id}>
              <td>{index + 1}</td>
              <td>{getProductString(order)}</td>
              <td>${order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </Table>
      )}
    </section>
  );
};

export default MyOrderPage;
