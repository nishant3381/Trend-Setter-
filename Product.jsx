import React, { useContext } from 'react'
import  Shopcontext  from '../Context/Shopcontext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';

const Product = () => {
  const {all_product}=useContext(Shopcontext);
  console.log(all_product);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
    </div>
  )
}
export default Product
