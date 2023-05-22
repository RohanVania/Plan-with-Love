import React from 'react'
import Card from './Card'

function Tours({ tours, removeTour }) {
    return (
        <div className='container'>

            <div className='heading'>
                <h1 className='title'>Plan with Love</h1>
            </div>

            <div className='cards-main-container'>
                <div className='cards'>
                    {
                        tours.map((tour) => {
                            return <Card tour={tour} removeTour={removeTour}></Card>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Tours