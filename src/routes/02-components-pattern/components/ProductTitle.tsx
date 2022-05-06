import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props{
    className?:string;
    style?:React.CSSProperties;
}
export const ProductTitle = ({className,style}:Props) => {
    const { product: { title } } = useContext(ProductContext);
    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>{title}</span>
    )
}