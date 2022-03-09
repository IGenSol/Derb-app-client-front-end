import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ProductPromotionStyle } from './ProductPromotion.style';

function ProductPromtion() {

    const [products, setProducts] = useState([]);
    // const url = `${process.env.REACT_APP_BASE_URL}/products/${userId}`;
    const url = `${process.env.REACT_APP_BASE_URL}/products`;

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const data = await axios.get(url);
        setProducts(data.data);
    };


    return (
        <ProductPromotionStyle>
            <h2>Add Product for Promotion</h2>
            <hr className='my-5'></hr>
            <article className="input-layout">
                <h3>Select Product:</h3>
                <select
                    className="custom-input"
                // onChange={(e) => setProductCatagory(e.target.value)}
                >
                    {
                        products.map((products, index) => {
                            return (
                                <option key={index} value={products?.product_name}>{products?.product_name}</option>
                            )
                        })
                    }


                </select>
            </article>
        </ProductPromotionStyle>
    )
}

export default ProductPromtion;