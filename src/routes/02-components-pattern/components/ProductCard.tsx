import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export interface Props {
    product: Product,
    children: ReactElement | ReactElement[],
    className?: string;
    style?: React.CSSProperties;
}

export function ProductCard({ product, children, className, style }: Props) {
    const { count, changeCount } = useProduct({ initialValue: 0 });
    return (
        <Provider value={{ count, changeCount, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}
