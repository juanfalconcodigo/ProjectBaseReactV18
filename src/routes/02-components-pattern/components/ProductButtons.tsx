import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: React.CSSProperties;
}
export const ProductButtons = ({ className, style }: Props) => {
    const { count, changeCount } = useContext(ProductContext);
    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={() => changeCount(-1)}>-</button>
            <div className={styles.countLabel}>{count}</div>
            <button className={styles.buttonAdd} onClick={() => changeCount(1)}>+</button>
        </div>
    )
}