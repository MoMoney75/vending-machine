import React from 'react'
import './snacks.css'
function Snacks(props){

    return(
        <div className='items'>
            <h2>{props.item} </h2>
            <h4>price:{props.price} </h4>
        </div>
    )
}

export default Snacks