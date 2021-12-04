import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div>
                
        <aside class="slide-bar">
            <div class="close-mobile-menu">
                <a href="javascript:void(0);"><i class="ti-close"></i></a>
            </div>
            
            <div class="sidebar-info">
                <div class="sidebar-logo mb-30">
                    <a href="index.html">
                        <img src="assets\img\logo\logo.png" alt="logo"/>
                    </a>
                </div>
                <div class="sidebar-content mb-45">
                    <h4 class="s-title">About us</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  nisi ut aliquip ex ea commodo consequat.</p>
                    <a class="thm_btn" href="contact.html">Contact us<i class="fal fa-long-arrow-right"></i></a>
                </div>
                <div class="s_contact-list mb-30">
                    <h4 class="s-title">Get In Touch</h4>
                    <div class="footer_widget pt-20">
                        <ul>
                            <li>
                                <p>786/A Romada tower mall Brooklyn, NYC</p>
                            </li>
                            <li>
                                <p>+987 876 765765 65</p>
                                <p>(987)787 876876 87</p>
                            </li>
                            <li>
                                <p>info@webmail.com</p>
                                <p>jobsinfo@webmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="social_icon mt-20">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-behance"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>


            <nav class="side-mobile-menu">
                <div class="header-mobile-search">
                    <form role="search" method="get" action="#"> 
                        <input type="text" placeholder="Search Keywords"/> 
                        <button type="submit"><i class="ti-search"></i></button>
                    </form>
                </div>
                <ul id="mobile-menu-active">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li class="dropdown"><a href="#">Pages</a>
                        <ul class="sub-menu">
                            <li class="dropdown">
                                <a href="#">Shop</a>
                                <ul class="submenu">
                                    <li><a href="shop.html">Shop List</a></li>
                                    <li><a href="shop-details.html">Shop Details</a></li>
                                    <li><a href="cart.html">Shop Cart</a></li>
                                    <li><a href="checkout.html">Shop Checkout</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#">Team</a>
                                <ul class="submenu">
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="team-details.html">Team Details</a></li>
                                </ul>
                            </li>
                            <li><a href="pricing.html">Pricing</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="account.html">Account</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#">Courses</a>
                        <ul class="sub-menu">
                            <li><a href="courses.html">Courses</a></li>
                            <li><a href="course-details.html">Course Details</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#">Blog</a>
                        <ul class="sub-menu">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </aside>
        <div class="body-overlay"></div>

        <main>
            <section class="page_title_area" data-overlay="6" data-background="assets/img/bg/page_title_bg.jpg">
                <div class="containe">
                    <div class="row">
                        <div class="col-l2">
                            <div class="page_title text-center">
                                <h2>Shopping Cart</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li class="breadcrumb-item active" aria-current="page">Cart</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="cart_area pt-120 pb-120">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="cart_table table-responsive">
                                <table class="table">
                                    <thead class="text-uppercase">
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="carttable_product_item">
                                                    <div class="item_image">
                                                        <img src="assets\img\shop\cart\img_01.png" alt="image_not_found"/>
                                                    </div>
                                                    <button type="button" class="remove_btn"><i class="fal fa-times"></i></button>
                                                    <h3 class="item_title">Americano coffee beans</h3>
                                                </div>
                                            </td>
                                            <td><span class="price_text1">$19,00</span></td>
                                            <td>
                                                <div class="quantity_input">
                                                    <form action="#">
                                                        <button type="button" class="input_number_decrement">–</button>
                                                        <input class="input_number" type="text" value="2"/>
                                                        <button type="button" class="input_number_increment">+</button>
                                                    </form>
                                                </div>
                                            </td>
                                            <td><span class="price_text2">$19,00</span></td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div class="carttable_product_item">
                                                    <div class="item_image">
                                                        <img src="assets\img\shop\cart\img_02.png" alt="image_not_found"/>
                                                    </div>
                                                    <button type="button" class="remove_btn"><i class="fal fa-times"></i></button>
                                                    <h3 class="item_title">Americano coffee beans</h3>
                                                </div>
                                            </td>
                                            <td><span class="price_text1">$19,00</span></td>
                                            <td>
                                                <div class="quantity_input">
                                                    <form action="#">
                                                        <button type="button" class="input_number_decrement">–</button>
                                                        <input class="input_number" type="text" value="2"/>
                                                        <button type="button" class="input_number_increment">+</button>
                                                    </form>
                                                </div>
                                            </td>
                                            <td><span class="price_text2">$19,00</span></td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div class="carttable_product_item">
                                                    <div class="item_image">
                                                        <img src="assets\img\shop\cart\img_03.png" alt="image_not_found"/>
                                                    </div>
                                                    <button type="button" class="remove_btn"><i class="fal fa-times"></i></button>
                                                    <h3 class="item_title">Americano coffee beans</h3>
                                                </div>
                                            </td>
                                            <td><span class="price_text1">$19,00</span></td>
                                            <td>
                                                <div class="quantity_input">
                                                    <form action="#">
                                                        <button type="button" class="input_number_decrement">–</button>
                                                        <input class="input_number" type="text" value="2"/>
                                                        <button type="button" class="input_number_increment">+</button>
                                                    </form>
                                                </div>
                                            </td>
                                            <td><span class="price_text2">$19,00</span></td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div class="carttable_product_item">
                                                    <div class="item_image">
                                                        <img src="assets\img\shop\cart\img_04.png" alt="image_not_found"/>
                                                    </div>
                                                    <button type="button" class="remove_btn"><i class="fal fa-times"></i></button>
                                                    <h3 class="item_title">Americano coffee beans</h3>
                                                </div>
                                            </td>
                                            <td><span class="price_text1">$19,00</span></td>
                                            <td>
                                                <div class="quantity_input">
                                                    <form action="#">
                                                        <button type="button" class="input_number_decrement">–</button>
                                                        <input class="input_number" type="text" value="2"/>
                                                        <button type="button" class="input_number_increment">+</button>
                                                    </form>
                                                </div>
                                            </td>
                                            <td><span class="price_text2">$19,00</span></td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div class="carttable_product_item">
                                                    <div class="item_image">
                                                        <img src="assets\img\shop\cart\img_05.png" alt="image_not_found"/>
                                                    </div>
                                                    <button type="button" class="remove_btn"><i class="fal fa-times"></i></button>
                                                    <h3 class="item_title">Americano coffee beans</h3>
                                                </div>
                                            </td>
                                            <td><span class="price_text1">$19,00</span></td>
                                            <td>
                                                <div class="quantity_input">
                                                    <form action="#">
                                                        <button type="button" class="input_number_decrement">–</button>
                                                        <input class="input_number" type="text" value="2"/>
                                                        <button type="button" class="input_number_increment">+</button>
                                                    </form>
                                                </div>
                                            </td>
                                            <td><span class="price_text2">$19,00</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-20">
                        <div class="col-lg-6">
                            <div class="coupon_left mb-20">
                                <form action="#">
                                    <input type="text" placeholder="Coupon code"/>
                                    <button class="thm_btn thm_btn-black">Apply coupon</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="update_cart text-lg-end">
                                <a class="thm_btn thm_btn-black" href="#">CLEAR SHOPPING CART</a>
                                <a class="thm_btn thm_btn-black" href="#">Update Cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="row pt-60">
                        <div class="col-xl-5 offset-xl-7 col-lg-8 offset-lg-4">
                            <div class="cart_tutal_wrap">
                                <h3 class="title">CART TOTALS</h3>
                                <ul>
                                    <li>Subtotal <span>$70</span></li>
                                    <li>total <span>$70</span></li>
                                </ul>
                                <div class="text-right">
                                    <a class="thm_btn thm_btn-black" href="checkout.html">CONTINUS SHOPPING<i class="fal fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="bai_area bai_bootom_space">
                <div class="container">
                    <div class="row g-0">
                        <div class="col-lg-6">
                            <div class="bai_wrap bai_left theme_bg">
                                <span># Become A Instructor</span>
                                <h3>Become a Instructor</h3>
                                <a class="thm_btn thm_btn-border" href="contact.html">apply now<i class="fal fa-long-arrow-right"></i></a>
                                <div class="bai_shape">
                                    <img src="assets\img\icon\bai_shape_01.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="bai_wrap bai_right white_bg">
                                <span># Become A Partner</span>
                                <h3>Become a Partner</h3>
                                <a class="thm_btn thm_btn-2" href="contact.html">Contact us<i class="fal fa-long-arrow-right"></i></a>
                                <div class="bai_shape">
                                    <img src="assets\img\icon\bai_shape_02.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
            </div>
        )
    }
}