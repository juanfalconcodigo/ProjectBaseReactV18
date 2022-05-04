import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export const ProductButtons = () => {
    const { count, changeCount } = useContext(ProductContext);
    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => changeCount(-1)}>-</button>
            <div className={styles.countLabel}>{count}</div>
            <button className={styles.buttonAdd} onClick={() => changeCount(1)}>+</button>
        </div>
    )
}