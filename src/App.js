import React from "react";
import data from "./data";

function App() {
  return (
    <div>
      <header>
        <a href='/'>amazone</a>
      </header>
      <main>
        <h1>Featured Product</h1>
        <div className='products'>
          {data.products.map((prod) => (
            <div className='product' key={prod.slug}>
              <a href={`/product/${prod.slug}`}>
                <img src={prod.image} alt={prod.name} />
              </a>
              <div className='product-info'>
                {/* <a href={`/product/${prod.name}`}
                <p>{prod.name}</p> */}
                <a href={`/product/${prod.slug}`}>
                  <p>{prod.name}</p>
                </a>
                <p>{prod.price}</p>
                <button>Add to card</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
