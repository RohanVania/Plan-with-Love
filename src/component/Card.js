import React, { useState } from 'react'

function Card({ tour, removeTour }) {
    const { id, image, info, price, name } = tour;
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 196)} ... `;

    function toogleReadMore() {
        setReadmore(!readmore);
    }

    return (
        <div className='card'>
            <img src={image} alt={name} className='image' />

            <div className='tour-info'>
                <div className='tour-details'>
                    <h4 className='tour-price'>₹ {price}</h4>
                    <h4 className='tour-heading'>{name}</h4>
                </div>

                <div className='description'>
                    {description}
                    <span className='read-more' onClick={toogleReadMore} >{readmore ? `Show less` : `Read more`}</span>
                </div>

            </div>

            <button className='btn-red' onClick={() => {
                removeTour(id)
            }}>
                Not Interested
            </button>


        </div>
    )
}

export default Card