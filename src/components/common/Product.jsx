import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slices/cartSlice';



const Product = ({post}) => {
  const dispatch = useDispatch()
  const handleOnClick = () => {
    dispatch(addToCart(post))
  }
  return (

<Card className="flex flex-col gap-3 p-4 hover:scale-[1.02] justify-center items-center rounded-md duration-200 mt-[3rem] border-2 ">
<CardHeader shadow={false} floated={false} className="flex p-5">
<img src={post.image} className="object-fit max-h-52"/>
</CardHeader>
<CardBody className='mt-5'>
  <div className="mb-2 flex flex-col">
    <Typography color="blue-gray" className="font-medium text-[14px]">
      {post.title.split(" ").slice(0,10).join( " ") + " ..."}
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
<CardFooter className="pt-0 w-full text-sm flex items-end justify-end">
  <Button
    ripple={false}
    fullWidth={true}
    onClick={handleOnClick}
    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none  bg-gray-200 p-2 "
  >
    Add to Cart
  </Button>
</CardFooter>
</Card>
  )
}

export default Product