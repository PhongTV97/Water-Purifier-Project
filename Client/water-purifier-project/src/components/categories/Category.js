import React from 'react'

export default function Category({ text }) {
    return (
        <div className='d-flex row'>
            <div className="col-2">icon</div>
            <div className="col-10">{text}</div>
        </div>
    )
}
