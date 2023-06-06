import React from 'react';

const ChefRecomCard = ({ item }) => {
    const { name, image, receipe } = item;
    return (
        <div className="card w-96 glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title">{name}</h2>
                <p>{receipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ChefRecomCard;