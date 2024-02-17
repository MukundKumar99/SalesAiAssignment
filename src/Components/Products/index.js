import ProductCategories from "../ProductsCategories";
import "./index.css";

const Products = () => {
  return (
    <>
      <ul className="product-categories">
        <ProductCategories />
      </ul>
      <div className="product-sub-category">
        <p className="sub-category">Bags · Backpacks</p>
        <div>
          <p className="sub-category">
            13 products
            <span>
              <img
                src="https://res.cloudinary.com/dc2b69ycq/image/upload/v1708108493/CCBP%20Assignments/Vector_4_fvulrq.png"
                alt="product"
                className="product-count"
              />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Products;
