import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../reducers/productList.reducer';
import { changeQuantity, decrement, deleteFromCart, increment } from '../reducers/cart.reducer';
import { useEffect, useState } from 'react';

const CartPage = () => {

    const cartItems = useSelector(state => state.cart.items);
    const productList = useSelector(state => state.products.list);
    const dispatch = useDispatch();

    const getProduct = (productID) =>{
        return productList.find(product=> product.id == productID);
    }


    const handleRemoveItem = (e) =>{
        const delProduct = e.target.dataset.id;
        dispatch(deleteFromCart(delProduct));
    }

    const handleIncreaseQuantity = (productID) => (e) =>{
        dispatch(increment(productID));
    }

    const handleDecreaseQuantity = (productID) => (e) =>{
        dispatch(decrement(productID)); 
    }

    const handleChange = (productID) => (e) =>{
        const value = e.target.value;
        dispatch(changeQuantity({productID, value}));
    }

    const [total, updateTotal] =useState(0);

    useEffect(()=>{
      let newTotal = 0;
          Object.keys(cartItems).forEach(productId =>{
            const product = getProduct(productId);
            newTotal += product.price * cartItems[product.id];
          });
          updateTotal(newTotal);
    }, [cartItems]);

      console.log(cartItems);
    return(
        <div className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {
            Object.keys(cartItems).map(productId =>(
                <div className="bg-white p-7 shadow-md rounded-md flex">
                <div className="basis-1/4">
                  <img
                    src={getProduct(productId).image}
                    alt="Product 1"
                    className="w-full h-32 object-cover mb-4"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">{getProduct(productId).title}</h2> 
                  {/* <p className="text-gray-700">{getProduct(productId).description}</p>  */}
                  <span className="text-blue-500 font-bold mt-2">${getProduct(productId).price}</span>
                  <div className="flex items-center mt-4">
                    <label htmlFor="quantity" className="mr-2">
                      Quantity:
                    </label>
                    <button
                  onclick="decreaseQuantity('quantity1')"
                  class="bg-gray-300 text-gray-700 px-2 py-1 rounded-md"
                  onClick={handleDecreaseQuantity(productId)}
                >
                  -
                </button>
                    <input
                      type="number"
                      id="quantity"
                      className="border rounded-md px-2 py-1 mx-2"
                      value={cartItems[productId]}
                      min="1"
                      onChange={handleChange(productId)}
                    />
                <button
                  onclick="decreaseQuantity('quantity1')"
                  class="bg-gray-300 text-gray-700 px-2 py-1 rounded-md"
                  onClick={handleIncreaseQuantity(productId)}
                >
                  +
                </button>
                  </div>
                  <button
                class="bg-red-500 text-white px-4 py-2 rounded-md mt-2"
                onClick={handleRemoveItem}
                data-id={productId}
              >
                Remove
              </button>
                </div>
              </div>
            ))
        }
  

  
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Total: ${total}</h2> 
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Checkout
          </button>
        </div>
      </div>
    );
  };
  
export default CartPage;