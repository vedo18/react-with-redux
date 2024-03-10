import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Headers";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
function NotFound() {
  return <div>404 Not Found</div>;
}

export default App;
