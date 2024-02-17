import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Bags from "./Components/Bags";
import Navbar from "./Components/Navbar";
import Travel from "./Components/Travel";
import Accessories from "./Components/Accessories";
import Gifting from "./Components/Gifting";
import Jewellery from "./Components/Jewellery";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Bags} />
        <Route exact path="/travel" component={Travel} />
        <Route exact path="/accessories" component={Accessories} />
        <Route exact path="/gifting" component={Gifting} />
        <Route exact path="/jewellery" component={Jewellery} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
