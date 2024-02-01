import logo from './logo.svg';
import './App.css';
import HigherOrderComponent from './component/HOC';
import Product from './Product';



function App() {
  const NewProduct = HigherOrderComponent(Product);
  return (
    <div className="App">
      <Product />
      <NewProduct name="Sajin"/>
    </div>
  );
}

export default App;
