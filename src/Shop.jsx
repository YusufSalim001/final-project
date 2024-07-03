import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Shop.css'
// import { LazyLoadImage } from 'react-lazy-load-image-component'
import MainLogo from "../../logos/Meubel.svg"
import Trophy from "../../logos/trophy.svg"
import Warrantee from "../../logos/warrantee.svg"
import Hand from "../../logos/hand.svg"
import Call from "../../logos/call.svg"
import Dasharrow from "../../logos/dasharrow.svg"
import Option from "../../logos/option.svg"
import Filter from "../../logos/filterlogo.svg"
import Filter3 from "../../logos/filter3.svg"
import Pagination from '../Pagination'




const Shop = () => {
  return (
    <div>
      <section className='contactsection1'>
        <img src={MainLogo} alt="" />
        <h1>Shop</h1>
        <div className='linkdivider'>
          <Link className='linkage' to="/">Home</Link>
          <div>
            <img src={Dasharrow} alt="" />
          </div>
          <Link className='linkage' to="/shop">Shop</Link>
        </div>
      </section>
      <section className='shopsection1'>
        <div className='shopicons'>
          <img className='pad' src={Filter} alt="" />
          <p className='pad'>Filter</p>
          <img className='pad' src={Option} alt="" />
          <img className='pad' src={Filter3} alt="" /> <hr />
          <p className='pad'>Showing 1–16 of 32 results</p>
        </div>
        <div className='shoppees'>
          <p className='pad'>Show<span className='span'>16</span></p>
          <p className='pad'>Sortby<span className='span'>Default</span></p>
        </div>
      </section>
      <section>
        <div id="container">
        </div>
      </section>

      <section className='shopgallery'>
        <div className='galleryimage'>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/nvcowkmuonk6ctt0w5m3' alt='syltherine' />
            <p className='img2name'>Syltherine</p>
            <p><span span className='span1'>Stylish cafe chair</span></p>
            <p className='img2price'>Rp 2.500.000 <span className='span2'>Rp 3.500.000</span></p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/nvcowkmuonk6ctt0w5m3' alt='syltherine' />
            <p className='img2name'>Syltherine</p>
            <p><span span className='span1'>Stylish cafe chair</span></p>
            <p className='img2price'>Rp 2.500.000 <span className='span2'>Rp 3.500.000</span></p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/nvcowkmuonk6ctt0w5m3' alt='syltherine' />
            <p className='img2name'>Syltherine</p>
            <p><span span className='span1'>Stylish cafe chair</span></p>
            <p className='img2price'>Rp 2.500.000 <span className='span2'>Rp 3.500.000</span></p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/nvcowkmuonk6ctt0w5m3' alt='syltherine' />
            <p className='img2name'>Syltherine</p>
            <p><span span className='span1'>Stylish cafe chair</span></p>
            <p className='img2price'>Rp 2.500.000 <span className='span2'>Rp 3.500.000</span></p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
        </div>
        <div className='galleryimage'>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/m7uchxi1v1co95qhqgiz' alt='laviosa' />
            <p className='img2name'>Laviosa</p>
            <p><span className='span1'>Stylish cafe chair</span></p>
            <p className='img2price'>Rp 2.500.000</p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/m7uchxi1v1co95qhqgiz' alt='laviosa' />
            <p className='img2name'>Laviosa</p>
            <p><span className='span1'>Stylish cafe chair</span></p>
            <p className='img2price'>Rp 2.500.000</p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/m7uchxi1v1co95qhqgiz' alt='laviosa' />
            <p className='img2name'>Laviosa</p>
            <p><span className='span1'>Stylish cafe chair</span></p>
            <p className='img2price'>Rp 2.500.000</p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/m7uchxi1v1co95qhqgiz' alt='laviosa' />
            <p className='img2name'>Laviosa</p>
            <p><span className='span1'>Stylish cafe chair</span></p>
            <p className='img2price'>Rp 2.500.000</p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
        </div>
        <div className='galleryimage'>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/k0wesohemosj2saw0zqh' alt='lolito' />
            <p className='img2name'>Lolito</p>
            <p><span className='span1'>Luxury big sofa</span></p>
            <p className='img2price'>Rp 7.000.000 <span span className='span2'>Rp 14.000.000</span></p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/k0wesohemosj2saw0zqh' alt='lolito' />
            <p className='img2name'>Lolito</p>
            <p><span className='span1'>Luxury big sofa</span></p>
            <p className='img2price'>Rp 7.000.000 <span span className='span2'>Rp 14.000.000</span></p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/k0wesohemosj2saw0zqh' alt='lolito' />
            <p className='img2name'>Lolito</p>
            <p><span className='span1'>Luxury big sofa</span></p>
            <p className='img2price'>Rp 7.000.000 <span span className='span2'>Rp 14.000.000</span></p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/k0wesohemosj2saw0zqh' alt='lolito' />
            <p className='img2name'>Lolito</p>
            <p><span className='span1'>Luxury big sofa</span></p>
            <p className='img2price'>Rp 7.000.000 <span span className='span2'>Rp 14.000.000</span></p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
        </div>
        <div className='galleryimage'>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/qqv1jryzhlkeuwjsmcfd' alt='respira' />
            <p className='img2name'>Respira</p>
            <p><span className='span1'>Outdoor bar table and stool</span></p>
            <p className='img2price'>Rp 500.000</p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/qqv1jryzhlkeuwjsmcfd' alt='respira' />
            <p className='img2name'>Respira</p>
            <p><span className='span1'>Outdoor bar table and stool</span></p>
            <p className='img2price'>Rp 500.000</p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/qqv1jryzhlkeuwjsmcfd' alt='respira' />
            <p className='img2name'>Respira</p>
            <p><span className='span1'>Outdoor bar table and stool</span></p>
            <p className='img2price'>Rp 500.000</p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
          <div className='img22'>
            <LazyLoadImage className="image222" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/qqv1jryzhlkeuwjsmcfd' alt='respira' />
            <p className='img2name'>Respira</p>
            <p><span className='span1'>Outdoor bar table and stool</span></p>
            <p className='img2price'>Rp 500.000</p>
            <div className='middly'>
                <div className='test'>I love You</div>  
            </div>
          </div>
        </div>
      </section> 
      <section className='contactsection3'>
        <div className='icontext'>
          <div className='icontext12'>
            <img src={Trophy} alt="" />
            <div>
              <h4>High Quality</h4>
              <p>crafted from top materials</p>
            </div>
          </div>
          <div className='icontext12'>
            <img src={Warrantee} alt="" />
            <div>
              <h4>Warranty Protection</h4>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className='icontext12'>
            <img src={Hand} alt="" />
            <div>
              <h4>Free Shipping</h4>
              <p>Order over 150 $</p>
            </div>
          </div>
          <div className='icontext12'>
            <img src={Call} alt="" />
            <div>
              <h4>24 / 7 Support</h4>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop