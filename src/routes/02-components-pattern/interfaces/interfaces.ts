import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    product: Product,
    count: number;
    changeCount: (value: number) => void;
    maxCount?: number | null;
    isCountReaced: boolean;
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): JSX.Element;
    Image: ({ img, className }: ProductImageProps) => JSX.Element;
    Title: ({ className }: ProductTitleProps) => JSX.Element;
    Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
}

export interface OnChangeArgs {
    product: Product;
    count: number;
}


export interface ProductInCart extends Product {
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}


export interface ProductCardHandlers {
    product: Product,
    count: number;
    changeCount: (value: number) => void;
    maxCount?: number | null;
    isCountReaced: boolean;
    reset: () => void;
}