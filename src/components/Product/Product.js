
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const{product,AddToCart}=props
    const{img,name,seller,price,ratings}=product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p><small> seller :{seller}</small></p>
            <p><small>price:{price}$</small></p>
            <p><small>rating:{ratings}stars</small></p>
        
            </div>
            <button onClick={()=>AddToCart(product)} className='btn-cart'><p className='btn-text'>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;