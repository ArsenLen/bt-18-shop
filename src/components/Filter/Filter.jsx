import React, { useState } from 'react';
import styles from './filter.module.css'

const Filter = (props) => {
    return (
        <div className={styles.filter}>
            <div className={styles.wrapper}>
                <div className={styles["icon-wrapper"]}>
                    <img src="/images/filter-icon.png" alt="" />
                    <p className={styles["filter-text"]}>Filter</p>
                    <img src="/images/grid-view-icon.png" alt="" />
                    <img src="/images/list-view-icon.png" alt="" />
                    <p className={styles["amount-text"]}>Showing 1-16 of 32 results</p>
                </div>
                <div className={styles.controls}>
                    <p className={styles.amount}>
                        Show
                        <input type="number" className={styles["amount-number"]}/>    
                    </p>
                    <p>
                        Sort by 
                        <select onChange={e => props.setSorted(e.target.value)} value={props.sorted}>
                            <option value="newest">Newest</option>
                            <option value="price">Price</option>
                        </select>
                    </p>    
                </div>    
            </div>
        </div>
    );
};

export default Filter;