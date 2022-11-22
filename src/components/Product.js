import React from "react";
import ItemDescription from "./ItemDescription";

function Product({ names, name }) {
  return (
    <div>
      {name.map((item) => {
        return (
          <>
            <h2>{item.firstName}1</h2>
            <h2>{item.lastName}2</h2>
            <h2>{item.username}33</h2>
            <ItemDescription me={item} />
          </>
        );
      })}
      {/* <h1>{names}</h1>
        <h1>{name[0].firstName}</h1> */}
      {/* <h1>{props.name.firstName}</h1> */}
    </div>
  );
}

export default Product;
