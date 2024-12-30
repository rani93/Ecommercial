import React from 'react';
import './ProductCard.css';
const ProductCard =({product})=>{
    return (
        <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img src={product.imageUrl} alt="product" 
                className='object-cover object-left-top w-full h-full'/>

            </div>
            <div className='p-3 bg-white textPart' >
                <div>
                    <p className ="font-bold opacity-60">{product.brand} </p>
                    <p>{product.title}</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>{product.discountedPrice}</p>
                    <p className='line-through opacity-50'>{product.price}</p>
                    <p className='font-semibold text-green-600'>{product.discountPersent}% off</p>
                </div>
                    
                
            </div>
        </div>
    );
}

export default ProductCard;