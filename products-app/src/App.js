import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <h4 style={{paddingTop: '50px'}}>Popular Products</h4>
        <ProductList />
    </div>
  );
}

export default App;
