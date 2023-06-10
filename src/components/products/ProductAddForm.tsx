import { useAddProduct } from "../../hooks/products/productHooks"
import { Product } from "../../types/Product";
import { Picture } from "../../types/Picture";
import { ProductForm } from "./ProductForm";

export const ProductAddForm = () => {
    const addProductMutation = useAddProduct();

    const pic: Picture = {
        id:"",
        base64String:"",
        productId:0,
    }

    const product: Product = {
        name:"",
        description:"",
        price:0,
        id:"",
        picture:pic
    }

    return (
        <ProductForm 
            product={product} 
            submitted={(product) => addProductMutation.mutate(product)}
        />
    );
}