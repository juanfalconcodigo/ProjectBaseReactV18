import { ProductButtons } from './ProductButtons';
import { ProductImg } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductButtons } from './ProductButtons';
export { ProductImg } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Image: ProductImg,
    Title: ProductTitle,
    Buttons: ProductButtons
});

