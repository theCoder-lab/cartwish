import "./FeaturedProduct.css";
import ProductCardd from "../products/ProductCardd";
import fetchData from "../../hooks/fetchData";
import ProductCarddSkeleton from "../products/ProductCarddSkeleton";

const FeaturedProduct = () => {
  const { data, error, isLoading } = fetchData("/products/featured");
  const skeletons = [1, 2, 3];

  return (
    <section className="featured_products">
      <h2>Featured Products</h2>
      <div className="align_center featured_products_list">
        {error && <em className="form_error">{error}</em>}
        {data &&
          data.map((product) => (
            <ProductCardd key={product._id} product={product} />
          ))}
        {isLoading && skeletons.map((n) => <ProductCarddSkeleton key={n} />)}
      </div>
    </section>
  );
};

export default FeaturedProduct;
