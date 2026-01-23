import React from 'react'



 function ProductList() {
    const products=[
        {id:1,name:"Laptop",price:122222},
        {id:2,name:"Mobile",price:222222}
    ];
  return (
    <div>

        <h2>Products</h2>

        {products.length===0 ?(
            <p>No Products available</p>
        ):(
            <ul>
                {products.map((products)=>(
                    <li key={products.id}>{products.name}-${products.price}</li>
                ))}
            </ul>
        )}
    </div>
  );
};

export default ProductList;
