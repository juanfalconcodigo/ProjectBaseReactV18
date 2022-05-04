import { useState } from 'react';
interface PropsProduct {
    initialValue: number;
}
export const useProduct = ({ initialValue }: PropsProduct) => {
    const [count, setCount] = useState<number>(initialValue);
    const changeCount = (value: number) => {
        if (count <= 0 && value < 0) return; //recuerda tambien puedes usar MATH.max
        setCount((count) => count + value);
    }
    return {
        count,
        changeCount
    }
}