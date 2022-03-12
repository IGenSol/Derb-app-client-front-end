import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DeleteIcon, EditIcon } from '../../../../../svgs';
import AddProducts from '../AddProducts/AddProducts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SubCatagoriesStyle } from '../SubCatagories/SubCatagories.style';
import { ProductPromotionStyle } from './ProductPromotion.style';

function ProductPromtion() {

    const [products, setProducts] = useState([]);
    const [productId, setProductId] = useState("");
    const [data, setdata] = useState([]);
    const [discount, setDiscount] = useState("")
    const [promocode, setpromocode] = useState("")
    // const url = `${process.env.REACT_APP_BASE_URL}/products/${userId}`;
    const url = `${process.env.REACT_APP_BASE_URL}/products`;
    const Discounturl = `${process.env.REACT_APP_BASE_URL}/promotion`;
    const storeid = sessionStorage.getItem("storeid")

    useEffect(() => {
        getProducts();
        getData();
    }, []);

    const getProducts = async () => {
        const datas = await axios.get(url);
        setProducts(datas.data);
    };
    const getData = async () => {
        const product = await axios.get(url);
        setdata(product.data);
    };


    const handleChange = (e) => {

        setProductId(e.target.value)

    }

    const UpdateProduct = (e) => {
        setDiscount(e.discount)
        setpromocode(e.promo_code)
        setProductId(e.id)
    }

    const productsdata = {
        promo_code: promocode,
        discount: discount
    }

    const AddProducts = () => {
        axios.put(`${Discounturl}/${productId}`, productsdata).then((res) => {
            console.log(res)
            alert("Promo Code Added")
            getData()
            toast.success("Promo code Added", {
                theme: 'dark'
            });
        }).catch((err) => {
            console.log(err)
            alert(err)
        })
    }

    const DeleteProduct = (e) => {
        axios.delete(`${Discounturl}/${e}`).then((res) => {
            alert(res)
            getData();
        }
        ).catch((err) => {
            alert(err)
        })
    }

    return (
        <>


            <ProductPromotionStyle>
                <h2>Add Product for Promotion</h2>
                <hr className='my-5'></hr>
                <article className="input-layout">
                    <h3>Select Product:</h3>
                    <select
                        className="custom-input"
                        onChange={handleChange}
                        value={productId}
                    >
                        {
                            products.map((products, index) => {
                                return (
                                    <option key={index} value={products.id}
                                    >{products?.product_name}</option>
                                )
                            })
                        }


                    </select>
                </article>
                <article className="input-layout">
                    <h3>Promotion Code:</h3>
                    <input className="custom-input" type="text"
                        onChange={(e) => setpromocode(e.target.value)} value={promocode} ></input>
                </article>
                <article className="input-layout">
                    <h3>Discounted Amount:</h3>
                    <input className="custom-input" type="number"
                        onChange={(e) => setDiscount(e.target.value)} placeholder="100 %" min="0" max="100" value={discount}></input>
                </article>
                <article className="addbtn" >
                    <button className='btn' onClick={() => AddProducts()}>Add Product</button>
                </article>
                <SubCatagoriesStyle>
                    <article className='tableoverflow'>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Promo Code</th>
                                    <th scope="col">Discount Value</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data &&
                                    data.filter(data => data.discount > 1).map((data, index) => {
                                        let amount = data.discount;
                                        amount = amount.toString().slice(1);
                                        return (
                                            <tr key={index}>
                                                <td data-label="No">{index + 1}</td>
                                                <td data-label="Product Name">{data.product_name}</td>
                                                <td data-label="Promo Code">{data.promo_code}</td>
                                                <td data-label="Discount Value">{amount} %</td>

                                                <td data-label="Action">
                                                    <article className="action-buttons-wrapper">
                                                        <button className="action-button"
                                                            onClick={() =>
                                                                UpdateProduct(data)
                                                            }
                                                        >
                                                            <EditIcon />
                                                        </button>
                                                        <button
                                                            className="action-button"
                                                            onClick={() =>
                                                                DeleteProduct(data.id)
                                                            }
                                                        >
                                                            <DeleteIcon />
                                                        </button>
                                                    </article>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </article>
                </SubCatagoriesStyle>


            </ProductPromotionStyle>
        </>
    )
}

export default ProductPromtion;