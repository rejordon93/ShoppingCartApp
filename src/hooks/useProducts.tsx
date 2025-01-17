import { useContext } from "react";
import ProductsContext from "../context/ProductsProvider";
import { UseProductsContextType } from "../context/ProductsProvider";

export const useProducts = (): UseProductsContextType => {
  return useContext(ProductsContext);
};
