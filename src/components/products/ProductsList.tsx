import { useNavigate } from "react-router-dom";
import { ApiStatus } from "../../ApiStatus";
import { currencyFormatter} from "../../config";
import { useFetchProducts } from "../../hooks/products/productHooks";
import { Product } from "../../types/Product";
import { Link } from "react-router-dom";

const ProductsList = () => {
    const nav = useNavigate();
    const { data, status, isSuccess}  = useFetchProducts();
    const products = data;

    if(!isSuccess)
    {
        return <ApiStatus status={status}></ApiStatus>
    }
    return (
      <div>
        <div className="row mb-2">
            <h5>Products</h5>
        </div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map((product:Product) => (
                        <tr key={product.id} onClick={() => nav(`/products/${product.id}`)}>
                            <td>{product.picture.base64String}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{currencyFormatter.format(product.price)}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <div className="row mt-2">
            <Link className="btn btn-primary" to="/products/add">Add</Link>
        </div>
      </div>  

    );
}

export default ProductsList;