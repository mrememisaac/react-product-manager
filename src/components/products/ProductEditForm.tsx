import { useParams } from "react-router-dom"
import { useFetchProduct, useUpdateProduct } from "../../hooks/products/productHooks";
import { ApiStatus } from "../../ApiStatus";
import { ProductForm } from "./ProductForm";

export const ProductEditForm = () => {
    const { id } = useParams();
    if(!id) throw Error("Product ID required")

    const { data, status, isSuccess } = useFetchProduct(id);
    const updateProductMutation = useUpdateProduct();

    if(!isSuccess) return <ApiStatus status={status}/>

    return(
        <ProductForm 
            product={data}
            submitted={(product) => updateProductMutation.mutate(product)}
        />
    );
}