import axios from "axios";
import React, { useEffect, useState } from "react";
import { CatagoriesStyle } from "./Catagroies.style";


function Catagories() {

  const [catagories, setCatagories] = useState([]);

  const url = `${process.env.REACT_APP_BASE_URL}/categories`;

  useEffect(() => {
    getCatagories();
  }, []);

  const getCatagories = async () => {
    await axios.get(url).then((res) => {
      setCatagories(res.data.data);
    });
  };




  return (
    <CatagoriesStyle>
      <article className="header">
        <h2 className="order-title">Category</h2>
      </article>
      <hr className='mb-5'></hr>
      <article className='category_wrapper'>
        {
          catagories.map((catagory, index) => {
            return (
              <article className='category_box' key={index}>
                <h3>{catagory?.category_name}</h3>
              </article>
            )
          })
        }
      </article>



    </CatagoriesStyle>
  );
}

export default Catagories;
