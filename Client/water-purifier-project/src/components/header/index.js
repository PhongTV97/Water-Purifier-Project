import React from 'react';
import { IoMailOpenOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { FiFacebook } from "react-icons/fi";
import Search from './Search';

function Header() {
    return (
        <header id="header" class="header has-sticky sticky-jump">
            <div class="header-wrapper">
                <div id="top-bar" class="header-top hide-for-sticky nav-dark">
                    <div class="d-flex container justify-content-between">
                        <div class="flex-col hide-for-medium flex-left">
                            <ul class="nav nav-left medium-nav-center nav-small nav-divided">
                                <li class="html custom html_topbar_left">
                                    <div class="container d-flex">
                                        <div class="top_header_left"><IoMailOpenOutline /> sieuthimayvn.vn@gmail.com</div>
                                        <div class="top_header_middle"><BiPhone /> 096.964.1188</div>
                                        <div class="top_header_right"><FiFacebook /> fb.com/karofihanoi</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <div class="flex-col hide-for-medium flex-center">
                            <ul class="nav nav-center nav-small nav-divided"></ul>
                        </div> */}
                        <div class="flex-col hide-for-medium flex-right">
                            <ul class="nav top-bar-nav nav-right nav-small nav-divided">
                                <li class="html custom html_topbar_right font-weight-bold">Bảo hành toàn quốc: 18006563</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="masthead" class="header-main hide-for-sticky">
                    <div class="header-inner flex-row container logo-left medium-logo-center" role="navigation">
                        <div id="logo" class="flex-col logo">
                            <a href="https://karofihanoi.com/" title="Phân phối máy lọc nước Karofi" rel="home">
                                <img width="334" height="137" src="/images/uploads/2019/10/phan-phoi-uy-quyen-karofi-chinh-hang.png.webp" class="header_logo header-logo" alt="Phân phối máy lọc nước Karofi" data-lazy-src="https://karofihanoi.com/wp-content/uploads/2019/10/phan-phoi-uy-quyen-karofi-chinh-hang.png.webp" /><noscript>
                                <img width="334" height="137" src="https://karofihanoi.com/wp-content/uploads/2019/10/phan-phoi-uy-quyen-karofi-chinh-hang.png.webp" class="header_logo header-logo" alt="Phân phối máy lọc nước Karofi" /></noscript>
                                <img width="334" height="137" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20334%20137'%3E%3C/svg%3E" class="header-logo-dark" alt="Phân phối máy lọc nước Karofi" data-lazy-src="https://karofihanoi.com/wp-content/uploads/2019/10/phan-phoi-uy-quyen-karofi-chinh-hang.png.webp" /><noscript>
                                <img width="334" height="137" src="https://karofihanoi.com/wp-content/uploads/2019/10/phan-phoi-uy-quyen-karofi-chinh-hang.png.webp" class="header-logo-dark" alt="Phân phối máy lọc nước Karofi" /></noscript>
                            </a>
                        </div>
                        <div
                            class="flex-col show-for-medium flex-left">
                            <ul class="mobile-nav nav nav-left ">
                                <li class="nav-icon has-icon"> <i class="icon-menu" ></i></li>
                            </ul>
                        </div>
                        <Search />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;