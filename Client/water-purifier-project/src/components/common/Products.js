import React from 'react'
import Product from './Product'

export default function Products() {
    return (
        <div className='px-3'>
            <div className="d-flex row justify-content-between mt-3">
                <div className='text-uppercase'>Sản phẩm mới</div>
                <div className=''>Xem thêm</div>
            </div>
            <div className='mt-3'>
                <div className="row">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    )
}
