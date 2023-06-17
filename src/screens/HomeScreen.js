import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div>
      <h1>Featured Product</h1>
      <div className='products'>
        {data.products.map((prod) => (
          <div className='product' key={prod.slug}>
            <Link to={`/product/${prod.slug}`}>
              <img src={prod.image} alt={prod.name} />
            </Link>
            <div className='product-info'>
              {/* <a href={`/product/${prod.name}`}
          <p>{prod.name}</p> */}
              <Link to={`/product/${prod.slug}`}>
                <p>{prod.name}</p>
              </Link>
              <p>{prod.price}</p>
              <button>Add to card</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
