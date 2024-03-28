import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from "react-icons/io";
import { removeFromCart } from '../../slices/cartSlice';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const ViewCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const [totalAmount, setTotalAmount] = useState(total);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
 
  };

  useEffect(() => {
    setTotalAmount(total)
  },[total])
  
  const handleShippingChange = (option) => {
    let shippingCost = 0;
    switch (option) {
      case 'flat_rate':
        shippingCost = 20; 
        break;
      case 'express':
        shippingCost = 25;
        break;
      case 'free':
        shippingCost = 0;
        break;
      default:
        break;
    }
    setTotalAmount(total + shippingCost);
  };


  return (
    <>
    <div className='w-11/12 mx-auto mt-28 container'>
      <div>
        <h1 className='text-black font-bold opacity-50'>Shopping Cart</h1>
      </div>
 
      <div className='flex flex-col sm:flex-row mt-10 justify-between gap-10 '>

        {
          cart.length > 0 ? 
          (
            <div className='flex flex-col w-full gap-2'>
            {cart.map((item, index) => (
              <table key={index} className='bg-gray-100 p-2 '>
                <tbody>
                  <tr className='flex flex-col md:flex-row justify-between items-start md:items-center p-10 md:p-0'>
                    <td className='w-[8rem]'>
                      <div className='h-[5rem] max-w-[8rem] m-2 bg-gray-200 flex justify-center'>
                        <img src={item.image} alt="" className='mix-blend-darken p-2 h-[99%]' />
                      </div>
                    </td>
                    <td>
                      <h3 className='text-black text-[18px] min-w-[30rem] '>{item.title.split(" ").slice(0, 5).join(" ")}</h3>
                    </td>
                    <td><h2 className='text-black text-2xl flex'>${item.price}</h2></td>
                    <td>
                      <div className='flex gap-2 text-black hover:text-gray-500 duration-200 cursor-pointer pr-5' onClick={() => handleRemoveFromCart(item)}>
                        <IoMdClose className='text-black text-2xl' />
                        remove
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
          ):(
            <div>
              <p className='text-black mt-10 text-4xl'>Your cart is <span className='text-red-500'>Empty!</span></p>
            </div>
          )
        }
        <div className='bg-gray-200 h-fit p-2 shadow-xl min-w-[18rem]'>
          <div className='text-black flex justify-between gap-5 border-b-2 pb-3 font-semibold'>
            <h3>Subtotal</h3>
            <h3>${total}</h3>
          </div>
          <div className='text-black'>
            <h3 className='font-semibold'>Shipping</h3>
            <div className='flex flex-col gap-2 mt-3 mb-3'>
              <label htmlFor="flat_rate" className='flex items-center gap-2'>
                <input id="flat_rate" type="radio" name="shipping"
                 onClick={() => handleShippingChange('flat_rate')}
                 className=''
                  />
                Flat rate: <span className='text-blue-500'>$20.00</span>
                </label>
              <label htmlFor="express" className='flex items-center gap-2'>
                <input id="express" type="radio" name="shipping"
                 onClick={() => handleShippingChange('express')} 
                 />
                Local pickup: <span className='text-blue-500'>$25.00</span></label>
              <label htmlFor="free" className='flex items-center gap-2'>
                <input id="free" type="radio" name="shipping" 
                onClick={() => handleShippingChange('free')}
                 />
                Free shipping: <span className='text-blue-500'>$0.00</span></label>
            </div>
            
          </div>
          <div className='text-black flex justify-between gap-5 border-b-2 pb-3 font-semibold'>
            <h3>Total</h3>
            <h3>${totalAmount}</h3>
          </div>
          <Link to=''>
            <button className='p-3 w-full bg-black text-white hover:bg-blue-600 duration-200 '>Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default ViewCart;
