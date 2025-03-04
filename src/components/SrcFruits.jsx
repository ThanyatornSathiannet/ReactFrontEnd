// App.jsx work with all components

import { useState } from "react";
import FilterableProductTable from "./components/FilterableProductTable";

export default function App() {
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
  ];

  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInstockOnly] = useState(false);

  return (
    <FilterableProductTable
      products={products}
      filterData={filterText}
      filterAction={setFilterText}
      inStockOnlyData={inStockOnly}
      inStockOnlyAction={setInstockOnly}
    />
  );
}