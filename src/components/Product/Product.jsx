import React from 'react';
import styles from './product.module.css'
import { Link } from 'react-router-dom';

const Product = ({img, title, price, date, gridView, id}) => {
    return (
        <div className={gridView ? styles.card : styles["card-list"]}>
            <img src={img} alt="" className={styles.img} />
            <div className={styles.info}>
                <Link to={`/catalog/${id}`} className={styles.name}>
                    {title}
                </Link>
                <h4 className={styles.price}>
                    {price}
                </h4>
                <p>{new Date(date).toString()}</p>
            </div>
        </div>
    );
};

export default Product;