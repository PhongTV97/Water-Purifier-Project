import React from 'react'
import Products from './Products'
import Slider from './Slider'

export default function BodyWrapper() {
    const products1 = {
        product_title: 'Sản phẩm mới',
        products: [
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
        ]
    }
    const products2 = {
        product_title: 'Máy lọc nước tiêu chuẩn',
        products: [
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
        ]
    }
    const products3 = {
        product_title: 'Máy lọc THÔNG MINH',
        products: [
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
            { img: 'https://picsum.photos/190/190', desc: 'Máy lọc nước Karofi Slim S-S038 (8 cấp lọc Siêu nhỏ gọn)', old_price: '5,390,000', new_price: '4,550,000' },
        ]
    }
    const products = [products1, products2, products3]
    return (
        <div className='w-75 pl-4'>
            <Slider />
            {products.map(product => (
                <Products productsTitle={product.product_title} products={product.products}/>
            ))}
        </div>
    )
}
