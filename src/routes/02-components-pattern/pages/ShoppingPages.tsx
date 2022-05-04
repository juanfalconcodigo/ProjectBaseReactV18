import { ProductCard } from "../components"



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
                    <ProductCard product={product} >
                        <ProductCard.Image img={product.img} />
                        <ProductCard.Title/>
                        <ProductCard.Buttons/>
                    </ProductCard>
                </div>

            </div>
        </>
    )
}
