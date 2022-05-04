import { ReactElement } from "react";

export interface Props {
    product: Product,
    children: ReactElement | ReactElement[]
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    product: Product,
    count: number;
    changeCount: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ product, children }: Props): JSX.Element;
    Image: ({ img }: { img?: string | undefined; }) => JSX.Element;
    Title: () => JSX.Element;
    Buttons: () => JSX.Element;
}