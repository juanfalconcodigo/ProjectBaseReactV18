import { useState } from 'react';
import { ProductInCart, Product } from '../interfaces/interfaces';

export const useShoppingCart=()=>{
    const [shoppingCart, setShopppingCart] = useState<{ [key: string]: ProductInCart }>({});
    const onChangeCounterProduct = ({ count, product }: { count: number, product: Product }) => {
        console.log('Hiii..', count, product, shoppingCart);

            setShopppingCart((oldShoppingCart) => {
              /* const productInCart=state[product.id] || {...product,count:0};
              console.log('[MAX]',Math.max(productInCart.count+count,0))
              if(Math.max(productInCart.count+count,0)>0){
                  return {
                      ...state,
                      [productInCart.id]:{...productInCart,count:productInCart.count+count}
                  }
              }
              const {[productInCart.id]:deleteProduct,...newState}=state;
              return {
                    ...newState
              } */
              if( count === 0 ) {
                const {  [product.id]: toDelete, ...rest  } = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                [ product.id ]: { ...product, count }
            }
            });

    }
    return {
        shoppingCart,
        onChangeCounterProduct
    }
}