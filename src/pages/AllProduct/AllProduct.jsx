import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { LiveCardStyle, PostFooterStyle } from "../../components/Card/Card.style";
import { CommentIcon, LikeIcon, ShareIcon } from "../../svgs";
import { Link } from "react-router-dom";
import { AllProductStyle } from './AllProduct.Style'
import { NavgationCarousalStyle } from "../../components/Carousal/Carousal";

function AllProduct() {
    let [product, setProduct] = useState([]);
    let [filterproduct, setfilterProduct] = useState([]);
    const [categorydata, setcategorydata] = useState([])
    const url = `${process.env.REACT_APP_BASE_URL}/posts/discovery/data`
    const categoryurl = `${process.env.REACT_APP_BASE_URL}/categories`

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };


    useEffect(() => {
        getProduct()
        getcategory();
    }, [])

    const getcategory = async () => {
        await axios.get(categoryurl).then((res) => {
            setcategorydata(res.data.data)
        }).catch((err) => {
            alert(err)
        })
    }
    const getProduct = async () => {
        await axios.get(url).then((res) => {
            setProduct(res.data)
        }).catch((err) => {
            alert(err)
        })
    }

    const filterproducts = (e) => {
        product = product.filter(data => data.primary_category_id == e)
        setfilterProduct(product)
    }

    // console.log(filterproduct)


    return (
        <AllProductStyle>
            <NavgationCarousalStyle>
                <Carousel responsive={responsive} centerMode="true">
                    {categorydata &&
                        categorydata.map((categorydata, index) => {
                            const { category_name, primary_category_image, category_id } = categorydata;

                            return (
                                <a key={index} className="carouselItem"
                                    onClick={() => filterproducts(category_id)}>
                                    <span className="tab-image">
                                        <img className="image" src={primary_category_image} alt="category" />
                                    </span>
                                    <p className="text">{category_name}</p>
                                </a>
                            );
                        })}
                </Carousel>
            </NavgationCarousalStyle>
            <article className="discover-prducts-wrapper">

                {
                    filterproduct.length > 0 ?
                        (<>

                            {filterproduct &&
                                filterproduct.map((filterproduct, index) => {
                                    const { post_image, store_id, product_name, product_id } = filterproduct;
                                    const id = product_id
                                    return (
                                        <LiveCardStyle>

                                            <Link to={
                                                {
                                                    pathname: `/show-case/${product_name}`,
                                                    state: id
                                                }
                                            } className="buynow-btn">
                                                buy Now
                                            </Link>


                                            <picture className="image-thumbnail" key={index}>
                                                <img src={post_image} alt="image" className="thumbnail" />
                                            </picture>
                                            <PostFooterStyle>
                                                <article className="post-buttons-wrapper">
                                                    <button className="post-button">
                                                        <span className="icon">
                                                            <LikeIcon />
                                                        </span>
                                                        5
                                                    </button>
                                                    <button className="post-button">
                                                        <span className="icon">
                                                            <CommentIcon />
                                                        </span>
                                                        4
                                                    </button>
                                                    <button className="post-button">
                                                        <span className="icon">
                                                            <ShareIcon />
                                                        </span>
                                                        12
                                                    </button>
                                                </article>
                                                {/* <article className="comment-box-wrapper">
                          <input
                            type="text"
                            className="comment-input-box"
                            placeholder="Write your comment..."
                          />
                          <button className="send-button">
                            <SendButtonIcon />
                          </button>
                        </article> */}
                                            </PostFooterStyle>


                                            {/* <CardDetails {...props} /> */}
                                        </LiveCardStyle>
                                    )
                                })}

                        </>
                        ) : (
                            <>
                                {product.map((product, index) => {
                                    const { post_image, store_id, product_name, product_id } = product;
                                    const id = product_id
                                    return (
                                        <LiveCardStyle>

                                            <Link to={
                                                {
                                                    pathname: `/show-case/${product_name}`,
                                                    state: id
                                                }
                                            } className="buynow-btn">
                                                buy Now
                                            </Link>


                                            <picture className="image-thumbnail" key={index}>
                                                <img src={post_image} alt="image" className="thumbnail" />
                                            </picture>
                                            <PostFooterStyle>
                                                <article className="post-buttons-wrapper">
                                                    <button className="post-button">
                                                        <span className="icon">
                                                            <LikeIcon />
                                                        </span>
                                                        5
                                                    </button>
                                                    <button className="post-button">
                                                        <span className="icon">
                                                            <CommentIcon />
                                                        </span>
                                                        4
                                                    </button>
                                                    <button className="post-button">
                                                        <span className="icon">
                                                            <ShareIcon />
                                                        </span>
                                                        12
                                                    </button>
                                                </article>
                                                {/* <article className="comment-box-wrapper">
                          <input
                            type="text"
                            className="comment-input-box"
                            placeholder="Write your comment..."
                          />
                          <button className="send-button">
                            <SendButtonIcon />
                          </button>
                        </article> */}
                                            </PostFooterStyle>


                                            {/* <CardDetails {...props} /> */}
                                        </LiveCardStyle>
                                    )
                                })}
                            </>)

                }


            </article>
        </AllProductStyle>
    )
}

export default AllProduct;