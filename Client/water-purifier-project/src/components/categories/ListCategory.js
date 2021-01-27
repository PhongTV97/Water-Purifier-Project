import React, { useState } from 'react'
import Category from './Category'

export default function ListCategory() {
    const list = ["SẢN PHẨM MỚI", "MÁY LỌC NƯỚC TIÊU CHUẨN", "Máy lọc Karofi tiêu chuẩn không tủ", "Máy lọc Karofi tiêu chuẩn tủ IQ", "MÁY LỌC THÔNG MINH", "Máy lọc Karofi thông minh iRO 1.1 không tủ", "Máy lọc Karofi thông minh iRO 1.1 tủ IQ", "MÁY LỌC NƯỚC OPTIMUS", "MÁY LỌC UNDER SINK - TOPBOX", "CÂY NƯỚC NÓNG LẠNH", "Cây nước nóng lạnh hút bình", "Cây nước nóng lạnh tích hợp RO", "Cây nước nóng lạnh úp bình", "MÁY LỌC NƯỚC RO CÔNG NGHIỆP", "Hệ thống lọc RO công nghiệp", "Máy lọc nước RO văn phòng", "LINH KIỆN MÁY LỌC NƯỚC", "Linh kiện máy lọc nước", "Lõi lọc - Màng lọc", "Bộ lọc thô đầu nguồn", "QUẠT CÂY - QUẠT ĐIỀU HÒA", "MÁY LỌC KHÔNG KHÍ"]
    
    return (
        <div className='w-25'>
            {list.map((item, index) => (
                <Category key={index} text={item} />
            ))}
        </div>
    )
}
