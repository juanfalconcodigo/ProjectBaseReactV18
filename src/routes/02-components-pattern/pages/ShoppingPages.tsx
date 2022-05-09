import { ProductCard } from "../components";
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from "../data/products";

export default function ShoppingPages() {
    const { shoppingCart, onChangeCounterProduct } = useShoppingCart();
    return (
        <>
            <div>
                <h1>ShoppingPages</h1>
                <hr />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {products.map((e) => {
                        return (
                            <ProductCard product={e} className="bg-dark text-white" key={e.id} onChange={onChangeCounterProduct} value={shoppingCart[e.id]?.count || 0}>
                                <ProductCard.Image className="custom-image" style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,.2)' }} />
                                <ProductCard.Title className="text-bold" style={{ fontFamily: 'monospace', fontSize: '18px' }} />
                                <ProductCard.Buttons className="custom-buttons" />
                            </ProductCard>
                        )
                    })}

                    {/* <ProductCard product={product2} className="bg-dark text-white">
                        <ProductCard.Image img={product2.img} className="custom-image" style={{boxShadow:'10px 10px 10px 10px rgba(0,0,0,.2)'}}/>
                        <ProductCard.Title className="text-bold" style={{fontFamily:'monospace',fontSize:'18px'}}/>
                        <ProductCard.Buttons className="custom-buttons" />
                    </ProductCard> */}
                </div>

                <div className="shopping-card">
                    {Object.values(shoppingCart).map((e) => {
                        return (
                            <ProductCard key={e.id} product={e} className="bg-dark text-white" style={{ width: '100px' }} onChange={onChangeCounterProduct} value={e.count}>
                                <ProductCard.Image img={e.img} className="custom-image" style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,.2)' }} />
                                <ProductCard.Buttons className="custom-buttons" style={{ display: 'flex', justifyContent: 'center' }} />
                            </ProductCard>
                        )
                    })}
                </div>

                <div>
                    <code>
                        {JSON.stringify(shoppingCart, null, 5)}
                    </code>
                </div>
            </div>
        </>
    )
}
