import ProductsList from "../ProductsList";
import "./index.css";
import { Component } from "react";

class Travel extends Component {
  state = { travelsData: [], isLoading: true };

  componentDidMount() {
    this.gettravelsData();
  }

  gettravelsData = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/MukundKumar99/category/db"
    );

    const data = await response.json();
    this.setState({ travelsData: data.travel, isLoading: false });
  };

  renderSuccessView = () => {
    const { travelsData } = this.state;
    return (
      <ul className="products-list-bg-container">
        {travelsData.map((eachData) => (
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

export default Travel;
