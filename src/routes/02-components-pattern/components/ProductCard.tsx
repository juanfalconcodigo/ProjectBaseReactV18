import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, Props } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export function ProductCard({ product, children }: Props) {
    const { count, changeCount } = useProduct({ initialValue: 0 });
    return (
        <Provider value={{ count, changeCount, product }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    )
}
