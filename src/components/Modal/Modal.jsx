import React from "react";
import styles from "./modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const Modal = () => {
  const products = useSelector(state => state.cart.productsCart)
  const dispatch = useDispatch()
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img
          src="/images/basket-close-icon.png"
          alt=""
          className={styles.close}
          onClick={() => dispatch(closeModal())}
        />
        <h2 className={styles.title}>Shopping Cart</h2>
        <div className={styles.line}></div>
        <div className={styles.products}>
          <div className={styles.product}>
            <img src="/images/test-product-img.png" alt="" />
            <div className={styles.info}>
              <h5 className={styles.name}></h5>
              <p>1 x Rs. 250,000.000</p>
            </div>
            <img src="/images/close-icon.png" alt="" />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.total}>
            <p className={styles.subtotal}>Subtotal</p> Rs. 250,000.00
          </div>
          <div className={styles.line}></div>
          <Link to="/cart" className={styles.link}>
            View Cart
          </Link>
          <a href="/checkout" className={styles.link}>
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
