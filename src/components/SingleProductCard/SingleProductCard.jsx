import React from 'react';
import styles from './singleproductcard.module.css'
import { useState } from 'react';
import { addToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

// При нажатии на -, увеличивать количество 
// При нажатии на +, уменьшать

const SingleProductCard = ({ img, title, price, descr, product }) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    return (
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <div className={styles["img-wrapper"]}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.price}>{price}</p>
                    <p className={styles.descr}>{descr}</p>
                    <div className={styles["control-wrapper"]}>
                        <div className={styles.quantity}>
                            <button className={styles["quantity-control"]} onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button> 
                                <span>{quantity}</span>
                            <button className={styles["quantity-control"]} onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <button className={styles.add} onClick={() => dispatch(addToCart({...product, quantity}))}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;

// condition && true

/*
    let quantity = 4

    let product = {
        title,
        id,
        descr,
        price,
        category,
        quantity: 4
    }
*/