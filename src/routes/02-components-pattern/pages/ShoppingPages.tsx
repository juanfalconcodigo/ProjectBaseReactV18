import { ProductCard } from "../components";
import { products } from "../data/products";
import '../styles/custom-styles.css';

const product = products[0];

export default function ShoppingPages() {
    return (
        <>
            <div>
                <h1>ShoppingPages</h1>
                <hr />
                <ProductCard product={product} className="bg-dark text-white" key={product.id} initialValues={{ count: 0, maxCount: 12 }}>
                    {
                        ({ reset, count, changeCount, maxCount }) => (
                            <>
                                <ProductCard.Image className="custom-image" style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,.2)' }} />
                                <ProductCard.Title className="text-bold" style={{ fontFamily: 'monospace', fontSize: '18px' }} />
                                <ProductCard.Buttons className="custom-buttons" />
                                <button onClick={reset}>Reset</button>
                                {(maxCount && maxCount-1 > count) && (<button onClick={() => changeCount(2)}>+2</button>)}
                                {(count >= 2) && (<button onClick={() => changeCount(-2)}>-2</button>)}
                                <span>{count}</span>
                            </>
                        )
                    }
                </ProductCard>

            </div>
        </>
    )
}
