import ProductsList from "../ProductsList";
import "./index.css";
import { Component } from "react";

class Accessories extends Component {
  state = { accessoriesData: [], isLoading: true };

  componentDidMount() {
    this.getAccessoriesData();
  }

  getAccessoriesData = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/MukundKumar99/category/db"
    );

    const data = await response.json();
    this.setState({ accessoriesData: data.accessories, isLoading: false });
  };

  renderSuccessView = () => {
    const { accessoriesData } = this.state;
    return (
      <ul className="products-list-bg-container">
        {accessoriesData.map((eachData) => (
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

export default Accessories;
