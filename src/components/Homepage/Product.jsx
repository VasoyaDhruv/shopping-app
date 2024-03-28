import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../slices/cartSlice';
import { ACCOUNT_TYPE } from '../../utils/contants'
import toast from 'react-hot-toast';

const Product = ({post}) => {
  const user = useSelector((state) => state.profile.user)
  const dispatch = useDispatch()
  const handleOnClick = () => {
    if (user.AccountType === ACCOUNT_TYPE.PERSONAL) {
      dispatch(addToCart(post));
    } else {
      toast.error('Please login with a personal account');
    }
  };
  
  return (

<Card className=" flex flex-col gap-3 p-4 hover:scale-[1.02] items-center rounded-md duration-200  border-2 ">
<CardHeader shadow={false} floated={false} className="flex p-5">
<img src={post.image} className="object-fit h-[10rem]"/>
</CardHeader>
<CardBody className='mt-5'>
  <div className="mb-2 flex flex-col h-[5rem]">
    <Typography color="blue-gray" className="font-medium text-[14px]">
      {post.title.split(" ").slice(0,5).join( " ") + " ..."}
    </Typography>
    <Typography color="blue-gray" className="font-sm font-bold opacity-90">
    ${post.price}
    </Typography>
  </div>
  {/* <Typography
    variant="small"
    color="gray"
    className="font-normal opacity-75"
  >
    {post.description.split(" ").slice(0,10).join( " ") + "..." }
  </Typography> */}
</CardBody>
<CardFooter className="pt-0 w-full text-sm ">
  <Button
    ripple={false}
    fullWidth={true}
    onClick={handleOnClick}
    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none  bg-gray-200 p-2 hover:bg-gray-300 duration-200 "
  >
    Add to Cart
  </Button>
</CardFooter>
</Card>
  )
}

export default Product