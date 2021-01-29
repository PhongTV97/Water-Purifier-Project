import React from 'react'

export default function Product({img, desc, old_price, new_price}) {
    return (
        <div className="card col-3" style={{ height: 300, }}>
            <img className="card-img-top" src={img} alt="Card image cap" />
            <p className="card-text text-p">{desc}</p>
            <div className="d-flex">
                <p className='mr-3 text-p'><del>{old_price} đ</del></p>
                <p className='font-weight-bold text-p text-success'>{new_price} đ</p>
            </div>
        </div>
    )
}
