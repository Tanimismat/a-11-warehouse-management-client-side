import React from 'react';
import { useNavigate } from 'react-router-dom';


const Item = (props) => {
    const { id, name, img, description, price, quantity, supplier } = props.item;
    const navigate = useNavigate()
    const handleManageInventory = (id) => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <div className="card-group">
                <div className="card">
                    <img src={img} style={{ width: '200px', height: '150px' }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{name}</h6>
                        <p className="card-text">{description}</p>
                        <p className="card-text">Price: ${price}</p>
                        <p className="card-text">Quantity: {quantity}</p>
                        <p className="card-text">Supplier: {supplier}</p>

                    </div>
                    <div className="card-footer">
                        <button onClick={() => handleManageInventory(id)}>Manage</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Item;