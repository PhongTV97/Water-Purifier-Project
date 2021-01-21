import React from 'react';
import { IoMailOpenOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";


function Header() {
    return (
        <header id="header" class="header has-sticky sticky-jump">
            <div class="header-wrapper">
                <div id="top-bar" class="header-top hide-for-sticky nav-dark">
                    <div class="flex-row container">
                        <div class="flex-col hide-for-medium flex-left">
                            <ul class="nav nav-left medium-nav-center nav-small nav-divided">
                                <li class="html custom html_topbar_left">
                                    <div class="container d-flex">
                                        <div class="top_header_left"><IoMailOpenOutline /> sieuthimayvn.vn@gmail.com</div>
                                        <div class="top_header_middle"><BiPhone /> 096.964.1188</div>
                                        <div class="top_header_right"><i class="fa fa-facebook-official" aria-hidden="true"></i> fb.com/karofihanoi</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;