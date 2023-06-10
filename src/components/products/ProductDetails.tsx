import { Link, useParams } from "react-router-dom";
import { useDeleteProduct, useFetchProduct } from "../../hooks/products/productHooks";
import { ApiStatus } from "../../ApiStatus";
import { currencyFormatter } from "../../config";

const ProductDetail = () => {
    const {id} = useParams();
    if(!id) throw Error("Product Id required");
    
    const {data, status, isSuccess } = useFetchProduct(id);

    const deleteProductMutation = useDeleteProduct()

    if(!isSuccess)return <ApiStatus status={status}></ApiStatus>
    if(!data) return <div>Product not found!</div>

    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img className="img-fluid" src={data.picture.base64String} alt="Product Image"/>
                </div>
            </div>
            <div className="col-6">
                <div className="row mt-2">
                    <h5 className="col-12">{data.name}</h5>
                </div>
                <div className="row">
                    <h3 className="col-12">{data.description}</h3>
                </div>
                <div className="row mt-2">
                    <h2 className="col-12">{currencyFormatter.format(data.price)}</h2>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <Link className="btn btn-primary w-100" to={`/products/edit/${data.id}`}>Edit</Link>
                </div>
                <div className="col-6">
                    <Link className="btn btn-primary w-100"
                    onClick={() => { 
                        if (window.confirm("Do you want to delete?")) deleteProductMutation.mutate(data); } 
                        } to={""}>Delete</Link>
                </div>
            </div>
        </div>
    );
}
export default ProductDetail;