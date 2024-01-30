import Shippingfrom from './Shippingfrom';
import {useCallback} from 'react'
 

const Product = ({referrer, productId, isDark})=>{

    const handleSubmit = useCallback((orderDetails) => {
        post('/product/' + productId + '/buy', {
          referrer,
          orderDetails,
        });
      }, [productId, referrer]);
    return <div>
        
        <Shippingfrom onSubmit={handleSubmit}/>
    </div>
}

export default Product;

function post(url, data) {
    // Imagine this sends a request...
    console.log('POST /' + url);
    console.log(data);
  }