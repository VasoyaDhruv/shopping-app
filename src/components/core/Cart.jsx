import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
    const user = useSelector(state => state.profile.user);

    console.log('User:', user);
}

export default Cart