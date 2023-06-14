import data from "./data";
//import './App.css';

function App() {
  return (
    <div>
      <header>
        <a href='/'>Amazon</a>
      </header>
      <main>
        <h1>Featur product</h1>
        <div className='products'>
          {data.products.map((product) => (
            <div className='product' key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className='product-info'>
                <a href={`/product/${product.name}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>add to card</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
