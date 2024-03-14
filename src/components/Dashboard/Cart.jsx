import { useSelect } from '@material-tailwind/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../slices/cartSlice'
import {
    CardFooter,
    Button,
  } from "@material-tailwind/react";

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart)

    const dispatch = useDispatch()
    const handleOnClick = () => {
        dispatch(removeFromCart(cart))
    }
  return (
  <div className='grid mt-[5rem] grid-cols-3 gap-10'>
      {
        cart.map((item, index) =>(
            <div key={index} className='bg-gray-200 rounded-md p-2 flex flex-col items-center'>
                <img src={item.image} alt="" className='h-[15rem] mix-blend-darken' />
                <h3 className='text-black h-[3rem] overflow-hidden my-2 text-center'>{item.title}</h3>
                <h2 className='text-black text-2xl'>${item.price}</h2>
                <CardFooter className="pt-0 w-full text-sm flex items-end justify-end">
                    <Button
                       ripple={false}
                       fullWidth={true}
                       onClick={handleOnClick}
                       className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none  bg-gray-400 p-2 hover:bg-gray-500 duration-200"
                     >
                       Remove From Cart
                     </Button>
                </CardFooter>
            </div>
        ))
      }
    </div>
  )
    }

export default Cart