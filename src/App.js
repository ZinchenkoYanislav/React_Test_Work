import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductsComponent from "./components/ProductsComponent";
import { fetchProducts } from "./store/actions/products";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return <ProductsComponent />;
}
