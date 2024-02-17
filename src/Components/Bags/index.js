import Products from "../Products";
import ProductsList from "../ProductsList";
import "./index.css";
import { Component } from "react";

class Bags extends Component {
  state = { bagsData: [], isLoading: true };

  componentDidMount() {
    this.getBagsData();
  }

  getBagsData = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/MukundKumar99/category/db"
    );

    const data = await response.json();
    this.setState({ bagsData: data.bags, isLoading: false });
  };

  renderSuccessView = () => {
    const { bagsData } = this.state;
    return (
      <ul className="products-list-bg-container">
        {bagsData.map((eachData) => (
          <ProductsList productData={eachData} key={eachData.id} />
        ))}
      </ul>
    );
  };

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <Products />
        {isLoading ? null : this.renderSuccessView()}
      </>
    );
  }
}

export default Bags;
