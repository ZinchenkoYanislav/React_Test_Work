import { Box, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { filterProduct } from "../store/actions/products";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState("");
  const products = useSelector((state) => state.products);
  function onSubmitHandler(e) {
    e.preventDefault();
    dispatch(filterProduct(filterText));
    console.log(filterText);
  }

  function onChangeHandler(e) {
    setFilterText(e.target.value);
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={onChangeHandler}
          type="text"
          value={filterText}
        ></input>
        <button type="submit">search</button>
      </form>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {products.map((item) => {
            return <ProductItem key={item.id} item={item} />;
          })}
        </Grid>
      </Box>
    </div>
  );
}
