import { Product, OnChangeArgs, InitialValues } from '../interfaces/interfaces';
import { useEffect, useRef, useState } from 'react';;

interface PropsProduct {
    product: Product
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}
export const useProduct = ({ onChange, product, value = 0, initialValues }: PropsProduct) => {
    const [count, setCount] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);
    const changeCount = (value: number) => {
        const newValue = Math.max(count + value, 0);
        if (initialValues?.maxCount && initialValues.maxCount < count + value) {
            return;
        }
        setCount((count) => newValue);
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCount(initialValues?.count || value);
    }
    useEffect(() => {
        if (!isMounted.current) return;
        console.log('Entro', value);
        setCount(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    return {
        count,
        changeCount,
        maxCount: initialValues?.maxCount || null,
        isCountReaced: !!initialValues?.maxCount && initialValues.maxCount === count,
        reset
    }
}