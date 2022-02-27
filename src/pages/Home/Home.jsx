import React from "react";
import { discoverItems } from "../../mockData/discoverData";
import Card from "../../components/Card/Card";

import { HomeStyle } from "./Home.style";

function Home() {
  return (
    <HomeStyle>
      <article className="discover-prducts-wrapper">
        {discoverItems.map((discoverItem, index) => {
          return <Card key={index} cardType="liveCard" {...discoverItem} />;
        })}
      </article>
    </HomeStyle>
  );
}

export default Home;
