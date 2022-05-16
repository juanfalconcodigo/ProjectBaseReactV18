import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}
export const ProductImg = ({ img, className, style }: Props) => {
    const { product } = useContext(ProductContext);
    let showImage: string;
    if (img) {
        showImage = img;
    } else if (product.img) {
        showImage = product.img;
    } else {
        showImage = noImage;
    }
    return (
        <img className={`${styles.productImg} ${className}`} src={showImage} alt="Coffe Mug" style={style} />
    )
}