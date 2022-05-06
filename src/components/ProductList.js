import { Box, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const products = useSelector((state) => state.products);
  return (
    products && (
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {products.map((item) => {
            return <ProductItem key={item.id} item={item} />;
          })}
        </Grid>
      </Box>
    )
  );
}
