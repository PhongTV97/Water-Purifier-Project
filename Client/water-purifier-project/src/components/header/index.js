import React from 'react';
import { IoMailOpenOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { FiFacebook } from "react-icons/fi";
import Search from './Search';

function Header() {
    return (
        <header id="header" className=''>
            <div className="bg-dark text-white align-items-center justify-content-center">
                <div className="d-flex container">
                    <div className="d-flex align-items-center mr-4"><IoMailOpenOutline size={20} /><span className='pl-1'>sieuthimayvn.vn@gmail.com</span></div>
                    <div className="d-flex align-items-center mr-4"><BiPhone size={20} /><span className='pl-1'>096.964.1188</span> </div>
                    <div className="d-flex align-items-center mr-4"><FiFacebook size={20} /><span className='pl-1'>fb.com/karofihanoi</span> </div>
                </div>
            </div>
            <div className="bg-light align-items-center justify-content-center">
                <div className="d-flex container">
                    aaaaaaaa
                </div>
            </div>
            <div className="bg-primary text-white align-items-center justify-content-center">
                <div className="d-flex container navbar-height align-items-center">
                    <div className='text-uppercase w-25'>Danh mục sản phẩm</div>
                    <div className='text-uppercase px-3'>Trang chủ</div>
                    <div className='text-uppercase px-3'>DỊCH VỤ THAY LÕI LỌC</div>
                    <div className='text-uppercase px-3'>DT để có giá tốt nhất</div>
                    <div className='text-uppercase px-3'>Liên hệ</div>
                </div>
            </div>
        </header>
    );
}

export default Header;