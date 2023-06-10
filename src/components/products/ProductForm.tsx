import { useState } from "react";
import { Product } from "../../types/Product";

type Args = {
    product: Product;
    submitted: (product: Product) => void;
}

export const ProductForm = ({product, submitted}: Args) => {
    const [productState, setProductState] = useState({...product})

    const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        submitted(productState);
    }

    return (
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={productState.name}
                    onChange={(e) => setProductState({...productState, name: e.target.value})}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    value={productState.description}
                    onChange={(e) => setProductState({...productState, description: e.target.value})}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input 
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={productState.price}
                    onChange={(e) => setProductState({...productState, price: parseInt(e.target.value)})}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input 
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={productState.price}
                    onChange={(e) => setProductState({...productState, price: parseInt(e.target.value)})}
                    />
            </div>
            <button 
                className="btn btn-primary mt-2"
                disabled={!productState.name || !productState.price}
                onClick={onSubmit}
            >
                Submit
            </button>
        </form>
    );
}

