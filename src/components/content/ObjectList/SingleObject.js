import React from 'react'

function SingleObject(props) {
    const { title, price } = props;
    return (
        <div className="SingleObject-container">
            <p>{`Titel: ${title}`}</p>
            <p>{`Preis: ${price}`}</p>
        </div>
    )
}

export default SingleObject;
