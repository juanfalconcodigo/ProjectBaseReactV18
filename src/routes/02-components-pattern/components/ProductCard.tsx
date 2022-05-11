import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export interface Props {
    product: Product,
    /* children: ReactElement | ReactElement[], */
    children: (args:ProductCardHandlers) => JSX.Element,
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export function ProductCard({ product, children, className, style, onChange, value, initialValues }: Props) {
    const { count, changeCount, maxCount,reset,isCountReaced } = useProduct({ onChange, product, value, initialValues });
    return (
        <Provider value={{ count, changeCount, product, maxCount,isCountReaced }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({changeCount,count,product,isCountReaced,reset,maxCount})}
            </div>
        </Provider>
    )
}
