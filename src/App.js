import HomePage from "./pages/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
