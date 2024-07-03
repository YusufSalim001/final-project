import React from 'react'

import './Home.css'
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component'




const Home = () => {
  return (
    <div>
      <div className='navDiv'>
        <div className='navinner'>
          <div>
            <p className='p1'>New Arrival</p>
            <h2 className='h2'>Discover Our <br></br> New Collection</h2>
            <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br></br> elit tellus, luctus nec ullamcorper mattis</p>
            <button className='bt'>Buy Now</button>
          </div>
        </div>
      </div>
      <section className='section1'>
        <h3>Browse The Range</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className='browse'>
          <div>
            <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/beautiful%20room/t0r3tsptpat3jklgyr7c' alt='dining' />
            <p>Dining</p>
          </div>
          <div>
          <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/beautiful%20room/xggybfxkom4nwizieruq' alt='Living' />
            <p>Living</p>
          </div>
          <div >
          <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/beautiful%20room/z6zmazntaw8ksrhitsbs' alt='Bedroom' />
            <p>Bedroom</p>
          </div>
        </div>
      </section>
      <section className='gallery'>
        <h2>Our Products</h2>
        <div className='galleryimage'>
          <div className='img2'>
          <LazyLoadImage className="image" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/nvcowkmuonk6ctt0w5m3' alt='syltherine' />
            <p className='img2name'>Syltherine</p>
            <p><span span className='span1'>Stylish cafe chair</span></p>
            <p className='img2price'>Rp 2.500.000 <span className='span2'>Rp 3.500.000</span></p>
          </div>
          <div className='img2'>
          <LazyLoadImage className="image" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/m7uchxi1v1co95qhqgiz' alt='laviosa' />
            <p className='img2name'>Laviosa</p>
            <p><span className='span1'>Stylish cafe chair</span></p>
            <p className='img2price'>Rp 2.500.000</p>
          </div>
          <div className='img2'>
          <LazyLoadImage className="image" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/k0wesohemosj2saw0zqh' alt='lolito' />
            <p className='img2name'>Lolito</p>
            <p><span className='span1'>Luxury big sofa</span></p>
            <p className='img2price'>Rp 7.000.000 <span span className='span2'>Rp 14.000.000</span></p>
          </div>
          <div className='img2'>
          <LazyLoadImage className="image" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/qqv1jryzhlkeuwjsmcfd' alt='respira' />
            <p className='img2name'>Respira</p>
            <p><span className='span1'>Outdoor bar table and stool</span></p>
            <p className='img2price'>Rp 500.000</p>
          </div>
        </div>
        <div className='galleryimage'>
          <div className='img2'>
          <LazyLoadImage className="image" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/bvji2nhnb4jjxbzgj5il' alt='grifo' />
            <p className='img2name'>Grifo</p>
            <p><span className='span1'>Night lamp</span></p>
            <p className='img2price'>Rp 1.500.000</p>
          </div>
          <div className='img2'>
          <LazyLoadImage className="image" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/hwxwxvryc2tgweiv7epp' alt='muggo' />
            <p className='img2name'>Muggo</p>
            <p><span className='span1'>Small mug</span></p>
            <p className='img2price'>Rp 150.000</p>
          </div>
          <div className='img2'>
          <LazyLoadImage className="image" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/xte8yppzf9evrk6dgd4d' alt='pingky' />
            <p className='img2name'>Pingky</p>
            <p><span className='span1'>Cute bed set</span></p>
            <p className='img2price'>Rp 7.000.000 <span span className='span2'>Rp 14.000.000</span></p>
          </div>
          <div className='img2'>
          <LazyLoadImage className="image" src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/our%20product/oiugsrxjplrwbqo6piha' alt='potty' />
            <p className='img2name'>Potty</p>
            <p><span className='span1'>Minimalist flower pot</span></p>
            <p className='img2price'>Rp 500.000</p>
          </div>
        </div>
        <button className='bt2'>Show More</button>
      </section>
      <section className='carousel'>
        <div className='carousel1'>
          <p>50+ Beautiful rooms inspiration</p>
          <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          <button>Explore More</button>
        </div>
        <div>
     
        </div>
        
      </section>
      <section className='sect3'>
        <p>share your setup with</p>
        <h2>#FuniroFurniture</h2>
        <div>
          <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/funirofurniture/yaytziugeufu3pfowuvz' alt='image1' />
          <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/funirofurniture/evmxa0e9vuqigdaklgt4' alt='image2' />
          <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/funirofurniture/lx2mvypodxfhxcvqigev' alt='image3' />
          <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/funirofurniture/gqwdbkffm2gm6bhukpfv' alt='image4' />
          <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/funirofurniture/yvb5ae8o2krsihjlvkt2' alt='image5' />
          <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/funirofurniture/nszb4ty4ipu1hjzmysel' alt='image6' />
          <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/funirofurniture/rpljqlgk6sygvtbtfppx' alt='image7' />
          <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/funirofurniture/siigdurcnuxvbacgiiiu' alt='image8' />
          <LazyLoadImage src='https://res.cloudinary.com/dneshezhq/image/upload/f_auto,q_auto/v1/ecommerce/funirofurniture/lxi2smlz5xeedubqenmx' alt='image9' />
        </div>
      </section>
    </div>
  )
}

export default Home