import React, { useContext } from 'react'
import './CSS/Shopcategory.css'
import { Shopcontext } from '../Context/Shopcontext'
import dropdown_icon from '../Components/assets/dropdown_icon.png'
import Item from '../Components/Items/Item'
 const Shopcategory = (props) => {
  const { all_product } = useContext(Shopcontext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner'  src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
          <div className="shopcategory-sort">
            Sort By<img src={dropdown_icon}/>
          </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
        
      </div>
      <div className="shopcategory-loadmore">
        <a href='/'>Explore More</a>
      </div>
    </div>
  )
}
export default Shopcategory;
