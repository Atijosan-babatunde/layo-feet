import React from 'react';
import {Link} from 'react-router-dom';
import { BaseContainer } from '../web/layouts/Containers';
import banner2 from '../img/banner2.jpg';



export function Body(){
    return(
        <BaseContainer>
             <div class="page-header text-center" style={{ backgroundImage: `url(${banner2})` }}>
        		<div class="container">
        			<h1 class="page-title" style={{color:'white'}}>Shop Layor's Feet <span  style={{color:'white'}}>Our Products</span></h1>
        		</div>
        	</div>
            <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Shop</li>
                    </ol>
                </div>
            </nav>

                 
           
                <div class="container">
        		
                    <div class="products">
                        <div class="row">
                                                     			
                        			                            <div class="col-6 col-md-4 col-lg-4 col-xl-3">
                                <div class="product">
                                    <figure class="product-media">
                                                                                <Link to="product53e5.html?ID=5">
                                            <img src="images/products/ICE_1100%20(2).jpg" alt="Product" class="product-image"/>
                                        </Link>

                                        <div class="product-action action-icon-top">
                                            <Link to="product53e5.html?ID=5" class="btn-product btn-cart"><span>add to cart</span></Link>
                                           
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                      
                                        <h2 class="product-title"><Link to="product53e5.html?ID=5">Shoe</Link></h2>
                                        <div class="product-price">
                                            ???15,000                                        </div>
                                       
                                       
                                    </div>
                                </div>
                            </div>
                            
                                                         <div class="col-6 col-md-4 col-lg-4 col-xl-3">
                                <div class="product">
                                    <figure class="product-media">
                                                                                <Link to="productdfb4.html?ID=1">
                                            <img src="images/products/ICE_1056%20(2).jpg" alt="Product" class="product-image"/>
                                        </Link>

                                        <div class="product-action action-icon-top">
                                            <Link to="productdfb4.html?ID=1" class="btn-product btn-cart"><span>add to cart</span></Link>
                                           
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                      
                                        <h2 class="product-title"><Link to="productdfb4.html?ID=1">Shoe</Link></h2>
                                        <div class="product-price">
                                            ???15,000                                        </div>
                                       
                                       
                                    </div>
                                </div>
                            </div>
                            
                                                         
                         </div>

                        </div>

                  </div>
                  
                







            
                  <div class="container">
            <div class="heading heading-center mb-3">
                <h2 class="title">Product Categories</h2>
            </div>


            <div class="owl-carousel owl-simple" data-toggle="owl"
                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":1
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true,
                                            "dots": false
                                        }
                                    }
                                }'>
                <div class="banner banner-cat">
                    <Link to="/shoes">
                        <img src="images/tsh.jpg" alt="Layor's Feet Shoes" />
                    </Link>

                    <div class="banner-content banner-content-static text-center">
                        <h3 class="banner-title">Shoes</h3>
                        <h4 class="banner-subtitle">2 Products</h4>
                        <Link to="/shop" class="banner-link">Shop Now</Link>
                    </div>
                </div>

                <div class="banner banner-cat">
                    <Link to="/heels">
                        <img src="images/pants.jpg" alt="FF Pants" />
                    </Link>

                    <div class="banner-content banner-content-static text-center">
                        <h3 class="banner-title">Heels</h3>
                        <h4 class="banner-subtitle">1 Products</h4>
                        <Link to="/shop" class="banner-link">Shop Now</Link>
                    </div>
                </div>

                <div class="banner banner-cat">
                    <Link to="/slippers">
                        <img src="images/slv.jpg" alt="Family First Sleeves" />
                    </Link>

                    <div class="banner-content banner-content-static text-center">
                        <h3 class="banner-title">Slippers</h3>
                        <h4 class="banner-subtitle">3 Products</h4>
                        <Link to="/shop" class="banner-link">Shop Now</Link>
                    </div>
                </div>

                <div class="banner banner-cat">
                    <Link to="/sandals">
                        <img src="images/caps.jpg" alt="Family First Caps" />
                    </Link>

                    <div class="banner-content banner-content-static text-center">
                        <h3 class="banner-title">Sandals</h3>
                        <h4 class="banner-subtitle">4 Products</h4>
                        <Link to="/shop" class="banner-link">Shop Now</Link>
                    </div>
                </div>


            </div>



        </div>
 
        </BaseContainer>
    )
}