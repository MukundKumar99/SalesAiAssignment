import ProductsList from "../ProductsList";
import "./index.css";
import { Component } from "react";

class Gifting extends Component {
  state = { giftingData: [], isLoading: true };

  componentDidMount() {
    this.getGiftingData();
  }

  getGiftingData = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/MukundKumar99/category/db"
    );

    const data = await response.json();
    this.setState({ giftingData: data.gifts, isLoading: false });
  };

  renderSuccessView = () => {
    const { giftingData } = this.state;
    return (
      <ul className="products-list-bg-container">
        {giftingData.map((eachData) => (
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

export default Gifting;
