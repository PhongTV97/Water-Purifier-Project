import React from 'react'
import Products from './Products'
import Slider from './Slider'

export default function BodyWrapper() {
    return (
        <div className='w-75 pl-3'>
            <Slider />
            <Products />
        </div>
    )
}
