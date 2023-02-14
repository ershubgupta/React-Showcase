import { Button } from 'react-bootstrap';
import React, {useState} from 'react'

export default function AddToCart(props) {
  const [isProductAdded, setIsProductAdded] = useState(false)
  function addToCart(prodDetail, updateCart) {
    // console.log(prodDetail);
    props.getcart(prodDetail, isProductAdded);
    // console.log({ ...prodDetail, quantity: prodDetail["quantity"] + 1 });
    // console.log(prodDetail.id);
    // props.getcart({ ...prodDetail, quantity: prodDetail["quantity"] + 1 });
    // console.log(updateCart);

    // if (isProductAdded) {
    //   let devicesArray = JSON.parse(localStorage.getItem("Cart"));
      
    //   // console.log(devicesArray.splice(devicesArray.indexOf(prodDetail), 1));
    //   // devicesArray.splice(devicesArray.indexOf(prodDetail), 1);
    //   devicesArray.filter((e) => console.log(e.id, prodDetail.id));
    //   if (devicesArray.filter((e) => e.id === prodDetail.id).length > 0) {
    //    props.getcart({ ...prodDetail, quantity: (++prodDetail["quantity"])});
    //     console.log("in if", prodDetail["quantity"]);
    //     console.log("in if", prodDetail);
    //   } else {
    //     console.log('in else')
    //     props.getcart({ ...prodDetail, quantity: prodDetail["quantity"] + 0 });
    //   }
    //   console.log(prodDetail.quantity);
    //   // console.log(devicesArray.hasOwnProperty("id"));
    //   // console.log(devicesArray.indexOf(prodDetail));
    //   // console.log(devicesArray.category);
    //   // localStorage.setItem("list", JSON.stringify(devicesArray));
    // }
    setIsProductAdded(true);
  }
  return (
    <Button
      variant="success"
      size="sm"
      data-incart={isProductAdded}
      onClick={() => addToCart(props.productDetails, props.updateCart)}
    >
      Add to Cart
    </Button>
  );
}
