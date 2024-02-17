import ProductsList from "../ProductsList";
import "./index.css";
import { Component } from "react";

class Jewellery extends Component {
  state = { jewelleryData: [], isLoading: true };

  componentDidMount() {
    this.getJewelleryData();
  }

  getJewelleryData = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/MukundKumar99/category/db"
    );

    const data = await response.json();
    this.setState({ jewelleryData: data.jewellery, isLoading: false });
  };

  renderSuccessView = () => {
    const { jewelleryData } = this.state;
    return (
      <ul className="products-list-bg-container">
        {jewelleryData.map((eachData) => (
          <ProductsList productData={eachData} key={eachData.id} />
        ))}
      </ul>
    );
  };

  render() {
    const { isLoading } = this.state;
    return <>{isLoading ? null : this.renderSuccessView()}</>;
  }
}

export default Jewellery;
