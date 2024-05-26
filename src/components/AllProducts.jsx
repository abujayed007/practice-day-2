import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";


const AllProducts = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/cola")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);
    

    const handleDeleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
      };
    return (
        <div className='my-5'>
            <h2 className="text-3xl text-center my-3">All Products</h2>
            <div className="flex flex-wrap">
                {
                    products.map(drink => <ProductCard key={drink.id} drink={drink} onDelete={handleDeleteProduct}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;