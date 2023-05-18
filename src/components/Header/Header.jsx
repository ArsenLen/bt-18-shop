import React from 'react';
import styles from './header.module.css'
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const isOpen = useSelector(state => state.cart.isOpen)
    const cartQuantity = useSelector(state => state.cart.quantityCart)
    return (
        <>
        <header>
            <div className={styles.wrapper} >
                <nav className={styles.nav}>
                    <a href="/" className={styles.link}>Home</a>
                    <Link to="/catalog" className={styles.link}>Shop</Link>
                    <a href="/" className={styles.link}>About</a>
                    <a href="/" className={styles.link}>Contact</a>
                    <Link to="/add" className={styles.link}>Add Product</Link>
                </nav>
                <div className={styles.icons}>
                    <a href="/" className={styles.icon}>
                        <img src="/images/profile-icon.png" alt="" className={styles.icon} />
                    </a>
                    <p className={styles.icon}>
                        <img src="/images/search-icon.png" alt="" className={styles.icon} />
                    </p>
                    <p className={styles.icon}>
                        <img src="/images/favorite-icon.png" alt="" className={styles.icon} />
                    </p>
                    <p className={styles.icon}>
                        { cartQuantity > 0 && <span className={styles.quantity}>{cartQuantity}</span> } 
                        <img src="/images/basket-icon.png " alt="" className={styles.icon} />
                    </p>
                </div>
                { isOpen && <Modal /> }
            </div>
        </header>
        </>
    );
};

export default Header;

// Сделать возможность открыть корзину