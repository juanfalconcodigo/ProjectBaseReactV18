import { Product,OnChangeArgs  } from '../interfaces/interfaces';
import { useEffect, useRef, useState } from 'react';;

interface PropsProduct {
    product: Product
    onChange?: (args: OnChangeArgs) => void;
    value?:number;
}
export const useProduct = ({ onChange, product,value=0 }: PropsProduct) => {
    const [count, setCount] = useState<number>(value);
    const isController=useRef(!!onChange);
    const changeCount = (value: number) => {
        console.log('isController',isController.current);
        if(isController.current){
            return onChange!({ count: value, product });
        }
        const newValue=Math.max(count + value,0);
        setCount((count) => newValue);
        onChange && onChange({ count: newValue, product });
    }
    useEffect(()=>{
        console.log('Entro',value)
        setCount(value);
    },[value])
    return {
        count,
        changeCount
    }
}