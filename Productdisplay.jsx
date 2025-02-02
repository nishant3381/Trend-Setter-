import React from 'react'
import './Productdisplay.css'
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
export const Productdisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
       <div className="productdisplay-left">
         <div className="productdisplay-img-list">
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
         </div>
          <div className="productdisplay-img">
            <img  className='productdisplay-main-img' src={product.image}/>
          </div>
       </div>
       <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} />
            <img src={star_icon } />
            <img src={star_icon} />
            <img src={star_icon} />
            <img src={star_dull_icon} />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
       </div>
    </div>
  )
}
export default Productdisplay;