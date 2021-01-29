import React from 'react'
import Product from './Product'

export default function Products({ productsTitle, products }) {
    return (
        <div className='px-3 shadow-sm'>
            <div className="d-flex row justify-content-between mt-3 products-border ">
                <div className='text-uppercase products-title text-white p-2'>{productsTitle}</div>
                <div className='mr-1 d-flex align-items-center'>Xem thêm</div>
            </div>
            <div className='mt-3'>
                <div className="row">
                    {products.map(product => (
                        <Product {...product}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
