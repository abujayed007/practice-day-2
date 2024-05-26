import { useEffect, useState } from "react";
import SigleProduct from "./SingleProduct";
import axios from "axios";



const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        async function loadProducts (){
            const data =await axios.get('http://localhost:3000/cola')
            // console.log(data);
            setProducts(data?.data);
        }
        loadProducts()
    },[])
    return (
        <div className="my-5">
            <h2 className="text-4xl text-center my-5">Our Products</h2>
            <div className="flex justify-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {
                        products.slice(0,3).map(product =><SigleProduct key={product.id} product={product}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;