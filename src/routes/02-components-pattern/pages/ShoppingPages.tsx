import { ProductCard } from "../components";
import '../styles/custom-styles.css';



let product = {
    id: '1',
    title: 'Product 1',
    img: './coffee-mug.png'
}
export default function ShoppingPages() {
    return (
        <>
            <div>
                <h1>ShoppingPages</h1>
                <hr />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <ProductCard product={product} className="bg-dark text-white">
                        <ProductCard.Image img={product.img} className="custom-image" style={{boxShadow:'10px 10px 10px 10px rgba(0,0,0,.2)'}}/>
                        <ProductCard.Title className="text-bold" style={{fontFamily:'monospace',fontSize:'18px'}}/>
                        <ProductCard.Buttons className="custom-buttons" />
                    </ProductCard>
                </div>

            </div>
        </>
    )
}
