import React from 'react';

import '../css/index.css';

const ProductComponent = (props) => {
    const productsList = props.products.map(({picture, id, name}) => {
        return (
            <div className="column">
                <img alt="img" src={picture} key={id} />
                <h3>{name}</h3>
                <button>Zobacz menu</button>
            </div>
        );
    });

    return (
        <div className="ui equal width grid">
            {productsList}
        </div>
    );
}

export default ProductComponent;